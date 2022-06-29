const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");
const Engineer = require("./Lib/Engineer");
const inquirer = require("inquirer")
const managerList = []

const boss = () => {
   console.log("");
   inquirer.prompt([
    {
        type:"input",
        name:"employeeName",
        message: "Enter Manager Name:  "
    },
    {
        type:"input",
        name:"employeeID",
        message: "Enter Manager ID:  "
    },
    {
        type:"input",
        name:"eMail",
        message: "Enter Email:  "
    },
    {
        type:"input",
        name:"officeNumber",
        message: "Enter officeNumber:  "
    },
   ]).then(({employeeName, employeeID,eMail,officeNumber}) => {
       const newHire = new Manager(employeeName, employeeID, eMail,officeNumber)
       managerList.push(newHire);
   })
}

