console.log(process.platform);
const age = 10;
const name = 'Dicoding';
console.log(`Aku ${name}, umurku ${age} tahun.`);
let username = 'Dicoding';

console.log('Sebelum diubah:', username); // output: Sebelum diubah: Dicoding

username = 'dicodingacademy';

console.log('Setelah diubah:', username); // output: Setelah diubah: dicodingacademy

const number = 123;
const boolean = true;

const strNumber = String(number);//konversi number ke str
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);//parses membaca perkata jika bukan number maka konversi berhenti

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true
 
// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true
 
// NOT
console.log(!true); // false
console.log(!false); // true