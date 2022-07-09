const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");
const Engineer = require("./Lib/Engineer");
const inquirer = require("inquirer");
const { fs } = require("file-system");
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
    ]).then(({ choices }) => {
        switch (choices) {
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
              //  console.log(managerList, internList, engineerList)
                bootStrap()
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

const bootStrap = () => {
    let managerCards = ""
    for (let i = 0; i < managerList.length; i++) {
        managerCards += `<div class="card" style="width: 18rem;">
            <h4 class="card-title bg-primary text-center">Manager</h4>
            <div class="card-body">
              <h5 class="card-title">${managerList[i].name}</h5>
              <p class="card-text">${managerList[i].id}</p>
              <p class="card-text">${managerList[i].officeNumber}</p>
              <a href="mailto:${managerList[i].email}" class="btn btn-primary">Email</a>
              </div>
          </div>`
    }
    let internCards = ""
    for (let i = 0; i < internList.length; i++) {
        internCards += `<div class="card" style="width: 18rem;">
            <h4 class="card-title bg-primary-success text-center">Intern</h4>
            <div class="card-body">
              <h5 class="card-title">${internList[i].name}</h5>
              <p class="card-text">${internList[i].id}</p>
              <a href="mailto:${internList[i].email}" class="btn btn-primary">Email</a>
              <p class="card-text">${internList[i].schoolName}</p>
            </div>
          </div>`
    }
    let engineerCards = ""
    for (let i = 0; i < engineerList.length; i++) {
        engineerCards += `<div class="card" style="width: 18rem;">
            <h4 class="card-title bg-primary text-center">Engineer</h4>
            <div class="card-body">
              <h5 class="card-title">${engineerList[i].name}</h5>
              <p class="card-text">${engineerList[i].id}</p>
              <p class="card-text">${engineerList[i].github}</p>
              <a href="mailto:${engineerList[i].email}" class="btn btn-primary">Email</a>
            </div>
          </div>`
    }
    const html = `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Bootstrap demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    <body>
    <header><h1>TEAM Profile </h1></header>
    <section class="d-flex flex-wrap">
    ${managerCards}
    </section>
    <section class="d-flex flex-wrap">

    ${engineerCards}
    </section>
    <section class="d-flex flex-wrap">
    ${internCards}
    </section>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
  </html>`
    fs.writeFileSync("index.html", html, function (err) {
        if (err) throw err;
        process.exit(0)
    })
    console.log("Profile generated")
}
question()