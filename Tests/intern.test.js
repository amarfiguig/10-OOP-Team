//require the intern class
const intern = require('../lib/Intern');

//describe the test
describe("Intern", () =>{
    describe("Initialisation", () => {
        it("Tests the constructor classes", () => {

        //create expected example inputs 
        const id = 1;
        const name = "Charlotte";
        const email = "charlotte@bootcamp.com";
        const role = "Intern";
        const school = "School";

        //create a new instance object using the intern class
        const object = new intern(id, name, email, school);
        
        //expect the values in the object to be equal to the values set above 
        expect(object.id).toEqual(id);
        expect(object.name).toEqual(name);
        expect(object.email).toEqual(email);
        expect(object.school).toEqual(school);
                    
        //expecting the functions that the object contains to return the value set in them          
        expect(object.getID()).toEqual(id);
        expect(object.getEmail()).toEqual(email);
        expect(object.getName()).toEqual(name);
        expect(object.getRole()).toEqual(role);
        expect(object.getSchool()).toEqual(school);
        })
    })
});