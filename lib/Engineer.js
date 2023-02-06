//all classes that aren't employee extend and inherit from the employee class and add the specific information for that class
//the constructor call adds the OG stuff and the new stuff 
//call the super which is all the params for the base class

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