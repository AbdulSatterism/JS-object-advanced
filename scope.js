function patroChai(age, earning) {
    // console.log(trueAge);
    var decision = canMarry(15000);
    console.log(decision)
    console.log(age)
    console.log(earning);

    // var trueAge = age + 7;
    const trueAge = age + 7;

    function canMarry(expense) {
        const remaining = earning - expense;
        if (remaining > 1000) {
            const showing = 500;
            console.log(showing)
            return true;
        }
        else {
            return false;
        }
    }
}

patroChai(21, 50000)