function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
};

const newStudent1 = new Student('Nikita', 'male', 33);
const newStudent2 = new Student('Valentina', 'female', 35);
const newStudent3 = new Student('Alexandr', 'male', 38);

console.log(newStudent1);

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

newStudent1.setSubject('history');

Student.prototype.addMarks = function(...marks) {
    if (this.hasOwnProperty('marks') && this.marks !== []) {
        this.marks.push(...marks);
    } else {
        return 0;
    }
}

Student.prototype.getAverage = function() {
    if (this.hasOwnProperty('marks') && this.marks.length !== 0) {
      let sum = this.marks.reduce((total, mark) => total + mark, 0);
      this.average = sum / this.marks.length;
      return this.average;
    } else {
      this.average = 0;
      return this.average;
    }
  };
  

Student.prototype.exclude = function(reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}
