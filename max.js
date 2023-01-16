// maximum person define
/*
const business = 450;
const minister = 350;
const army = 600;

if (business > minister && business > army) {
    console.log("Business man is bigger than minister")
}
else if (minister > business && minister > army) {
    console.log("Minister ar pola is biggen")
}
else {
    console.log("Army is bigger than others")
}
*/

// maximum value with function
function findMaximumValue(business, minister, army) {
    if (business > minister && army) {
        return business;
    }
    else if (minister > business && minister > army) {
        return minister;
    }
    else {
        return army;
    }
}

const business = 100;
const minister = 200;
const army = 300;
const maxValue = findMaximumValue(business, minister, army);
console.log(maxValue)




// maximum person with Math

// var max = Math.max(business, minister, army);
// console.log(max)


