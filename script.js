let userScore = 0;
let compScore = 0;
let userName
let userChoice
let computerChoice
let roundResult

function start() {
  userName = document.getElementById("userName").value;
  document.getElementById("response-text").innerText =
    "Welcome " + userName + " & Good Luck!";
  document.getElementById("nameInput").classList.add("d-none");

}

function playGame(userSelection) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  userChoice = userSelection
  computerChoice = computerSelection

  if (userSelection === computerSelection) {
    roundResult = "It's a tie!"

  } else if ((userSelection === 'rock' && computerSelection === 'scissors') ||
    (userSelection === 'paper' && computerSelection === 'rock') ||
    (userSelection === 'scissors' && computerSelection === 'paper')) {
    userScore++;
    roundResult = "You win!"
   
    updateDisplayInfo()
    isGameOver()
  } else {
    compScore++;
    roundResult = "You lose!"
    
    updateDisplayInfo()
    isGameOver()


    //update score for comp compScore++
    //display computer score 
  }

}


function isGameOver(){

  if (userScore === 3) {
    console.log("user wins")

    document.getElementById('result').innerText = `Game Over. ${userName} has won with a score of ${userScore} to ${compScore}`;
} else if (compScore === 3) {
  console.log("comp wins")
  document.getElementById('result').innerText = `Game Over. Comp has won with a score of ${compScore} to ${userScore}`;
}
  }

  function updateDisplayInfo (){
    document.getElementById('userScore').innerText = userScore;
    document.getElementById('compScore').innerText = compScore;
    document.getElementById('result').innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${roundResult}`;
  }
