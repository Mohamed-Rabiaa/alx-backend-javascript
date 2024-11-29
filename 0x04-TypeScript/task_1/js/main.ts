// Teacher Interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; 
}

// Directors Interface
interface Directors extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string; 
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Testing
const student: StudentClass = new StudentClass("John", "Doe")
console.log(student.workOnHomework())
console.log(student.displayName())