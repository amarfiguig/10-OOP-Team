//geeneric class in which the others will inherit from
class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;

    }

    getID() {
        return this.id;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;