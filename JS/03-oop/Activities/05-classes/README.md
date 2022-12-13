# Javascript Class Constructors

An activity for demonstrating class constructors and extending with parent and child subclasses.

This activity focuses on objects, classes, and inheritance. Work with your groups to complete this exercise.

You will make three classes: one parent class and two child classes.

1. Your parent class should have:
    3 properties
    1 method

2. Your child classes should have:
    1 additional property each

3. One of your child classes should include an additional method

You can make your classes anything you want (e.g. Person, Vehicle, Media, Ship, School, etc.) there are no restrictions on what your classes are or what their methods do.  Get creative!

- Below is a sample JS showing related structure for clarity
- An index file that links to the app.js file allows you to check your logic by logging values to the dev console in the browser.

```javascript
class Person {
  constructor(first, last, age, hairColor) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.relatives = [];
    this.hairColor = hairColor;
  }
  greet() {
    console.log("Hello, I'm " + this.first + ' ' + this.last);
  }
  hasBirthday() {
    this.age++;
  }
  addRelative(relative) {
    this.relatives.push(relative);
  }
  changeHairColor(newColor) {
    this.hairColor = newColor;
  }
}

class Student extends Person {
  constructor(first, last, age, hairColor, grade) {
    super(first, last, age, hairColor);
    this.grade = grade;
  }
  graduateStudent(newGrade) {
    this.grade = newGrade;
  }
}

class Athlete extends Student {
  constructor(first, last, age, hairColor, grade) {
    super(first, last, age, hairColor, grade);
    this.sports = [];
  }
  addSport(sport) {
    this.sports.push(sport);
  }
}

const person1 = new Athlete('Jon', 'Jackson', 40, 'brown', 8);

person1.greet();
person1.addRelative('Jane Doe');
person1.addSport('snow skiing');
person1.hasBirthday();

console.log(person1);
```

## Helpful Links

- []()
