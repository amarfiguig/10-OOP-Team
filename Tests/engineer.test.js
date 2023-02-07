// 1. pull in engineer class as that is what we want to test
const engineer = require('../lib/Engineer');


//describe the test
describe("Engineer", () =>{
    describe("Initialisation", () => {
        it("Tests the constructor classes", () => {
            
            //create expected example inputs 
            const id = 1;
            const name = "Charlotte";
            const email = "charlotte@bootcamp.com";
            const role = "Engineer";
            const github = "@Charl1410"
            
            //create a object from the engineer class
            const object = new engineer(id,name,email,github);
                        
            //expect the values in the object to be equal to the values set above 
            expect(object.id).toEqual(id);
            expect(object.name).toEqual(name);
            expect(object.email).toEqual(email);
            expect(object.github).toEqual(github);

            //expecting the functions that the object contains to return the value set in them 
            expect(object.getID()).toEqual(id);
            expect(object.getEmail()).toEqual(email);
            expect(object.getName()).toEqual(name);
            expect(object.getRole()).toEqual(role);
            expect(object.getGitHub()).toEqual(github);
        })
    })
});