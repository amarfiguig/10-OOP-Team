
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const PlayQuestions = [  
  {    type: "list",    
       message: "Choose an action:",    
       name: "selection",    
       choices: ["Add Manager", "Add Engineer", "Add Intern", "Build Team Page"],
  },
];

const ManagerQuestion = [ 
  {    type: "input",
       name: "id",    
       message: "What is the Manager's ID number?",
  },  
  {    type: "input",    
       name: "name",    
       message: "What is the Manager's name?",  
  },  
  {    type: "input",    
       name: "email",    
       message: "What is the Manager's email?",  },  
  {    type: "input",    
       name: "officeNumber",    
       message: "What is the Manager's office number?",  
  },
];

const EngineerQuestion = [  
  {    type: "input",    
       name: "id",    
       message: "What is the Engineer's ID number?",  
  },  
  {    type: "input",    
       name: "name",    
       message: "What is the Engineer's name?",  
  },  
  {    type: "input",    
       name: "email",    
       message: "What is the Engineer's email?",  
  },  
  {    type: "input",    
       name: "github",    
       message: "What is the Engineer's GitHub username?",  
  },
];

const InternQuestion = [  
  {    type: "input",    
       name: "id",   
       message: "What is the Intern's ID number?",  
  },  
  {    type: "input",    
       name: "name",    
       message: "What is the Intern's name?",  
  },  
  {    type: "input",   
       name: "email",   
       message: "What is the Intern's email?",  
  },  
  {    type: "input",    
       name: "school",   
       message: "What is the Intern's school name?",  
  },
];

const managerArray = [];
const engineerArray = [];
const internArray = [];

function starterQuestions() {
  inquirer.prompt(PlayQuestions).then((response) => {
    if (response.selection === "Add Manager") {
      addManager();
    } else if (response.selection === "Add Engineer") {
      addEngineer();
    } else if (response.selection === "Add Intern") {
      addIntern();
    } else {
      buildTeam(managerArray, engineerArray, internArray);
    }
  });
}

function addEngineer() {
  inquirer.prompt(EngineerQuestion).then((response) => {
    const Engineer = new Engineer(
      response.id,
      response.name,
      response.email,
      response.github
    );
    engineerArray.push(engineer);
    starterQuestions();
  });
}

function addIntern() {
  inquirer.prompt(InternQuestion).then((response) => {
    const Intern = new Intern(
      response.id,
      response.name,
      response.email,
      response.school
    );
    internArray.push(intern);
    starterQuestions();
  });
}

function addManager() {
  inquirer.prompt(ManagerQuestion).then((response) => {
    const Manager = new Manager(
      response.id,
      response.name,
      response.email,
      response.officeNumber
    );
    managerArray.push(manager);
    starterQuestions();
  });
}

function buildTeam() {
  // Function to build team page
}

starterQuestions();
