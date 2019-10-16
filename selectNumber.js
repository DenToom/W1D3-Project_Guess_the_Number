// Generate number randomly
let selectNumber = Math.ceil(Math.random() * 26); //  always set radix. But why? And how to specify exactly?
console.log(selectNumber);

// prompt - asking name gamer and say hello + message game start
let name = prompt('Howdy Partner, start the game by entering your name', '');

let chkInputGamer = (function ask() {
  let n = prompt(`Hi ${name} , please enter a NUMBER from 0 to 25`);
  return isNaN(n) || +n > 25 || +n < 1 ? ask() : n;
})();

let lives = 0;

function checkInput(chkInputGamer) {
  for (let index = 0; index < 5; index++) {
    console.log(index);

    if (chkInputGamer === '') {
      chkInputGamer = prompt('Please enter a correct number between 0 an 25');
    } else if (chkInputGamer < selectNumber) {
      chkInputGamer = prompt(
        'Oops-a-daisy! Please try again with a larger nr.'
      );
    } else if (chkInputGamer > selectNumber) {
      chkInputGamer = prompt(
        'Oops-a-daisy, Please try again with a smaller nr.'
      );
    } else {
      alert(`The force is with you ${name}`);
      index = 5;
    }
  }
}

checkInput(chkInputGamer);

// selectNumber1(selectNumber) =
