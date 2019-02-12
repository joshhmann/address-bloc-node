const inquirer = require('inquirer'); //requiring inquirere so we can use it in the class.
const ContactController = require('./ContactController');
//define class and export it
module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below:",
        choices: [
          "Add new contact",
          "Exit"
        ]
      }
    ];
    //changed property name to book to better respresent what the variable will contain. 
    //using ContactController object to handle contact related requests.
    //Ensures MenuController remains responsible for only menu related behavior
    this.book = new ContactController();
  }

  main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  clear(){
    console.log('\x1Bc'); //clearing contents of the terminal like running clear in bash
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getContactCount(){
    return this.contacts.length;
  }
}
