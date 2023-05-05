const products = [
    { name: 'laptop', price: 95500 },
    { name: 'shirt', price: 600 },
    { name: 'watch', price: 2500 },
    { name: 'mobile', price: 59999 },
    { name: 'pant', price: 800 },
];

let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);


const cart = [
    { name: 'laptop', price: 95500, quantity: 1 },
    { name: 'shirt', price: 600, quantity: 4 },
    { name: 'watch', price: 2500, quantity: 2 },
    { name: 'mobile', price: 59999, quantity: 1 },
    { name: 'pant', price: 800, quantity: 3 },
];

let totalCart = 0;

for (const product of cart) {
    const totalProduct = product.price * product.quantity;
    totalCart = totalCart + totalProduct;
}

console.log(totalCart);