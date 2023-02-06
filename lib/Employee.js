//This base constructor function creates objects with properties obtained from user responses.
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    

  //Functions to retrieve individual answers provided by the user."
    
   //Name
    getName() {
        return this.name;
    }
   //Email
    getEmail() {
        return this.email;

    }
   //ID
    getID() {
        return this.id;
    }
   //Employee
    getRole() {
        return "Employee";
    }
}

//Exporting the data obtained from this class.
module.exports = Employee;
