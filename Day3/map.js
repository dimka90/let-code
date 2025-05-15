

const numbers = [1, 2, 3, 4, 5];

let mutiple_numbers  = numbers.map(function(number){
    return number * 2
})

console.log(mutiple_numbers)



let tasks = ["Sing", "Mop", "Code", "Dance"];

let map_task = tasks.map(function(task){
    return task.toUpperCase();
}
)
console.log(map_task)