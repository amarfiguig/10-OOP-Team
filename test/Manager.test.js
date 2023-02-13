// Requiring the information from the "Manager" class
const Manager = require('../lib/Manager');

// Defining a test function for the "Manager" class
        describe("Manager", () => {
    
// Defining a test function the code
        describe("Initial Test", () => {
    
// Defining a test case to check if the output of the constructor matches the expected values
        it("Verifying Manager Information", () => {
                

//create expected example inputs 
        const name = 'X';
        const id = 'U24478';
        const email = 'x@work.com';
        const officeNumber = '03325698745';
        const role = 'Manager';
        
//create a new instance team using the intern class
        const team = new Manager(id, name, email, officeNumber);
        
// Check if the properties of the Intern object match the expected outputs
        expect(team.name).toEqual(name);
        expect(team.id).toEqual(id);
        expect(team.email).toEqual(email);
        expect(team.officeNumber).toEqual(officeNumber);

// Check if the getter methods of the Intern object match the expected outputs
        expect(team.getName()).toEqual(name);
        expect(team.getId()).toEqual(id);
        expect(team.getEmail()).toEqual(email);
        expect(team.getOfficeNumber()).toEqual(officeNumber);
        expect(team.getRole()).toEqual(role);

       })
    })
})
