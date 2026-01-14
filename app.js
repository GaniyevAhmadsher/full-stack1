// ============================================
// JAVASCRIPT ARRAY METHODS - 0 DAN BOSHLAB
// ============================================

console.log("=== ARRAY METHODS TUTORIAL ===\n");

// ============================================
// 1. ARRAY YARATISH
// ============================================

console.log("1. ARRAY YARATISH:");
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.of(1, 2, 3);
const arr4 = Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3);
console.log("arr4:", arr4);
console.log("\n");

// ============================================
// 2. ARRAY UZUNLIGI
// ============================================

console.log("2. ARRAY UZUNLIGI:");
const fruits = ["olma", "banan", "anor"];
console.log("fruits.length:", fruits.length);
console.log("\n");

// ============================================
// 3. ELEMENTLARGA KIRISH
// ============================================

console.log("3. ELEMENTLARGA KIRISH:");
console.log("fruits[0]:", fruits[0]); // "olma"
console.log("fruits[1]:", fruits[1]); // "banan"
console.log("fruits.at(-1):", fruits.at(-1)); // "anor" (oxirgi element)
console.log("\n");

// ============================================
// 4. ARRAYNI O'ZGARTIRISH METODLARI
// ============================================

console.log("4. ARRAYNI O'ZGARTIRISH METODLARI:");

// push() - oxiriga qo'shish
const numbers = [1, 2, 3];
numbers.push(4, 5);
console.log("push(4, 5):", numbers); // [1, 2, 3, 4, 5]

// pop() - oxiridan olib tashlash
const last = numbers.pop();
console.log("pop():", numbers, "| olib tashlangan:", last);

// unshift() - boshiga qo'shish
numbers.unshift(0);
console.log("unshift(0):", numbers); // [0, 1, 2, 3, 4]

// shift() - boshidan olib tashlash
const first = numbers.shift();
console.log("shift():", numbers, "| olib tashlangan:", first);

// splice() - o'rtadan qo'shish/olib tashlash
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 99); // index 2 dan 1 ta elementni olib tashla va 99 ni qo'sh
console.log("splice(2, 1, 99):", arr); // [1, 2, 99, 4, 5]

// reverse() - teskari qilish
const reversed = [1, 2, 3].reverse();
console.log("reverse():", reversed); // [3, 2, 1]

// sort() - tartiblash
const unsorted = [3, 1, 4, 1, 5];
unsorted.sort();
console.log("sort():", unsorted); // [1, 1, 3, 4, 5]

// Raqamlar uchun to'g'ri sort
const nums = [10, 2, 40, 5];
nums.sort((a, b) => a - b); // o'sish tartibida
console.log("sort((a,b) => a-b):", nums); // [2, 5, 10, 40]
console.log("\n");

// ============================================
// 5. ARRAYNI O'ZGARTIRMASDAN QAYTARISH
// ============================================

console.log("5. ARRAYNI O'ZGARTIRMASDAN QAYTARISH:");

// slice() - qismini olish
const original = [1, 2, 3, 4, 5];
const sliced = original.slice(1, 4); // index 1 dan 4 gacha (4 kirmaydi)
console.log("slice(1, 4):", sliced); // [2, 3, 4]
console.log("original o'zgarmadi:", original); // [1, 2, 3, 4, 5]

// concat() - birlashtirish
const arrA = [1, 2];
const arrB = [3, 4];
const combined = arrA.concat(arrB, [5, 6]);
console.log("concat():", combined); // [1, 2, 3, 4, 5, 6]

// join() - stringga aylantirish
const words = ["Salom", "Dunyo"];
const sentence = words.join(" ");
console.log("join(' '):", sentence); // "Salom Dunyo"
console.log("\n");

// ============================================
// 6. QIDIRISH METODLARI
// ============================================

console.log("6. QIDIRISH METODLARI:");

const users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Vali", age: 30 },
  { id: 3, name: "Hasan", age: 25 },
];

// indexOf() - birinchi topilgan index
const ages = [10, 20, 30, 20];
console.log("indexOf(20):", ages.indexOf(20)); // 1

// lastIndexOf() - oxirgi topilgan index
console.log("lastIndexOf(20):", ages.lastIndexOf(20)); // 3

// includes() - bor yoki yo'qligini tekshirish
console.log("includes(30):", ages.includes(30)); // true

// find() - shartga mos birinchi element
const user = users.find((u) => u.age === 25);
console.log("find(age === 25):", user); // { id: 1, name: "Ali", age: 25 }

// findIndex() - shartga mos birinchi index
const index = users.findIndex((u) => u.age === 30);
console.log("findIndex(age === 30):", index); // 1

// findLast() - shartga mos oxirgi element
const lastUser = users.findLast((u) => u.age === 25);
console.log("findLast(age === 25):", lastUser); // { id: 3, name: "Hasan", age: 25 }
console.log("\n");

// ============================================
// 7. TEKSHIRISH METODLARI
// ============================================

