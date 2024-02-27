function start() {
  let name = document.getElementById("userName").value;
  document.getElementById("response-text").innerText =
    "Welcome " + name + " & Good Luck!";
  document.getElementById("nameInput").classList.add("d-none");

}

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // :(((((

}



