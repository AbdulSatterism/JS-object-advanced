const products = [
    { name: "iphone 14", price: 5000 },
    { name: "samsung", price: 7000 },
    { name: " laptop Dell", price: 5500 },
    { name: " laptop Asus", price: 4000 },
    { name: " smart watch samsung", price: 3000 },
    { name: "apple watch", price: 2000 },
    { name: "headphone", price: 500 }
];
// break 
// for (const product of products) {
//     if (product.price < 4000) {
//         break;
//     }
//     console.log(product)
// }


// continue
for (const product of products) {
    if (product.price < 5000) {
        continue;
    }
    console.log(product)
}