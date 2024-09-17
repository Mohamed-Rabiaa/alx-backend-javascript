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
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, students] of Object.entries(studentsByField)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
