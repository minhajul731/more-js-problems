const phones = [
    { name: 'iphone 7', price: '150000', camera: 10, storage: 256 },
    { name: 'one plus note', price: '65000', camera: 8, storage: 32 },
    { name: 'xiaomi note', price: '80000', camera: 10, storage: 128 },
    { name: 'samsung s8', price: '25800', camera: 20, storage: 64 },
    { name: 'oppo f5', price: '15880', camera: 30, storage: 256 },
    { name: 'read magic', price: '85000', camera: 40, storage: 64 },
    { name: 'realme', price: '35000', camera: 10, storage: 16 },
    { name: 'readmi', price: '12700', camera: 20, storage: 128 },
    { name: 'nokia', price: '95000', camera: 30, storage: 256 },

];


function cheapestPhone(phones) {
    // initial phone object assaign in cheapest variable
    let cheapest = phones[0];
    for (const phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const cheapPhone = cheapestPhone(phones);
console.log(cheapPhone);