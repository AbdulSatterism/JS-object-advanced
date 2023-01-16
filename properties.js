// property name mean key, and set value
const bottle = { color: 'yellow', hold: 'water', price: 50, clean: true };
// getting all property names
const keys = Object.keys(bottle);
// console.log(keys)

// getting all values
const values = Object.values(bottle);
// console.log(values)

// value and keys both
const both = Object.entries(bottle)
// console.log(both)

// object save from delete , but delete doesn't work after seal ,but we can change other thing but we can't added new element
Object.seal(bottle);
// but when we set freeze then we can't change anything
Object.freeze(bottle)


bottle.price = 100;



// delete one property
delete bottle.clean;

console.log(bottle)
