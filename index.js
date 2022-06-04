const fs = require("fs");
const path = require("path");
const generatePage = require("./src/page-template");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

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
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's id?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email?",
        },
        {
          type: "input",
          name: "managerNumber",
          message: "What is the manager's office number?",
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
            // createIntern()
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
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's id?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's github username?",
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
          message: "What is the interns's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's id?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the inters's email?",
        },
        {
          type: "input",
          name: "internGithub",
          message: "What is the interns's github username?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the intern's school?"
        }
      ])
      .then((answers) => {
        const { internName, internId, internEmail, internGithub, internSchool } =
          answers;
        const intern = new intern(
          internName,
          internId,
          internEmail,
          internGithub,
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
    console.log('Team Member Report Complete! Check out index.html to see the output!');
  }

  createManager();
}

appMenu();

