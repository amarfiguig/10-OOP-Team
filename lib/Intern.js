// Import the "Employee" class to extend from
const Employee = require('./Employee');

// Class definition for "Manager" that extends from "Employee"
class Intern extends Employee {

  // Constructor function to create Intern objects
  constructor(id, name, email, school) {

    // Call the parent class' constructor to set properties inherited from Employee
    super(id, name, email);

    // Property specific to Intern objects
    this.school = school;
  }

  // Method to return the Intern's office number
  getSchool() {
    return this.school;
  }

  // Override method inherited from Employee to return "Intern" role
  getRole() {
    return "Intern";
  }
}

// Export the Intern class as a module
module.exports = Intern;
