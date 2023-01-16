// minimum value with fuction
/*
function findMinimumValue(first, second) {
    if (first < second) {
        console.log("first is smaller");
        return first;
    } else {
        console.log("second is smaller");
        return second
    }
}

let one = 10;
let two = 20;

let result = findMinimumValue(one, two)
console.log(result)

*/

function smallerNum(one, two) {
    if (one < two) {
        return one;
    }
    else {
        return two;
    }
}

let minimumNumber = smallerNum(20, 5);
console.log(minimumNumber)