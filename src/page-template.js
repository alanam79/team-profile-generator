const generateTeam = (team) => {
  console.log("team from index.js", team);

  // build three bootstrap cards with template literals around them
  // build three functions that take each individual type of employee

  const generateManager = (manager) => {
    return `
      <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-header bg-secondary text-light">Name: ${manager.getName()}</h5>
            <h5 class="card-header bg-secondary text-light">Role: ${manager.getRole()} <span class="oi oi-person"></span></h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>        
            </ul>
          </div>
        </div>
      </div>    
        `;
  }; 

  const generateEngineer = (engineer) => {
    return `        
    <div class="col-12 col-md-6 col-xl-3 mb-3">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-header bg-secondary text-light">Name: ${engineer.getName()}</h5>
          <h5 class="card-header bg-secondary text-light">Role: ${engineer.getRole()} <span class="oi oi-pencil"></span></h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>        
            <li class="list-group-item">GitHub: at <a href="https://github.com/${engineer.github}">${engineer.github} </a></li>
          </ul>
        </div>
      </div>
    </div>
        `;
  };

  const generateIntern = (intern) => {
    return `        
    <div class="col-12 col-md-6 col-xl-3 mb-3">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-header bg-secondary text-light">Name: ${intern.getName()}</h5>
          <h5 class="card-header bg-secondary text-light">Role: ${intern.getRole()} <span class="oi oi-book"></span></h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css"></link>
      <title>Team Profile Generator</title>
    </head>

    <body style="background-image:url(/src/pexels-pixabay-163064.jpg)">
    <header>
    <h1 class="w-100 bg-success p-3 text-center text-light display-4">My Team</h1>
    </header>
    <main>

    <div class="container">
    <div class="m-5 row justify-content-around" id="worker-container">
    ${generateTeam(team)}
    </div>
    </div>

    </main>  

      <footer>
      <p class="bottom-0 start-50 text-center">Team Profile Generator by Alana McKeel</p>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"></script>  
    </body>
    </html>
    `;
};
