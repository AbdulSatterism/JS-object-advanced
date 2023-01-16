// swapping with temporary
var first = 5;
var second = 7;
console.log("Before swapping", first, second)
var temp = first;
first = second;
second = temp;

console.log("After swapping", first, second)


// swapping withOut temporary variable

let one = 8;
let two = 10;
console.log("before swapping ", one, two)
// calculate
one = one + two;
two = one - two;
one = one - two;
console.log("after swapping ", one, two)

// destructuring 
let firstNum = 12;
let secondNum = 14;
[firstNum, secondNum] = [secondNum, firstNum]
console.log("destruturing swapping very interesting for me ", firstNum, secondNum)