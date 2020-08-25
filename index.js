// Your code here
class Cat {
  constructor(name,sex) {
    this.name=name;
    this.sex=sex;
  }

   speak(){
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name,sex) {
    this.name=name;
    this.sex=sex;
  }
  speak(){
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name,sex) {
    this.name=name;
    this.sex=sex;
  }
   speak(){

     let statement;
     this.sex=="male" ?  statement= `It's me! ${this.name}, the parrot!`:statement= `${this.name} says squawk!`;
     return statement;
    // if(this.sex=="male"){
    //     return `It's me!${this.name} ,the parrot`;
    // }
    // else if(this.sex=="female"){
    //
    // }

  }
}
