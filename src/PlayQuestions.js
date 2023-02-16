const inquirer = require('inquirer');
const TeamBuilder = require('./TeamBuilder.js');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const {
  PlayQuestion,
  InternQuestion,
  EngineerQuestion,
  ManagerQuestion,
} = require('./teamquestion');
const Questions = require('./Questions');

const engineers = [];
const interns = [];
const managers = [];

const GeneralQuestions = () => {
  inquirer.prompt(Questions.starterQuestions).then((response) => {
    switch (response.selection) {
      case 'Add engineer':
        addEngineer();
        break;
      case 'Add intern':
        addIntern();
        break;
      case 'Add manager':
        addManager();
        break;
      case 'Create team HTML page':
        TeamBuilder(engineers, interns, managers);
        break;
      default:
        break;
    }
  });
};

const addEngineer = () => {
  inquirer.prompt(Questions.EngineerQuestions).then((response) => {
    const engineer = new Engineer(
      response.id,
      response.name,
      response.email,
      response.github
    );
    engineers.push(engineer);
    GeneralQuestions();
  });
};

const addIntern = () => {
  inquirer.prompt(Questions.InternQuestions).then((response) => {
    const intern = new Intern(
      response.id,
      response.name,
      response.email,
      response.school
    );
    interns.push(intern);
    GeneralQuestions();
  });
};

const addManager = () => {
  inquirer.prompt(Questions.ManagerQuestions).then((response) => {
    const manager = new Manager(
      response.id,
      response.name,
      response.email,
      response.officenumber
    );
    managers.push(manager);
    GeneralQuestions();
  });
};

GeneralQuestions();
