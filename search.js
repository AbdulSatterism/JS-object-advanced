const products = [
    { name: "iphone 14", price: 100000 },
    { name: "samsung", price: 700000 },
    { name: " laptop Dell", price: 55000 },
    { name: " laptop Asus", price: 40000 },
    { name: " smart watch samsung", price: 10000 },
    { name: "apple watch", price: 80000 },
    { name: "headphone", price: 1000 }
];

function searchProducts(products, searchText) {
    const found = []
    for (const product of products) {
        if (product.name.includes(searchText)) {
            found.push(product.name)
        }

    }
    return found;

}
const result = searchProducts(products, 'watch');
console.log(result);