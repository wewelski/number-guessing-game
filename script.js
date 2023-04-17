// let maxNum = parseInt(prompt('Enter a maximum number')); //parseInt converts string into proper Int
// while (!maxNum) { //this section makes sure you typed in a valid Int. Loops 'not true'
//   maxNum = parseInt(prompt('Nope. Please enter a valid number'));
// }

// const randomNum = Math.floor(Math.random() * maxNum) + 1;
// console.log(randomNum);

// let guessNum = parseInt(prompt('Now, guess the number'));
// let guessCount = 1;

// while (parseInt(guessNum) !== randomNum) { //Int coversion must happen here, otherwise comparison will be made between Str and Int values which results into NaN
//     if (guessNum === 'q') break;
//   guessCount++;
//   if (guessNum < randomNum) {
//     guessNum = prompt('Too low. Try a higher guess..');
//   } else {
//     guessNum = prompt('Too high. Try a lower guess..');
//   } 
// }
// console.log(`You guessed it ${guessCount} time(s)! The number is ${randomNum}. Great job!`);