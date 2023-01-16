// !4= 4*3*2*1
// let factorial = 1;
// for (let i = 4; i >= 1; i--) {
//     factorial = factorial * i;
// }
// console.log(factorial)

function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(--i);
}
console.log(factorial(4))

// process
// i*factorial(--i)
// 4*factirial(3)
// 4*3*factirial(2)
// 4*3*2factirial(1)
// 4*3*2*1
// return 24