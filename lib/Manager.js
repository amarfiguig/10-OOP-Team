const Employee = require("./Employee");

class Manager extends Employee {
    //think this might be the reason the test is failing 
    constructor(id, name, email, officeNumber) {
    super(id, name, email);
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