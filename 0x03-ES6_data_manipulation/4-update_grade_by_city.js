export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  const gradedStudents = filteredStudents.map((student) => {
    const matchingGrade = newGrades.find((studentGrade) => studentGrade.studentId === student.id);

    student.grade = matchingGrade ? matchingGrade.grade : 'N/A'; // eslint-disable-line no-param-reassign
    return student;
  });

  return gradedStudents;
}
