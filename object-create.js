// using object literal
const student = { name: 'sakib al hasan', job: 'cricketer' };

// using constructor
const person = new Object()

// 
// const human = Object.create(null)
const human = Object.create(student)


class People {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

const pep = new People("Manus", 24)
// console.log(pep)


// function object
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');

class Upcoming {
    constructor(greet, year) {
        this.greet = greet;
        this.year = year;
    }
}
const newYear = new Upcoming('Happy new year', 2023)
console.log(newYear)