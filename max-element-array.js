// maximum number in a array 

function maximumNumber(numbers) {
    let maximum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > maximum) {
            maximum = element;
        }
    }
    return maximum;
}

const array = [12, 15, 45, 78, 62, 15, 78, 45, 100, 48, 75];
const maxValue = maximumNumber(array);
console.log("maximum value is :", maxValue);

