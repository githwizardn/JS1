// 1. Primitive Types მაგალითები
let myString = "Hello, World!";   // String
let myNumber = 42;                // Number
let myBoolean = true;             // Boolean
let myNull = null;                // Null
let myUndefined;                  // Undefined
let myBigInt = 12345678901234567890; // BigInt
let mySymbol = Symbol("id");      // Symbol

console.log("Primitive Types:");
console.log(myString, myNumber, myBoolean, myNull, myUndefined, myBigInt, mySymbol);

// 2. დამატებითი ცვლადები
let name = "ნოდარი";
let dayOfWeek = "ორშაბათი";
let favoriteActivity = "პროგრამირება";

// 3. წინადადება ტრადიციული სინტაქსით (Concatenation)
let sentence1 = "Hi, my name is " + name + "! Today is " + dayOfWeek + ", a perfect day for " + favoriteActivity + ".";
console.log(sentence1);

// 4. წინადადება Template Literal სინტაქსით (Backticks)
let sentence2 = `Hi, my name is ${name}! Today is ${dayOfWeek}, a perfect day for ${favoriteActivity}.`;
console.log(sentence2);
