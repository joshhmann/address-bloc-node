const inquirer = require('inquirer'); //requiring inquirere so we can use it in the class.
//define class and export it
module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below:",
        choices: [
          "Get Date",
          "Add new contact",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Get Date":
          this.getDate();
          break;
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

  getDate(){
    const today = new Date().toLocaleString();
    console.log(today);
    this.main();
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
}
