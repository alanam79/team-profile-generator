const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, gitHub, school){
        // super goes to Employee classes constructor and gets attributes from Employee's constructor (name, id, email)
        super(name, id, email)
        this.github = gitHub;
        this.school = school;
    }

    getGithub(){
        return this.gitHub;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;