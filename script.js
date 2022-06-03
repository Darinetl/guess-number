'use strict';
/*
console.log (document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 
'🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent= 10;


document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;
const playing = true;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  if(playing){
  const guess = Number(document.querySelector('.guess').value);
  //when no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No Number!';
    displayMessage('🚫 No Number!');
    //when play wins
  } else if (guess == secretnumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    playing=false;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretnumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretnumber ? '📈 Too high!' : '📉 Too Low!';
      displayMessage(guess > secretnumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😔 You lost the game';
      displayMessage('😔 You lost the game');
      document.querySelector('.score').textContent = 0;
      playing=false
    }
  }
}

  //     } //guess too high
  //     else if (guess > secretnumber) {
  //       if (score > 1) {
  //         document.querySelector('.message').textContent = '📈 Too high!';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         document.querySelector('.message').textContent = '😔 You lost the game';
  //         document.querySelector('.score').textContent = 0;
  //       }

  //       //guess too low
  //     } else if (guess < secretnumber) {
  //       if (score > 1) {
  //         document.querySelector('.message').textContent = '📉 Too Low!';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         document.querySelector('.message').textContent = '😔 You lost the game';
  //         document.querySelector('.score').textContent = 0;
  //       }
  //     }
  //   },
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing';
  displayMessage('Start guessing')
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem ';
});
