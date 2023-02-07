//require the intern class
const manager = require('../lib/Manager');

//describe the test
describe("Intern", () =>{
    describe("Initialisation", () => {
        it("Tests the constructor classes", () => {
            
            const id = 1;
            const name = "Charlotte";
            const email = "charlotte@bootcamp.com";
            const role = "Manager";
            const officeNumber = "123"; 

            const object = new manager(id, name, email, officeNumber);

            //expect the values in the object to be equal to the values set above 
            expect(object.id).toEqual(id);
            expect(object.name).toEqual(name);
            expect(object.email).toEqual(email);
            expect(object.officeNumber).toEqual(officeNumber);

            //expecting the functions that the object contains to return the value set in them          
            expect(object.getID()).toEqual(id);
            expect(object.getEmail()).toEqual(email);
            expect(object.getName()).toEqual(name);
            expect(object.getRole()).toEqual(role);
            expect(object.getOfficeNumber()).toEqual(officeNumber);
            

        })
    })
});