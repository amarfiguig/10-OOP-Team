// Import the "Employee" class to extend from
const Employee = require('./Employee');

// Class definition for "Manager" that extends from "Employee"
class Manager extends Employee {
    
// Constructor function to create Manager objects
  constructor(name, id, email, officeNumber) {
      
// Call the parent class' constructor to set properties inherited from Employee
    super(name, id, email);

// Property specific to Manager objects
    this.officeNumber = officeNumber;
  }

// Method to return the Manager's office number
  getOfficeNumber() {
    return this.officeNumber;
  }

// Override method inherited from Employee to return "Manager" role
  getRole() {
    return "Manager";
  }
}

// Export the Manager class as a module
module.exports = Manager;
