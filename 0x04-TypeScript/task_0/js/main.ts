//main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Array of students
const studentsList: Array<Student> = [student1, student2];

// Creating the table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Loop through the array and append rows to the table
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
