const generateTeam = (team) => {
  console.log("team from index.js", team);

  // build three bootstrap cards with template literals around them
  // build three functions that take each individual type of employee

  const generateManager = (manager) => {
    return `
        <div class="m-5 row justify-content-around">
        <div class="col">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Name: ${manager.getName()}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: ${manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        <li class="list-group-item">Role: ${manager.getRole()}</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        `;
  }; 

  const generateEngineer = (engineer) => {
    return `
        <div class="m-5 row justify-content-around">
        <div class="col">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Name: ${engineer.getName()}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: ${engineer.getEmail()}</li>
        <li class="list-group-item">Role: ${engineer.getRole()}</li>
        <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        `;
  };

  const generateIntern = (intern) => {
    return `
        <div class="m-5 row justify-content-around">
        <div class="col">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Name: ${intern.getName()}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: ${intern.getEmail()}</li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css"></link>
      <title>Team Profile Generator</title>
    </head>

    <body>
    <header>
    <h1 class"bg-danger">My Team</h1>
    </header>
    <main>
    
      ${generateTeam(team)}



      </main>  

      <footer>
      <p class="position-absolute bottom-0 start-50 translate-middle-x text-center">Team Profile Generator by Alana McKeel</p>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"></script>  
    </body>
    </html>
    `;
};
