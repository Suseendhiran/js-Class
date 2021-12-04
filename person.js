class Person {
  constructor(name, age, job, motherName, fatherName, hobbies) {
    (this.name = name),
      (this.age = age),
      (this.job = job),
      (this.motherName = motherName),
      (this.fatherName = fatherName),
      (this.hobbies = hobbies);
  }
}

const newPerson = new Person(
  "Fury",
  24,
  "Full stack web developer",
  "Norma",
  "Jack",
  ["Cycling", "Cooking", "Travelling"]
);
console.log(newPerson);
