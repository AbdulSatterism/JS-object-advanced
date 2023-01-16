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
    name: 'Hero Zero',

}
const zeroGolam = {
    id: 103,
    money: 10000,
    name: ' Zero Golam',

}

student.treaDey(100);

const heroTreatDey = student.treaDey.bind(heroBalam);
heroTreatDey(500);
const zeroGolamTreatDey = student.treaDey.bind(zeroGolam);
zeroGolamTreatDey(4900);