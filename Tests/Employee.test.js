// Requiring the information from the "Employee" class
const Employee = require("../lib/Employee");

// Defining a test function for the "Employee" class
describe("Employee", () => {
    
// Defining a test function for the code
  describe("Initial Test", () => {
    
// Defining a test case to check if the output of the constructor matches the expected values
    it("Verifying Employee Information", () => {
        
// Setting example values for the employee's name, id, and email
      const name = "X";
      const id = U24478;
      const email = "x@work.com";
      const role = "Employee";
// Creating a new instance of the "Employee" class with the example values
      const team = new Employee(name, id, email);

// Checking if the values in the "result" instance match the expected values
      expect(team.name).toEqual(name);
      expect(team.id).toEqual(id);
      expect(team.email).toEqual(email);

// Checking if the results of calling the "getName()", "getID()", "getEmail()", and "getRole()" functions match the expected values
      expect(team.getName()).toEqual(name);
      expect(team.getID()).toEqual(id);
      expect(team.getEmail()).toEqual(email);
      expect(team.getRole()).toEqual(role);
    });
  });
});
