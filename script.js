'use strict';

//secret numberı gizleme

let secret_number = Math.trunc(Math.random() * 20) + 1;
console.log(document.querySelector('.btn.check').textContent);

let score = 20;

const lose = function () {
  document.querySelector('.message').textContent =
    'You lost, but you can always try again😘';
};
//check button: input can be no value, wrong value, right value
document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //no input case
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number entered.😒\n\
      stop messing.';

    //wining case
  } else if (secret_number === guess) {
    document.querySelector('.message').textContent = 'Ow yeah babby!!👌😘';
    //document.querySelector('.number').textContent = secret_number;
    document.querySelector('body').style.backgroundColor = '#60b347'; //background color as string
    const currentScore = Number(document.querySelector('.score').textContent);
    const currentHighscore = Number(
      document.querySelector('.highscore').textContent
    );

    if (currentScore > currentHighscore) {
      document.querySelector('.highscore').textContent = currentScore;
    }
  }
  //gues is low
  else if (secret_number > guess) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      if (0 < secret_number - guess && secret_number - guess < 5) {
        //bunu && operator süz yapamayız. hata: left to right oacağı için 0dan büyükse true<5 olark ilerler.
        document.querySelector('.message').textContent =
          'A bit low sweetie!!😘🙅🏼‍♀️🤏🏼👇🏼';
      } else {
        document.querySelector('.message').textContent =
          'Too low sweetie!!😘🙅🏼‍♀️👇🏼👇🏼';
      }
    } else {
      lose();
    }

    //guess is high
  } else if (guess > secret_number) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      if (0 < guess - secret_number && guess - secret_number < 5) {
        document.querySelector('.message').textContent =
          'A bit high sweetie!!😘🙅🏼‍♀️🤏🏼👆🏼';
      } else {
        document.querySelector('.message').textContent =
          'Too high sweetie!!😘🙅🏼‍♀️👆🏼👆🏼';
      }
    } else {
      lose();
    }
  }
});
let highest = Number(document.querySelector('.highscore').textContent);

//again button-changing highestscore and reseting the values
document.querySelector('.btn.again').addEventListener('click', function () {
  secret_number = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.number').textContent = secret_number;
  document.querySelector('.message').textContent = "Start guessing...";
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222'; //background color as string
});
