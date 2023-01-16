const student = {
    id: 101,
    money: 100000,
    name: 'Abdul Satter',
    treaDey: function (expense) {
        this.money = this.money - expense;
        console.log("from here", this)
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 5000,
    name: 'Hero Balam',

}
const zeroGolam = {
    id: 103,
    money: 10000,
    name: ' Zero Golam',

}
// call in js object 

// student.treaDey.call(heroBalam, 500)
// student.treaDey.call(zeroGolam, 1002)

// apply in js object
student.treaDey.apply(heroBalam, [500]);
student.treaDey.apply(zeroGolam, [1999])