const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10]; // 2, 4, 6, 8, 10

let evenNumbers = numbers.filter((number) => number % 2  == 0)
console.log(evenNumbers)

const studentScore = [10, 20, 30, 10, 50, 60, 70]
let passScore = studentScore.filter((score) => score >=50)
console.log(passScore)
