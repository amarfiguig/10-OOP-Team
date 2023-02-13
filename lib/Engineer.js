// Import the base "Employee" class
const Employee = require('./Employee');

// Define a class for Engineers that extends the Employee class
class Engineer extends Employee {
  constructor(id, name, email, github) {
    // Call the parent class's constructor using the "super" keyword
    super(id, name, email);

    // Store the engineer's Github username
    this.github = github;
  }

  // Return the engineer's Github username
  getGithub() {
    return this.github;
  }

  // Return the role of the engineer, which is always "Engineer"
  getRole() {
    return 'Engineer';
  }
}

// Export the Engineer class as a module
module.exports = Engineer;
