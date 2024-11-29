interface MajorCredits {
    credits: number;
    __brand: "MajorCredits";
}

interface MinorCredits {
    credits: number;
    __brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
     } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
    } as MinorCredits;
}

// Testing
const major1: MajorCredits = { credits: 30, __brand: "MajorCredits" };
const major2: MajorCredits = { credits: 20, __brand: "MajorCredits" };

const minor1: MinorCredits = { credits: 15, __brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 10, __brand: "MinorCredits" };

console.log("MajorCredit: ", sumMajorCredits(major1, major2)); // MajorCredit:  { credits: 50 }
console.log("MinorCredit: ",sumMinorCredits(minor1, minor2)); // MinorCredit:  { credits: 25 }
