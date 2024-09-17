const fs = require('fs');

function countStudents(path, logToConsole = true) {
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
          if (index === 0) return; // Skip the header line

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

        if (logToConsole) {
          console.log(result);
        }

        resolve(result);
      }
    });
  });
}

module.exports = countStudents;
