function minimumElement(array) {
    let minimum = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < minimum) {
            minimum = element;
        }
    }
    return minimum;
}
const numbers = [14, 58, 45, 7, 84, 62, 1, -45, 45, 78];
const minValue = minimumElement(numbers);
console.log("minimum value is :", minValue)