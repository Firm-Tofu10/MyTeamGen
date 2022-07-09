const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");
const Engineer = require("./Lib/Engineer");
const inquirer = require("inquirer")
let managerList = []
let internList = []
let engineerList = []

const addBoss = () => {
    console.log("");
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Enter Manager Name:  "
        },
        {
            type: "input",
            name: "employeeID",
            message: "Enter Manager ID:  "
        },
        {
            type: "input",
            name: "eMail",
            message: "Enter Email:  "
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter officeNumber:  "
        },
    ]).then(({ employeeName, employeeID, eMail, officeNumber }) => {
        const newHire = new Manager(employeeName, employeeID, eMail, officeNumber)
        managerList.push(newHire);
        question()
    })
}

const question = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "choices",
            choices: ["Add Engineer", "Add Manager", "Add Intern", "Exit App"],
            message: ":Role Choices"
        }
    ]).then(({choices }) => {
       switch(choices){
        case "Add Engineer":
            addEngineer();
            break;
        case "Add Intern":
            addIntern();
            break;
            case "Add Manager":
                addBoss();
                break;
        default:
            console.log(managerList,internList,engineerList)
            process.exit(0)
       }
    })
}


const addIntern = () => {
    console.log("");
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Enter Intern Name",
        },
        {
            type: "input",
            name: "employeeID",
            message: "Enter Intern ID:  "
        },
        {
            type: "input",
            name: "eMail",
            message: "Enter Email:  "
        },
        {
            type: "input",
            name: "schoolName",
            message: "Enter School Name:  "
        },
    ]).then(({ employeeName, employeeID, eMail, schoolName }) => {
        const newHire = new Intern(employeeName, employeeID, eMail, schoolName)
        internList.push(newHire);
        question()
    })
}

const addEngineer = () => {
    console.log("");
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Enter Engineer Name: "  
        },
        {
            type: "input",
            name: "employeeID",
            message: "Enter Engineer ID:  "
        },
        {
            type: "input",
            name: "eMail",
            message: "Enter Email:  "
        },
        {
            type: "input",
            name: "githubName",
            message: "enterUsername:  "
        },
    ]).then(({ employeeName, employeeID, eMail, githubName }) => {
        const newHire = new Engineer(employeeName, employeeID, eMail, githubName)
        engineerList.push(newHire);
        question()
    })
}

question()