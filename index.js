class Student {
  constructor(firstName, lastName, yearOfBirth, marks){
    this.firstName = firstName;
    this.lastName =lastName;
    this.yearOfBirth = yearOfBirth;
    this.marks = marks;
  }
  
  getAge(){
    let age = new Date().getFullYear() - this.yearOfBirth;
    return age;
  }
  
  averageScore(){
    let getMark = this.marks.reduce((accum, el) => accum + el, 0) / (this.marks.length);
    return getMark;
  }
  
}

class Visited extends Student {
  constructor(firstName, lastName, yearOfBirth, marks, visitArray){
    super(firstName, lastName, yearOfBirth, marks);
    this.visitArray = visitArray;
  }
  
  present(){
    let index = this.visitArray.findIndex((el) => el === undefined);
    if(index !== -1) {
      this.visitArray[index] = true;
    } else {
      alert(`This present fild of ${this.firstName} is full`);
    }
  }
  
  absent(){
     let index = this.visitArray.findIndex((el) => el === undefined);
    if(index !== -1) {
      this.visitArray[index] = false;
    } else {
      alert(`This absent fild of ${this.firstName} is full`);
    }
  }
  
  presentOrAbsent(student, count, method){
    for(let i = 0; i < count; i++){
      student[method]();
    }
  }
  
  averagePresent(){
   let getVisited = this.visitArray.filter((el) => el === true).length / (this.visitArray.length);
    return getVisited;
  }
  
  summary(){
    let averageMark = super.averageScore();
    let averageVisit = this.averagePresent();
    
    if(averageVisit >= 0.9 && averageMark >= 90){
      console.log('good job');
    } else if(averageVisit >= 0.9 || averageMark >= 90) {
      console.log('so so');
    } else {
      console.log('bad');
    }
  }
  
}

const student1 = new Visited ('Andy', 'Smit', 1995, [99, 87, 87, 87, 87, 87, 87, 87, 87, 87, 99, 5, 100, 90, 87, 99, 100, 100, 90, 87, 99, 100, 100, 90, 87], new Array(25));
const student2 = new Visited ('Mary', 'Kerry', 1957, [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,], new Array(25));
const student3 = new Visited ('Kent', 'Volter', 1973, [99, 87, 87, 87, 87, 87, 87, 87, 87, 87, 99, 5, 100, 90, 87, 99, 100, 100, 90, 87, 99, 100, 100, 90, 87], new Array(25));

console.log(student1);

student1.presentOrAbsent(student1, 15, 'present')
student1.presentOrAbsent(student1, 12, 'absent')


console.log(student1.getAge());
console.log(student1.averageScore());
console.log(student1.averagePresent());
student1.summary();


console.log(student2);

student2.presentOrAbsent(student2, 27, 'present')

console.log(student2.getAge());
console.log(student2.averageScore());
console.log(student2.averagePresent());
student2.summary();



console.log(student3);

student3.presentOrAbsent(student3, 26, 'present')

console.log(student3.getAge());
console.log(student3.averageScore());
console.log(student3.averagePresent());
student3.summary();