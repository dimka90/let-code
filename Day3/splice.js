// splice --> array method
/*
    1. Remove elements
    2. Add elements
    3 Replace elements
*/


// removing elements
let animals = ["lion", "Elephant", "Dog", "Goat", "Cat", "hen"]
console.log("Original array", animals)
let removed = animals.splice(2, 3)
console.log("Deleted elements===>", removed)
console.log("new array", animals)

// Inserting elements

animals.splice(2,0,"Lion", "Tiger", "Zebra")

console.log("New Array with animals ===>", animals)

// replace
let letters = ['a', 'b', 'c', 'd']
console.log("Before replacement", letters)
letters.splice(1,2, "z", "y");
console.log("After replacement", letters)