import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    let result = 'This is the list of our students\n';
    const promise = readDatabase(process.argv[2]);
    promise.then((studentsByField) => {
      const fields = Object.entries(studentsByField);
      fields.forEach(([field, students], index) => {
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;

        if (index < fields.length - 1) {
          result += '\n';
        }
      });
      response.send(result);
    })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }
    let result = '';
    const promise = readDatabase(process.argv[2]);
    promise.then((studentsByField) => {
      const students = studentsByField[major];
      console.log(`Students: ${students}`);
      result += `List: ${students.join(', ')}`;
      response.send(result);
    })
      .catch((err) => {
        response.statusCode = 500;
        response.send(err.message);
      });
  }
}

export default StudentsController;
