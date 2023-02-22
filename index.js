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


student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();

console.log(student1);

console.log(student1.getAge());
console.log(student1.averageScore());
console.log(student1.averagePresent());
student1.summary();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

console.log(student2);

console.log(student2.getAge());
console.log(student2.averageScore());
console.log(student2.averagePresent());
student2.summary();

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log(student3);

console.log(student3.getAge());
console.log(student3.averageScore());
console.log(student3.averagePresent());
student3.summary();