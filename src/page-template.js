const generateTeam = (team) => {
  console.log("team from index.js", team);
  

  // build three bootstrap cards with template literals around them
  // build three functions that take each individual type of employee

  const generateManager = (manager) => {
    return `
        <div>${manager.getName()}</div>
        <div>${manager.getId()}</div>
        <div>${manager.getEmail()}</div>
        <div>${manager.getOfficeNumber()}</div>
        <div>${manager.getRole()}</div>
        `;
  };

  const generateEngineer = (engineer) => {
    return `
        <div>${engineer.getName()}</div>
        <div>${engineer.getId()}</div>
        <div>${engineer.getEmail()}</div>
        <div>${engineer.getRole()}</div>
        `;
  };

  const generateIntern = (intern) => {
    return `
        <div>${intern.getName()}</div>
        <div>${intern.getId()}</div>
        <div>${intern.getEmail()}</div>
        <div>${intern.getRole()}</div>
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
      <link rel="stylesheet" href="style.css"></link>
      <title>Team Profile Generator</title>
    </head>

    <header><h1>My Team</h1><header>
    
    <body>
      ${generateTeam(team)}
    </body>
    </html>
    `;
};
