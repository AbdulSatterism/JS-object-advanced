// console.log(this)
const student = {
    name: 'Ami nije',
    id: 101,
    money: 50000,
    treatDeyArrow: () => {
        console.log(this)
    },
    treatNai: function () {
        const arrow = () => console.log(this)
        arrow()
    }
    ,

    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here', this);
        return this.money;
    }
}

const zeroGolam = {
    id: 103,
    money: 10000,
    name: ' Zero Golam',

}

function add() {
    console.log(this)
}