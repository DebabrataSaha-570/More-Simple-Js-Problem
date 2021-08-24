// find the cheapest phone from an array of phone objects.

const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 15000, camera: 8, storage: 16 },
    { name: 'xiaomi m3', price: 12000, camera: 16, storage: 32 },
    { name: 'oppo a2', price: 17000, camera: 32, storage: 16 },
    { name: 'nokia n95', price: 8000, camera: 4, storage: 32 },
    { name: 'htc h81', price: 25000, camera: 16, storage: 16 }
];

let cheapest = phones[0].price;
for (const phone of phones) {
    var phonePrice = phone.price;
    if (phonePrice < cheapest) {
        cheapest = phonePrice
    }
}
console.log(cheapest)