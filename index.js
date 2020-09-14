// Your code here
class Cat {
    constructor(name){
        this.name=name;
    }
    speak=()=>this.name+' says meow!';
}

class Dog {
    //...
    constructor(name){
        this.name=name;
    }
    speak=()=>this.name+' says woof!';
}

class Bird {
    //...
    constructor(gender,name){
        this.gender=gender;
        this.name=name;
    }
    speak=()=>{
        if(this.gender=='male')
        return ` It\'s me! ${this.name}, the parrot!`;
        else
        return ` ${this.name} says squawk!`;

    }
  }