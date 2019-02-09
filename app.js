const inquirer = require('inquirer'); //inquirer has a method named prompt that takes an array of objects representing questions we will ask.
const MenuController = require('./controllers/MenuController'); //require new class in our app.js
const menu = new MenuController();

menu.clear();
menu.main();







//clear the rest of the code

//each object inside questions array represents an individual question that the program will ask the user
// const questions = [
//   {
//     type: "list", //one question of type list. Will list for selection the choices in the choices property.
//     name: "status", //will hold the value of the response given to the question
//     message: "Are you hungry?: ", //text displayed as the question to the user
//     choices: [
//       "Yes",
//       "No"
//     ]
//   }
// ]
// //calling the prompt method and passing in the array of questions. This call results in a returned promise that should resolve once the user answers the questions
// inquirer.prompt(questions).then((answers) => {
//   if (answers.status === "Yes") {
//       console.log("Get up and eat");
//   } else {
//     console.log("Get back to work!");
//   }
// })
// .catch((err) => {
//     console.log(err);
// });
