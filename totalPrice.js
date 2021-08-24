const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 55000 },
]
let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price
}
console.log(totalPrice); //output: 102180

// total of cart 
const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 3 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 }]

let totalPriceOfCart = 0;
for (const cartItem of cart) {
    totalPriceOfCart = totalPriceOfCart + (cartItem.price * cartItem.quantity)

}
console.log(totalPriceOfCart) //output: 110540

