#! /usr/bin/env node
import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 15000; //Dollar
let myPin = 5523;

// Welcome Message
console.log("Welcome");
//  pin
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "enter your pin code",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code.");

// OPERATIONS.
let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "please select option",
    type: "list",
    choices: ["withdraw", "check balance", "fastCash"],
  },
]); 

console.log(operationAns);

// Withdraw-Operation.
if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "enter yoyr amount",
      type: "number",
    },
  ]);
  if(amountAns.amount > myBalance){
    console.log("Insufficient Balance");
  } else {myBalance -= amountAns.amount;
  console.log(`Your Remaining is: ${myBalance}`);
  };
  // Checkbalance-Operation.
} else if (operationAns.operation === "check balance") {
  console.log("Your Balance is: " + myBalance);
}
// fastcash-operation.
if (operationAns.operation === "fastCash") {
  let fastCashAns = await inquirer.prompt([
    {
      name: "fastCash",
      message: "how much money you want to withdraw",
      type: "list",
      choices: ["2000", "4000", "6000"],
    },
  ]);
  if (fastCashAns.fastCash === "2000") {
    myBalance -= fastCashAns.fastCash;
    console.log(`Your Remaining Balance is ${myBalance}`);
  }
  if (fastCashAns.fastCash === "4000") {
    myBalance -= fastCashAns.fastCash;
    console.log(`Your Remaining Balance is ${myBalance}`);
  }
  if (fastCashAns.fastCash === "6000") {
    myBalance -= fastCashAns.fastCash;
    console.log(`Your Remaining Balance is ${myBalance}`);
  }
}
} else{
  console.log("Incorrect Pin Code!")
}