console.log("7. TEKSHIRISH METODLARI:");

// some() - kamida bitta element shartga mosmi?
const hasEven = [1, 3, 5, 8].some((n) => n % 2 === 0);
console.log("some(even):", hasEven); // true

// every() - barcha elementlar shartga mosmi?
const allPositive = [1, 2, 3].every((n) => n > 0);
console.log("every(positive):", allPositive); // true

// includes() - element bor yoki yo'q?
console.log("includes(2):", [1, 2, 3].includes(2)); // true
console.log("\n");

// ============================================
// 8. LOOP METODLARI (ITERATION)
// ============================================

console.log("8. LOOP METODLARI:");

const items = [10, 20, 30];

// forEach() - har bir element uchun funksiya bajarish
console.log("forEach():");
items.forEach((item, index) => {
  console.log(`  Index ${index}: ${item}`);
});

// map() - har bir elementni o'zgartirib yangi array qaytarish
const doubled = items.map((n) => n * 2);
console.log("map(x2):", doubled); // [20, 40, 60]

// filter() - shartga mos elementlarni qaytarish
const evens = [1, 2, 3, 4, 5, 6].filter((n) => n % 2 === 0);
console.log("filter(even):", evens); // [2, 4, 6]

// reduce() - barcha elementlarni bitta qiymatga kamaytirish
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log("reduce(sum):", sum); // 10

// reduceRight() - o'ngdan chapga reduce
const concatRight = ["a", "b", "c"].reduceRight((acc, curr) => acc + curr, "");
console.log("reduceRight(concat):", concatRight); // "cba"
console.log("\n");

// ============================================
// 9. QO'SHIMCHA METODLAR
// ============================================

console.log("9. QO'SHIMCHA METODLARI:");

// flat() - ichki arraylarni tekislash
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat():", nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log("flat(2):", nested.flat(2)); // [1, 2, 3, 4, 5, 6]

// flatMap() - map + flat birga
const words2 = ["hello world", "foo bar"];
const letters = words2.flatMap((word) => word.split(" "));
console.log("flatMap():", letters); // ["hello", "world", "foo", "bar"]

// fill() - arrayni qiymat bilan to'ldirish
const filled = new Array(5).fill(0);
console.log("fill(0):", filled); // [0, 0, 0, 0, 0]

// copyWithin() - elementlarni ko'chirish
const arr5 = [1, 2, 3, 4, 5];
arr5.copyWithin(0, 3); // index 3 dan boshlab 0 ga ko'chir
console.log("copyWithin(0, 3):", arr5); // [4, 5, 3, 4, 5]

// toReversed(), toSorted(), toSpliced() - o'zgarmas versiyalar (ES2023)
const original2 = [3, 1, 2];
const sorted = original2.toSorted();
console.log("toSorted():", sorted); // [1, 2, 3]
console.log("original o'zgarmadi:", original2); // [3, 1, 2]
console.log("\n");

// ============================================
// 10. ARRAY STATIC METODLARI
// ============================================

console.log("10. ARRAY STATIC METODLARI:");

// Array.isArray() - array ekanligini tekshirish
console.log("Array.isArray([1,2]):", Array.isArray([1, 2])); // true
console.log("Array.isArray('text'):", Array.isArray("text")); // false

// Array.from() - arrayga aylantirish
const str = "123";
const numArray = Array.from(str, Number);
console.log("Array.from('123', Number):", numArray); // [1, 2, 3]

// Array.of() - array yaratish
const newArr = Array.of(1, 2, 3);
console.log("Array.of(1,2,3):", newArr); // [1, 2, 3]
console.log("\n");

// ============================================
// 11. AMALIY MISOLLAR
// ============================================

console.log("11. AMALIY MISOLLAR:");

// Misol 1: Userlarni yosh bo'yicha tartiblash
const users2 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 20 },
  { name: "Hasan", age: 30 },
];
const sortedByAge = users2.sort((a, b) => a.age - b.age);
console.log("Yosh bo'yicha tartiblash:", sortedByAge);

// Misol 2: Faqat 25 yoshdan kattalarni topish
const adults = users2.filter((u) => u.age >= 25);
console.log("25+ yoshdagilar:", adults);

// Misol 3: Ismlarni bosh harf bilan yozish
const names = ["ali", "vali", "hasan"];
const capitalized = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log("Bosh harf bilan:", capitalized);

// Misol 4: Array ichidagi barcha raqamlarni yig'indisi
const mixed = [1, 2, "3", 4, "text"];
const total = mixed
  .filter((item) => typeof item === "number")
  .reduce((sum, num) => sum + num, 0);
console.log("Raqamlar yig'indisi:", total);

// Misol 5: Duplikatlarni olib tashlash
const withDups = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(withDups)];
console.log("Duplikatsiz:", unique); // [1, 2, 3, 4]

console.log("\n=== TUTORIAL TUGADI ===");
