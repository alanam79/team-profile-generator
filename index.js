const fs = require("fs");
const validator = require("validator");
const path = require("path");
const generatePage = require("./src/page-template");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { default: isEmail } = require("validator/lib/isEmail");

const teamArray = [];

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

function appMenu() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
          validate: (managerNameInput) => {
            if(managerNameInput) {
              return true;
            } else {
              console.log("Please enter a Manager Name! (Required)")
              return false;
            }
          }
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's id?",
          validate: (managerIdInput) => {
            if(managerIdInput) {
              return true;
            } else {
              console.log("Please enter the Manager ID! (Required)")
              return false;
            }
          }
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email?",
          validate: (managerEmailInput) => {
            if (validator.isEmail(managerEmailInput)) {
              return true;
            } else {
              console.log("Please enter your email! (Required)");
              return false;
            }
          }
        },
        {
          type: "input",
          name: "managerNumber",
          message: "What is the Manager's Office number?",
          validate: (managerNumberInput) => {
            if (managerNumberInput) {
              return true;
            } else {
              console.log("Please enter the Manager;s Office Number! (Required)")
              return false;
            }
          }
        },
      ])
      .then((answers) => {
        const { managerName, managerId, managerEmail, managerNumber } = answers;
        const manager = new Manager(
          managerName,
          managerId,
          managerEmail,
          managerNumber
        );

        teamArray.push(manager);
        console.log("team!", teamArray);
        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "What would you like to do next?",
          choices: [
            "Add Manager",
            "Add Engineer",
            "Add Intern",
            "I dont want to add anymore members",
          ],
        },
      ])
      .then((answer) => {
        const userChoice = answer.choice;
        switch (userChoice) {
          case "Add Manager":
            createManager();
            break;
          case "Add Engineer":
            createEngineer();
            break;
          case "Add Intern":
            createIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
          validate: (engineerNameInput) => {
            if (engineerNameInput) {
              return true;
            } else {
              console.log("Please enter an Engineer name! (Required)");
              return false;
            }
          }
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's id?",
          validate: (engineerIdInput) => {
            if (engineerIdInput) {
              return true;
            } else {
              console.log("Please enter an Engineer ID! (Required)");
              return false;
            }
          }
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
          validate: (engineerEmailInput) => {
            if (engineerEmailInput) {
              return true;
            } else {
              console.log("Please enter the Engineer's email! (Required)");
              return false;
            }
          }
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's github username?",
          validate: (engineerGithubInput) => {
            if (engineerGithubInput) {
              return true;
            } else {
              console.log("Please enter the Engineer's GitHub username! (Required)");
              return false;
            }
          }
        },
      ])
      .then((answers) => {
        const { engineerName, engineerId, engineerEmail, engineerGithub } =
          answers;
        const engineer = new Engineer(
          engineerName,
          engineerId,
          engineerEmail,
          engineerGithub
        );

        teamArray.push(engineer);
        console.log("team!", teamArray);
        createTeam();
      });
  }

  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the Interns's name?",
          validate: (internNameInput) => {
            if (internNameInput) {
              return true;
            } else {
              console.log("Please enter the Intern's name! (Required)")
              return false;
            }
          }
        },
        {
          type: "input",
          name: "internId",
          message: "What is the Intern's id?",
          validate: (internIdInput) => {
            if (internIdInput) {
              return true;
            } else {
              console.log("Please enter an Intern ID! (Required)")
              return false;
            }
          }
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the Interns's email?",
          validate: (internEmailInput) => {
            if (validator.isEmail(internEmailInput)) {
              return true;
            } else {
                console.log("Please enter the Intern's email! (Required)")
                return false;
            }
          }
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the intern's school?",
          validate: (internSchool) => {
            if (internSchool) {
              return true;
            } else {
              console.log("Please enter the Intern's school or none if no school! (Required)")
              return false;
            }
          }
        },
      ])
      .then((answers) => {
        const {
          internName,
          internId,
          internEmail,
          internSchool,
        } = answers;
        const intern = new Intern(
          internName,
          internId,
          internEmail,
          internSchool
        );

        teamArray.push(intern);
        console.log("team!", teamArray);
        createTeam();
      });
  }

  function buildTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, generatePage(teamArray), "utf-8");
    console.log(
      "Team Member Report Complete! Check out index.html to see the output!"
    );
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Style sheet copies successfully!");
    });
  }

  createManager();
}

appMenu();
