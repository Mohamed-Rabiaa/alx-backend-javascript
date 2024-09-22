const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data.split('\n').filter((line) => line.trim() !== '' && line.includes(','));

        let totalStudents = 0;
        const studentsByField = {};
        let result = '';

        lines.forEach((line, index) => {
          if (index === 0) return;
          const [firstname, lastname, age, field] = line.split(',');
          if (firstname && lastname && age && field) {
            totalStudents += 1;
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstname);
          }
        });

        result += `Number of students: ${totalStudents}\n`;
        const fields = Object.entries(studentsByField);
        fields.forEach(([field, students], index) => {
          result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;

          if (index < fields.length - 1) {
            result += '\n';
          }
        });
        resolve(result);
      }
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const promise = countStudents(process.argv[2]);
  promise.then((result) => {
    res.end(`This is the list of our students\n${result}`);
  })
    .catch((err) => {
      res.end(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

module.exports = app;
