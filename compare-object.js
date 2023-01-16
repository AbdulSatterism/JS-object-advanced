const first = { a: 1, b: 2 }
const second = { a: 1, b: 2 };
const third = first;
if (first === third) {
    // console.log('obj are equal')
}
else {
    // console.log('not equal')
}

// 
// console.log(JSON.stringify(first))
// console.log(JSON.stringify(second))
if (JSON.stringify(first) === JSON.stringify(second)) {
    // console.log('equal')
}
else {
    // console.log('not equal')
}

const one = { a: 1, b: 2 };
const two = { b: 2, a: 1 };
if (JSON.stringify(one) === JSON.stringify(two)) {
    // console.log('equal')
}
else {
    // console.log('equal not ')
}

// different method to compare
function compareObj(one, two) {
    if (Object.keys(one).length !== Object.keys(two).length) {
        return false;
    }
    for (const prop in one) {
        if (one[prop] !== two[prop]) {
            return false;
        }
        else {
            return true;
        }
    }
}

const equal = compareObj(one, two);
console.log(equal)