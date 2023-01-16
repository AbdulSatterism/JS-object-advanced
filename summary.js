const pen = {
    brand: 'econo',
    price: 10,
    writePoem: function (pra) {
        console.log(pra)
    }
}

const keys = Object.keys(pen);
const values = Object.values(pen);
const entrieds = Object.entries(pen);
// console.log(entrieds)

// for in
for (const key in pen) {
    // console.log(pen[key])
}

// object compare 
const a = { alu: 100 };
const b = { alu: 100 };

if (a === b) {
    console.log(true)
}
else {
    console.log(false)
}

// bind, call, apply
const bounded = pen.writePoem.bind(a);
bounded();
pen.writePoem.call(a, 'fish');
pen.writePoem.apply(a, [param])

// this
