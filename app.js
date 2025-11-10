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
let age = 29;
let country = "საქართველო";
let city = "თბილისი";
let profession = "დეველოპერი";
let hobby = "ფოტოგრაფია";
let language = "ქართული";
let numberOfSiblings = 1;
let favoriteFood = "ხინკალი";
let carModel = "Toyota";
let favoriteColor = "ლურჯი";
let favoriteMovie = "matrix";
let favoriteBook = "1984";
let musicGenre = "როკი";
let childhoodMemory = "პირველი სკოლის დღე";
let lifeGoal = "მსოფლიო მოგზაურობა";


// 3. წინადადება ტრადიციული სინტაქსით (Concatenation)
let sentence1 = "Hi, my name is " + name + "! Today is " + dayOfWeek + ", a perfect day for " + favoriteActivity + ".";
console.log(sentence1);

// 4. წინადადება Template Literal სინტაქსით (Backticks)
let sentence2 = `Hi, my name is ${name}! Today is ${dayOfWeek}, a perfect day for ${favoriteActivity}.`;
console.log(sentence2);

let story = `
${name} ცხოვრობს ${city}-ში, ${country}-ში. ის არის ${age} წლის ${profession}, რომელსაც უყვარს ${hobby} და ${favoriteActivity}.
ის ყველაზე მეტად სიამოვნებით მიირთმევს ${favoriteFood}-ს და უსმენს ${musicGenre}-ს.
მისი საყვარელი ფერია ${favoriteColor}, ხოლო საყვარელი ფილმი — "${favoriteMovie}", წიგნი — "${favoriteBook}".
ბავშვობიდან ახსოვს ${childhoodMemory}, რომელიც მას მუდამ შთააგონებს.
ნოდარის ცხოვრების მთავარი მიზანია ${lifeGoal}, და ალბათ ერთ დღეს ის მიაღწევს ამას — თავისი ${carModel}-ით და კამერით ხელში.
`;

console.log(story);