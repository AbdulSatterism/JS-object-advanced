const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50, clean: true
};

// for use of object
/*
for (let i=0; i<9;i++){}
for (const num of numbers){} //array
for (const prop in student ){}//for in object ar upor apply kore
*/

for (const bot in bottle) {
    // console.log(bot) //properties
    // console.log(bot, bottle[bot])
}

const keys = Object.keys(bottle);
for (const prop of keys) {
    // console.log(prop, bottle[prop])
}
// console.log(keys)

// advanced 
const entries = Object.entries(bottle);
// console.log(entries)
// const [key,value ]=['color','yellow']

// entries diye solve [] value and property output so we need 2 things
// for (const value of Object.entries(bottle)) {
//     console.log(value)
// }
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value)
}

// 
const array = ['color', 'jeans', 'tom'];
