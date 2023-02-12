// Requiring the information from the "Intern" class
const Intern = require('../lib/Intern');

// Defining a test function for the "Intern" class
describe("Intern", () => {
    
// Defining a test function the code
  describe("Initial Test", () => {
    
// Defining a test case to check if the output of the constructor matches the expected values
    it("Verifying Intern Information", () => {
            
        //create expected example inputs 
        const name = 'X';
        const id = 'TR589365';
        const email = 'x3@work.com';
        const school = 'CodeX';

        //create a new instance team using the intern class
        const team = new Intern(id, name, email, school);
        
// Check if the properties of the Intern team match the expected outputs
        expect(team.name).toEqual(name);
        expect(team.id).toEqual(id);
        expect(team.email).toEqual(email);
        expect(team.school).toEqual(school);

// Check if the getter methods of the Intern object match the expected outputs
        expect(team.getName()).toEqual(name);
        expect(team.getId()).toEqual(id);
        expect(team.getEmail()).toEqual(email);
        expect(team.getSchool()).toEqual(school);

    })
  })
});
