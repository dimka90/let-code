// Refactor arrray1.js 
// Declaring so many vairables


let phones = ["Samsung","Infinix","Redmi","I-phone"] // Array
let handset = "Huawei" // String
let num = 40 // Number
userChoice = "Redmi"
for(let i=0; i<phones.length; i++){
    if(phones[i] === userChoice){
        console.log(`${userChoice} is available`)
    }
}

// pushElementToArray(phones, "Nokia")

// popArrayElement()

// pushElementToArray(phones, "Nokia")
// console.log(phones)


// Deleting the last element from an array
function  popArrayElement(array){
    if(Array.isArray(array)){

    
    array.pop()
    }
}



function pushElementToArray(array, element){
    if (Array.isArray(array)){
array.push(element)
    }
    else{
        console.log("It is not an array")
    }
}



 function  shiftArrayElement(array){
    if(Array.isArray(array)){}
    array.shift()
}


let userInput = process.argv[2]

pushElementToArray(phones, userInput)
console.log(phones)