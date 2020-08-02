// Your code here
class Cat {
  //...
  speak(){
    return "Sasha says meow!"
  }
}

class Dog {
  //...
  constructors(name){
    this.name=name;
  }
  speak(){
    return "Rufio says woof!"
  }
}

class Bird2 {
  //...
  constructors(male){
    this.male=male;
  }
  speak(){
    if (!this.male)
    return "Mable says squawk!";

  }
}
class Bird {
  //...
  constructors(male){
    this.male=male;
  }
  speak(){
  return "It\'s me! Pablo, the parrot!";

  }
}
