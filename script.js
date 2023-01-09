// Rock, Paper, Scissors
// Make a sign for rock, paper or scissors --> need a var to hold the choices
// Compare the sign
// Record the score --> var(s) for that
// Win/loss conditions

// I want to play Rock, Paper, Scissors against an automated opponent.
// I can enter R, P, or S to signify my choice of rock, paper, or scissors.
// I expect the computer to choose R, P, or S in return.
// I want the option to play again whether I win or lose.
// I want to see my total wins, ties, and losses after 10 rounds.

// ! Variable to hold the available choices
// ! Var to hold wins
// ! Var to hold losses
// ! Var to hold ties
// ! Var to hold whether the user wants to play again
// ! Var to hold the computer's choice
// ! Var to hold the user's choice
// ! Var to hold how many rounds we've played?

// ! Need to randomly generate rock, paper, or scissors for the computer
  // ! Randomly generating 0, 1, or 2
  // ! Use that number at the index of our choices array to convert that to a choice (e.g., choices[1])

// Prompt the user for their choice
  // Input validation: did the user choose an available choice?
  // Enforce casing --> .toUpperCase() or .toLowerCase()

// Alert the computer's choice

// Compare the user's choice and the computer's choice
  // Rock smashes scissors
  // Scissors cuts paper
  // Paper covers rock

// If the user wins, increment the wins
// If the user loses, increment loses
// If it's a tie, increment the ties

// Alert whether it's a win, loss ,or tie
// Alert current win-loss-tie stats?
// Either increment or decrement the 'rounds' variable
// Confirm whether to start a new round OR start a new round

// After 10 rounds, alert the stats

var choices = ['R', 'P', 'S'];
var wins = 0;
var losses = 0;
var ties = 0;
var playAgain = false;
var userChoice = '';
var computerChoice = '';
var rounds = 0;

var computerIndex = Math.floor(Math.random() * 3);
computerChoice = choices[computerIndex];

userChoice = prompt('Please choose R, P, or S to play!').toUpperCase();

alert()