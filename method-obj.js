const student = {
    id: 101,
    name: 'Abdul Satter',
    money: 5000,
    subject: 'CSE',
    topics: ['english', 'CSE-sub', 'Math'],
    bestFriend: {
        name: 'kkuddu',
        major: 'Geo or History'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        return this.money
    }

}

student.takeExam();
const remaining = student.treatDey(1000);
const remaining2 = student.treatDey(999);
console.log(remaining2);

const country = {
    name: 'BanglaDesh',
    budget: 500,
    area: '147k',
    people: {
        income: 10000,
        cost: 12000
    },
    totalCost: function (expen) {
        this.budget = this.budget - expen;
        return this.budget;
    }

}
const rem = country.totalCost(499);
console.log(rem)