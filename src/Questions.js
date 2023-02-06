const inquirer = require("inquirer");
const htmlCreator = require("./TeamBuilder.js");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const engineers = [];
const interns = [];
const managers = [];
const Questions = require("./questions");

const startMainQuestions = () => {
  inquirer.prompt(Questions.starterQuestions).then((response) => {
    switch (response.selection) {
      case "Add engineer":
        addEngineer();
        break;
      case "Add intern":
        addIntern();
        break;
      case "Add manager":
        addManager();
        break;
      case "Create team HTML page":
        TeamBuilder(engineers, interns, managers);
        break;
      default:
    }
  });
};

const addEngineer = () => {
  inquirer.prompt(Questions.EngineerQuestions).then((response) => {
    const engineer = new Engineer(
      response.name,
      response.id,
      response.email,
      response.github
    );
    engineers.push(engineer);
    startMainQuestions();
  });
};

const addIntern = () => {
  inquirer.prompt(Questions.InternQuestions).then((response) => {
    const intern = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    interns.push(intern);
    startMainQuestions();
  });
};

const addManager = () => {
  inquirer.prompt(Questions.ManagerQuestions).then((response) => {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officenumber
    );
    managers.push(manager);
    startMainQuestions();
  });
};

module.exports = startMainQuestions;
