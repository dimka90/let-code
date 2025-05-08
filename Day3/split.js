
// split
// slice
// includes
// splice
// foreach

// String method --> split
const sentence = "Welcome to the world of programming"; // string

let result = sentence.split(" ")

// console.log(result)

let fruits ="Mango,Apple,Banana,Orange";
let splitFruits = fruits.split(",")
let fruit ="Mango-Apple-Banana-Orange";
// console.log(fruit.split("-"))


let fruitsInArray = ["Mango", "Apple", "Orange", "Banana"]
// convert this Array to string

const fruitsString = fruitsInArray.join(",")
console.log(fruitsString.split(","))
