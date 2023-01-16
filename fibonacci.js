// 0, 1, 1, 2, 3, 5, 8, 13, 21
/*
3rd = 2nd + 1st
4th = 3rd + 2nd
nth = (n-1)+(n-2)
*/
// simple fibonacci series
/*
const fibo = [0, 1];

for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log("first 10 digit fibonacci seris is :", fibo)

*/

// fibonacci series in funtion

/*
function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const number = 5;
const fibonacci = fibonacciSeries(number);
console.log(fibonacci)

*/

// input manage in this series
function fibonacciSeries(num) {
    if (typeof num != "number") {
        return 'please give a number '
    }
    else if (num < 2) {
        return 'please enter a positive number getter than 1'
    }

    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const number = 1;
const fibonacci = fibonacciSeries(number);
console.log(fibonacci)