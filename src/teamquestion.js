//The questions that will be displayed to the user when the functions are executed.
const StartQuestion = [
  {
    type: "list",
    message: "Choose an action:",
    name: "selection",
    choices: ["Add Manager", "Add Engineer", "Add Intern", "Build Team Page"],
  },
];

const ManagerQues = [
  {
    type: "input",
    name: "name",
    message: "Employee's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Employee's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Employee's email:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Manager's office number:",
  },
];

const EngineerQues = [
  {
    type: "input",
    name: "name",
    message: "Employee's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Employee's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Employee's email:",
  },
  {
    type: "input",
    name: "github",
    message: "Engineer's GitHub username:",
  },
];

const InternQues = [
  {
    type: "input",
    name: "name",
    message: "Employee's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Employee's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Employee's email:",
  },
  {
    type: "input",
    name: "school",
    message: "Intern's school name:",
  },
];

module.exports = { StartQuestion, InternQues, EngineerQues, ManagerQues };
        }

        else if(response.action_choice === 'Add a manager'){
            addManager()

       }

       //else build the team
       else buildTeam(managerArray, engineerArray, internArray);


       
     })
}


function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineers\s name?',
            name: 'engineer_name',
            
        },

        {
            type: 'input',
            message: 'What is the engineer\s ID?',
            name: 'engineer_id',

        },

        {
            type: 'input',
            message: 'What is the engineer\s email?',
            name: 'engineer_email',

        },

        {
            type: 'input',
            message: 'What is the engineer\s GitHub profile name?',
            name: 'engineer_github',

        },
    ])
    .then(response => {
       

        const engineer = new Engineer(response.engineer_id, response.engineer_name, response.engineer_email, response.engineer_github);

        engineerArray.push(engineer);

        starterQuestions();
     })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the intern\s name?',
            name: 'intern_name',
            
        },

        {
            type: 'input',
            message: 'What is the engineer\s ID?',
            name: 'intern_id',

        },

        {
            type: 'input',
            message: 'What is the intern\s email?',
            name: 'intern_email',

        },

        {
            type: 'input',
            message: 'What is the intern\s school name?',
            name: 'intern_school',

        },
    ])
    .then(response => {

        const intern = new Intern(response.intern_id, response.intern_name, response.intern_email, response.intern_school);

        internArray.push(intern);

        starterQuestions();

     })
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the manager\s name?',
            name: 'manager_name',
            
        },

        {
            type: 'input',
            message: 'What is the manager\s ID?',
            name: 'manager_id',

        },

        {
            type: 'input',
            message: 'What is the manager\s email?',
            name: 'manager_email',

        },

        {
            type: 'input',
            message: 'What is the manager\s office nubmer?',
            name: 'manager_officeNubmer',

        },
    ])
    .then(response => {

        const manager = new Manager(response.manager_id, response.manager_name, response.manager_email, response.manager_officeNubmer);

        managerArray.push(manager);

        starterQuestions();
    })
}





module.exports = {starterQuestions, addEngineer, addIntern, addManager}
