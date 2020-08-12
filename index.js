// Your code here
let cat, dog, bird, bird2;

class Cat {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  speak() {
    return `${this.name} says meow!`;
  }
}
cat = new Cat("Sasha", "female");
cat.speak();

class Dog {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  speak() {
    return `${this.name} says woof!`;
  }
}
dog = new Dog("Rufio", "male");

class Bird {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  speak() {
    if (this.type == "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}
bird = new Bird("Pablo", "male");
bird.speak();
bird2 = new Bird("Mable", "female");
bird2.speak();

