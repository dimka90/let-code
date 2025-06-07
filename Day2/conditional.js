// Conditionals
const user_save_pin = 2424;
var balance = 2000;
// Using nested if and else
function withdraw_cash(user_input_pin, amount){
    if (user_input_pin === user_save_pin ){
        if (amount < balance){
            balance -= amount
            console.log("Your balance is ", balance)
            console.log("you have successfully withdraw", amount) 
        }
        else{
            console.log("Insuffient balance")
        }
    }
   
    else{
        console.log("You entered the wrong pin or insuffient balance")
    }
}


function withdraw_cash(user_input_pin, amount){
    if (user_input_pin === user_save_pin && amount < balance){
            balance -= amount
            console.log("Your balance is ", balance)
            console.log("you have successfully withdraw", amount) 
    }
    else{
        console.log("You entered the wrong pin or insuffient balance")
    }
}


function grade(student_grade){
    let grade;
    if (student_grade >=70){
        grade = 'A'
        console.log(grade)
        console.log(" Your grade is ", grade)
        console.log("You Passed")
    }
    else if(student_grade >=60){
        grade = 'B'
        console.log(grade)
        console.log(" Your grade is ", grade)
        console.log("You Passed")
    }
    else if(student_grade >=50)
    {
        grade = 'C'
        console.log(grade)
        console.log(" Your grade is ", grade)
        console.log("You Passed")
    }
    else if(student_grade >=45)
        {
            grade = 'D'
            console.log(grade)
            console.log(" Your grade is ", grade)
            console.log("You Passed")
        }

        else if(student_grade >=40)
            {
                grade = 'E'
                console.log(" Your grade is ", grade)
                console.log("You Passed")
            }
      else{
        grade = 'F'
        console.log(grade)
        console.log("You Failed")
      }

}


let user_input =Number(process.argv[2])

grade(user_input)
