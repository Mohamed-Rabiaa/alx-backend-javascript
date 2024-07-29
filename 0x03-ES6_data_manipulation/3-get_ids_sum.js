export default function getStudentIdsSum(students) {
  const intialValue = 0;
  const value = students.reduce((accumulator, student) => accumulator + student.id, intialValue);
  return value;
}
