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

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  // html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""))

  // html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(""))

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
      <title>Portfolio Demo</title>
    </head>
    
    <body>
      ${generateTeam(team)}
    </body>
    </html>
    `;
};
