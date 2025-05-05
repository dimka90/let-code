// Refactor arrray1.js 
// Declaring so many vairables
let phones= ["Samsung","Infinix","Redmi","I-phone"]

userChoice = "Redmi"
for(let i=0; i<phones.length; i++){
    if(phones[i] === userChoice){
        console.log(`${userChoice} is available`)
    }
}
console.log(process.argv[2])

function pushElementToArray(element){
    phones.push(element)
}
