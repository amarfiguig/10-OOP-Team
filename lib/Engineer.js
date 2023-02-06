
const Employee = require("./Employee");

class Engineer extends Employee {
    //base class and additional 
    constructor(id, name, email, github) {
    //base class 
        super(id, name, email)
    //adding property to the github parameter
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;
