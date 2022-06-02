const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        // super goes to Employee classes constructor and gets attributes from Employee's constructor (name, id, email)
        super(name, id, email)
        this.github = gitHub;
    }

    getGithub(){
        return this.gitHub;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;