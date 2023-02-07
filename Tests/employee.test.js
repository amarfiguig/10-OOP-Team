//The tests test the class to make sure the constructor works
// 1. pull in employee class as that is what we want to test
const Employee = require('../lib/Employee')

//describe it 
describe("Employee", () =>{
    describe("Initialisation", () => {
        it("Tests the constructor classes", () => {
            //set up an example of each value option
            const id = 1;
            const name = "Charlotte";
            const email = "charlotte@bootcamp.com";
            const role = "Employee";
            //create a object from the base employee class 
            const object = new Employee(id, name, email)

            //expect the values in the object to be equal to the values set above 
            expect(object.id).toEqual(id);
            expect(object.name).toEqual(name);
            expect(object.email).toEqual(email);

            //expecting the functions that the object contains to return the value set in them 
            expect(object.getID()).toEqual(id);
            expect(object.getEmail()).toEqual(email);
            expect(object.getName()).toEqual(name);
            expect(object.getRole()).toEqual(role);

        })


    })
});
//test intialisation
//run test itself