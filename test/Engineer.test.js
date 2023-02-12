// Requiring the information from the "Engineer" class
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    
// Test suite for Engineer class
  describe("Initial Test", () => {
    it("Verifying the Accuracy of Employee Information ", () => {
        
// Example employee data for testing
        const name = 'X2';
        const id = 'MN6485';
        const email = 'x2@work.com';
        const github = '@x2work'
        const role = 'Engineer';

      const team = new Engineer(name, id, email, github);
        
// Check if the properties match the provided data
      expect(team.name).toEqual(name);
      expect(team.id).toEqual(id);
      expect(team.email).toEqual(email);
      expect(team.github).toEqual(github);
        
// Check if the getter methods return the expected values
      expect(team.getName()).toEqual(name);
      expect(team.getId()).toEqual(id);
      expect(team.getEmail()).toEqual(email);
      expect(team.getGithub()).toEqual(github);
      expect(team.getRole()).toEqual(role);

    });
  });
});
