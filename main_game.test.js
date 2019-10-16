// Het spel heeft de volgende requirements:

// - Als gebruiker wil ik een initieel bericht zien in de console die de gebruiker begroet
//en vraagt om zijn of haar naam.  "Welkom! Wat is je naam?"
// Use window.prompt (instead of readline - process.stdin as the standard input object.)

// - Als gebruiker wil ik mijn naam kunnen invoeren in de console en op enter drukken.

// - Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht
// terug zien: "Hey [naam]"
// ======
// let name = prompt('Hello Gamer, Start game by entering your name', '');
// /* alert('Hi' + ' ' + name); */
// ======
// let isName = confirm('Hello' + ' ' + name);
// alert('We start the game soon' + ' ' + name);

// window/prompt - asking name gamer and say hello + message game start
let name = prompt('Hello Gamer, Start game by entering your name', '');

let isName = confirm(`Hello ${name} Here we go, please ENTER a number between 0 and 25.` 
+ '\n' + 'Get ready to ruuuuuumble........');
// alert - Game start and user input!

// let getInputGamer = prompt();


const getInputGamer = parseInt(prompt("Enter a Number", "0"), 10);
//  always set radix. But why? And how to specify exactly? 
// check number between 0 ~ 25

const chkInputGamer = getInputGamer;
alert(`You entered ${getInputGamer}`);
const chkInputGamer = function()



// Generate number randomly
let random = Math.floor(Math.random() * Math.floor(26));
console.log(random);

(selectNumber = function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max = Math.floor(26);
  numberByPc = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * 0);
});

function getRandomIntInclusive(selectNumber);(min, max) {
  min = Math.ceil(0);
  max = Math.floor(26);
  numberByPc = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * 10);
};


// LET OP!! Math.random * 0, weer terugzetten op 25.

// Start Game, asking the Gamers name first
let name = prompt('Hello Gamer, Start game by entering your name', '');
// Return message with given name and return question to enter number.
let guessGamer = prompt(
  'Hi' + name + '!' + 'Enter a number between 0 and 25',
  '',
);
let isName = confirm(
  `Hello ${name} Here we go, please ENTER a number between 0 and 25.` +
    '\n' +
    'Get ready to ruuuuuumble........',

const getInputGamer1 = parseInt(prompt('Enter a Number', '0'), 10);
// Check input from Gamer and send alert with entered value
const chkInputGamer = getInputGamer1;
// alert(`You entered ${getInputGamer1}`);

// checking random number with entered number from Gamer
// Todo:
//      What to do when answer is correct
//      What to do when answer is NOT correct
//      What to do when not entered an number?
//      Number of 'lives'solution.

let lives = 0;

function checkInput(chkInputGamer1) {
  for (let index = 0; index < 5; index++) {
    console.log(index);

    if (chkInputGamer1 === '') {
      chkInputGamer1 = prompt('please enter a correct number between 0 an 25');
    } else if (chkInputGamer1 > selectNumber) {
      chkInputGamer1 = prompt('not the number, please try again');
    } else if (chkInputGamer < selectNumber) {
      chkInputGamer1 = prompt('not the number, please try again');
    } else {
      alert(`You are the champion ${name}`);
      index = 5;
    }
  }
}
//         chkInputGamer = prompt ('not the number, please try again');

// const chkInputGamer2 = function(getInputGamer1) {
//   console.log('Checking input');
//   const numberInput = Number(getInputGamer1);
//   if (getInputGamer1 === selectNumber) {
//     console.log('you won');
//   } else {
//     console.log(inputGamer1, '... not correct. Try again');
//     getNumberInputFromUser();
//   }
// };
