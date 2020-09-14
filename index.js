// Your code here
class Cat {
    constructor(name){
        this.name=name;
    }
    speak(){
       return this.name+' says meow!';
    }
}

class Dog {
  
    constructor(name){
        this.name=name;
    }
    speak() {
        return `${this.name} says woof!`
      }
}

class Bird {
  
    constructor(name,gender){
        this.gender=gender;
        this.name=name;
    }
    speak(){
    
        if (this.gender == "male") {
            return `It's me! ${this.name}, the parrot!`
          } else {
            return `${this.name} says squawk!`;
    }
  }
}