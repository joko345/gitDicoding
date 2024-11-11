// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log(5 === 5 && 3 < 5); // true

// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(5 === 5 || 3 > 5); // true

// NOT
console.log(!true); // false
console.log(!false); // true

//variable dynamic js
let myNum = 0;
myNum = 1;

console.log(myNum); // 1

myNum = true;

console.log(myNum); // true

// Fungsi untuk menghitung total harga belanjaan
function calculateTotal(shoppingCart) {
  const total = 0;

  return shoppingCart.reduce((accumulator, cartItem) => {
    if (typeof cartItem.price === "number") {
      return accumulator + cartItem.price;
    } else {
      console.error(`Tipe data cartItem.price tidak valid:`, cartItem);
      return accumulator;
    }
  }, total);
}

// Contoh data belanjaan dengan beberapa kasus edge
const shoppingCart = [
  { name: "Apple", price: 300 },
  { name: "Banana", price: 120 },
  { name: "Orange", price: 130 },
  { name: "Watermelon", price: "160" },
  { name: "Pineapple", price: null },
  { name: "Grape", price: null },
];

// Memanggil fungsi dan mencetak hasilnya
console.log(`Total belanjaan: Rp ${calculateTotal(shoppingCart)}`);
