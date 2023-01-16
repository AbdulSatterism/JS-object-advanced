/*
const numbers = [44, 45, 78, 46, 48, 59, 62, 53, 48, 23, 41];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log("array number sum is :", sum)
*/

// array sum in function

function arraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const numbers = [44, 45, 78, 46, 48, 59, 62, 53, 48, 23, 41];
const total = arraySum(numbers);
console.log(total)