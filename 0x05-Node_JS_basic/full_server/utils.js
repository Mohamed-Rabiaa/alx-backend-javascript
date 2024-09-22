const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data.split('\n').filter((line) => line.trim() !== '' && line.includes(','));
        const studentsByField = {};

        lines.forEach((line, index) => {
          if (index === 0) return;
          const [firstname, lastname, age, field] = line.split(',');
          if (firstname && lastname && age && field) {
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstname);
          }
        });
        resolve(studentsByField);
      }
    });
  });
}

export default readDatabase;
