const { createServer } = require('http');
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
const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const { method, url } = req;
  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url === '/students' && method === 'GET') {
    countStudents(process.argv[2], false)
      .then((data) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${data}`);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
