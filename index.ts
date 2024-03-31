#! /usr/bin/env node
import inquirer from "inquirer"
let balance = 10000
let myPin = 1234;
let userPin = await inquirer.prompt([
    {
        name: "userPin",
        type: "number",
        message: "Enter Your Atm Pin : "
    }
])
if(userPin.userPin === myPin){
    console.log("Correct Pin !")
    console.log(`Your current balance is : ${balance}`)
    let options = await inquirer.prompt({
        name: "option",
        type: "list",
        message: "What do you want : ",
        choices: ["Withdraw","Check Balance"]
    })
    switch(options.option){
        case "Withdraw":
            let wdAmount = await inquirer.prompt({
                name: "wdAmount",
                type: "number",
                message: "Enter Withdraw Amount : "
            })
            if(wdAmount.wdAmount > 0 && wdAmount.wdAmount <= balance){
                balance -= wdAmount.wdAmount
                console.log(`Successfully Withdrawn ! Your remaining balance is ${balance}`)
            }else{
                console.log("Withdraw Failed !")
            }
        break;
        case "Check Balance":
            console.log(`Your Current Balance is : ${balance}`)
        break;
        default:
            console.log("Invalid Input")
    }
}else{
    console.log("Incorrect Pin !")
}