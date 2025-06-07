
// Array to hold local government area

let local_goverment =[
    "Kanke",
    "Pankshin",
    "Barkin-ladi",
    "Bokkos"
]
// calling the printArrayElement function
//To loop and print each element in the array
printArrayElement(local_goverment)


console.log("=================")
// Array to hold phones
let phones = [
    "Iphone",
    "Andriod",
    "Samsung",
    "Infinix",
    "Techno"
]

let laptops = [
    "Hp",
    "Dell",
    "Toshiba",
    "Apple"
]

// Calling the printArrayElement function
// To loop and print each element in the array
printArrayElement(laptops)
console.log("=================")

/* FunctionName: printArrayElement
/* Parameter: array
/* Description: printArrayElement takes in an array,
                loops all through the element of the
                array and  print each element.
/* Return     : None
*/      

/*
// for loop syntax
for(initialisation; condition; counter(increment/decremet))

// While loop syntax
while(codition){
counter(increment/decremt)
}

*/
function printArrayElement(array){
    let len = array.length;
    let i = 0;

    // for(let i =0; i<array.length; i++){
    //  console.log(array[i]);
    // }
    while (i < len){
        console.log(array[i]);
    }
}