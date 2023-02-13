// Import the "Employee" class as a dependency
const Employee = require('./Employee');

// Define the "Intern" class, extending the properties and methods of the "Employee" class
class Intern extends Employee {
    
// The constructor takes four parameters: name, id, email, and school
    
  constructor( id, name, email, school) {
      
// Call the parent class' constructor using the "super" keyword
    super(id, name , email);

// Store the "school" parameter as a property of the class instance
    this.school = school;
  }

// Return the "school" property of the class instance
    
  getSchool() {
    return this.school;
  }

// Override the parent class' "getRole" method to return "Intern"
  getRole() {
    return "Intern";
  }
}

// Export the "Intern" class as a module
module.exports = Intern;
