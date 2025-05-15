// array methods
const numbers = [1, 2, 3, 4, 5];

//1.  You must have an array first
//2. You have a function that will be used on each element of that array
//3. This fuction must take at least one argument
//4. The function will be called for each element of the array

numbers.forEach(function(number){
    console.log(number * 2);
})

let tasks = ["Sing", "Mop", "Code", "Dance"];

tasks.forEach(function(task){
    console.log(`Robot can ${task}`);
}
)

let names = ["John", "Jane", "Jack", "Jill"];
let count = 0;
names.forEach(function(name){
    name = name.toUpperCase();
    count +=1;

    console.log(`${count}: ${name}`); 
   
}
)

let students = [
    {name: "John", age: 20, testScore: [10, 20, 30]},  // 0
    {name: "Jane", age: 22,  testScore: [10, 15, 25]}, // 1
    {name: "Jack", age: 19, testScore: [5, 10, 25]}, // 2
    {name: "Jill", age: 21,  testScore: [10, 20, 30]},// 3
];

cutoffmark = 20;
students.forEach(function(student){
let studentscore = student['testScore']
let total = 0;
for(let i = 0; i<studentscore.length; i++){
total += studentscore[i];
}
console.log(`Student ${student.name} has a total score of ${total} and Average score of ${total/studentscore.length.toFixed(2)}`);
})
