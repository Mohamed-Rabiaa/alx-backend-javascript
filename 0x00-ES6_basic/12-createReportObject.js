export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      let i = 0;
      while (i < Object.keys(employeesList).length) {
        i += 1;
      }
      return i;
    },
  };
}
