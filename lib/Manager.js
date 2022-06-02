const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // super goes to Employee classes constructor and gets attributes from Employee's constructor (name, id, email)
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;