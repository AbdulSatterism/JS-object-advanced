// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//     sum = sum + i;
// }
// console.log(sum)

// like for loop sum function

// recursion function 
function sum(i) {
    console.log(i)
    if (i == 1) {
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(4))

// process
