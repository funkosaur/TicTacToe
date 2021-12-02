const gameBoard = (() => {
  const allGameFields = document.querySelectorAll(".board");
  const allGameFieldsArray = Array.from(allGameFields);
  const startButton = document.querySelector(".start");
  const startAgainButton = document.querySelector(".start-again");
  const audio1 = document.querySelector("#audio1");
  const audio2 = document.querySelector("#audio2");
  const whoseTurnDiv = document.querySelector(".whose-turn-is-it");
  const resetGameButton = document.querySelector(".reset-game");
  const chooseOneToPlay = document.querySelector("#choose-one");

//main game board array
  let gameBoardArray = ["0", "1", "2",
                        "3", "4", "5",
                        "6", "7", "8"];         
                                             


  allGameFields.forEach(field => {field.addEventListener("click", gamePlay)})

//gamePlay function when clicked adds X or O to selected field changes gameboardarray accordingly and switches turns of players
  function gamePlay () {
    
    if(startButton.style.display == "block") return

    if(this.textContent == "X" || this.textContent == "O") return

    if(whoseTurnDiv.textContent == "Player One Wins" || whoseTurnDiv.textContent == "Player Two Wins" || whoseTurnDiv.textContent == "Computer Wins") return
 

    let selectedField = allGameFieldsArray.indexOf(this);

    if(playerOne.turn == 0){
      gameBoardArray[selectedField] = playerTwo.sign;
      this.textContent = playerTwo.sign;
      audio2.play();
    } else { 
      gameBoardArray[selectedField] = playerOne.sign;
      this.textContent = playerOne.sign;
      audio1.play();
    }

    if(playerOne.turn == 0){
       playerOne.turn = 1
    } else { playerOne.turn = 0} 

    gameFunction()

    if(this.style.backgroundColor == "green" || whoseTurnDiv.textContent == "It's a Tie") return

    displayController.whoseTurnIsIt ();

    if(chooseOneToPlay.value == "computer" && playerOne.turn == 0) computerPlays()
    
  }

// computer selects random field to place O
  function computerPlays () {
    let randomNumber = Math.floor(Math.random() * 9);
    while(gameBoardArray[randomNumber] == "X" || gameBoardArray[randomNumber] == "O") {randomNumber = Math.floor(Math.random() * 9);}
    gameBoardArray[randomNumber] = playerTwo.sign
    allGameFieldsArray[randomNumber].click()
    audio2.play();
  }
// main function to check for win or tie requirements and subsequently reward winning player
 function gameFunction () {
   const checkNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

   const ifTie = gameBoardArray.some(function(field){
     if(checkNumbers.includes(field)) return true
   });
   
   if(ifTie == false) {
     displayController.whenTie()
   }

  gameBoardArray.forEach((field, index) => {

    if(index == 0 || index == 3 || index == 6) {
      if(gameBoardArray[index + 1] == field && gameBoardArray[index + 2] == field){ 
      displayController.whenGameWon(allGameFieldsArray[index], allGameFieldsArray[index + 1], allGameFieldsArray[index + 2])}
    }

    if(index == 0 || index == 1 || index == 2) {
      if(gameBoardArray[index + 3] == field && gameBoardArray[index + 6] == field){ 
        displayController.whenGameWon(allGameFieldsArray[index], allGameFieldsArray[index + 3], allGameFieldsArray[index + 6])}
    }

    if(index == 0) {
      if(gameBoardArray[index + 4] == field && gameBoardArray[index + 8] == field){ 
        displayController.whenGameWon(allGameFieldsArray[index], allGameFieldsArray[index + 4], allGameFieldsArray[index + 8])}
    }

    if(index == 2) {
      if(gameBoardArray[index + 2] == field && gameBoardArray[index + 4] == field){ 
        displayController.whenGameWon(allGameFieldsArray[index], allGameFieldsArray[index + 2], allGameFieldsArray[index + 4])}
    }
  })

 }

// another round button resets fields, array adjusted for computer and randomizes turns
 function startAgain() {

   allGameFields.forEach(field => {field.style.backgroundColor = "var(--state-gray)"})

   allGameFields.forEach(field => {field.textContent = ""})

   gameBoardArray = ["0", "1", "2",
                     "3", "4", "5",
                     "6", "7", "8"];

   startAgainButton.style.display = "none";

   resetGameButton.style.display = "";

   playerOne.turn = 1

   displayController.whoseTurnIsIt ()

   if(chooseOneToPlay.value == "computer") return

   let randomNumber = Math.floor(Math.random() * 2);
   
   if (randomNumber == 0) playerOne.turn = 0;
   if (randomNumber == 1) playerOne.turn = 1;

   displayController.whoseTurnIsIt ()

 }

 startAgainButton.addEventListener("click", startAgain);

 startButton.addEventListener("click", () => {gameBoardArray = ["0", "1", "2",
 "3", "4", "5",
 "6", "7", "8"]});

 return {startAgain, allGameFields, gameBoardArray}

})();

const playerOne = (() => {
  let turn = 1;
  let sign = "X";
  let score = 0;
  
  return {turn, sign, score}
})();

const playerTwo = (() => {
let sign = "O"
let score = 0;

return{sign, score}
})();

const displayController = (() => {
  
  const startButton = document.querySelector(".start");
  const gameBoardDiv = document.querySelector(".game-board-div");
  const choosePlayersDiv = document.querySelector(".choose-players");
  const gameState = document.querySelector(".game-state");
  const chooseOneToPlay = document.querySelector("#choose-one");
  const playerOneScore = document.querySelector("#score1");
  const playerTwoScore = document.querySelector("#score2");
  const startAgainButton = document.querySelector(".start-again");
  const whoseTurnDiv = document.querySelector(".whose-turn-is-it");
  const choosePlayer = document.querySelector(".choose-player");
  const resetGameButton = document.querySelector(".reset-game");
  const playerTitles = document.querySelectorAll(".player-title");
  const changeNameDiv = document.querySelector(".change-name");
  const player2Title = document.querySelector("#player-title2")

// selecting to play with player 2 or computer
  chooseOneToPlay.addEventListener("change", () => {
    if(chooseOneToPlay.value == "computer") {
      player2Title.textContent = "Computer";
      player2Title.contentEditable = false;
    } else {
      player2Title.textContent = "Player 2";
      player2Title.contentEditable = true;
    }
  })

  setTimeout(function(){ changeNameDiv.style.display = "none"; }, 4000);

//change name functionality
  playerTitles.forEach(title => {title.addEventListener("keypress", (e)=>{
    
    if(title.textContent.length > 9){
      e.preventDefault()
    }

    if(e.keyCode === 13){
      e.preventDefault()
    }
  
  })})

  
// starting to play changing display
  startButton.addEventListener("click", () => {

    if(chooseOneToPlay.value == "notchosen") {
      chooseOneToPlay.style.border = "2px solid red";
      setTimeout(function(){ chooseOneToPlay.style.border = "" }, 3000);

       return 
      }

    gameBoardDiv.style.animation = "gameboard-animation 3s";
    gameBoardDiv.style.backgroundPosition = "left 50% bottom 50%";
    startButton.style.display = "none";
    choosePlayersDiv.style.display = "none";
    choosePlayer.style.justifyContent = "space-evenly";
    gameState.style.display = "block";
    setTimeout(function(){ gameState.style.display = "none" }, 3000);
    whoseTurnIsIt ()
  });
// change display when somebody wins
  function whenGameWon ( originalField, firstField, secondField) {
    originalField.style.backgroundColor = "green";                                                                           
    firstField.style.backgroundColor = "green";                                                                                
    secondField.style.backgroundColor = "green";
    startAgainButton.style.display = "block";
    if(originalField.textContent == "X") {playerOne.score += 1; whoseTurnDiv.textContent = "Player One Wins"}
    if(originalField.textContent == "O" && chooseOneToPlay.value == "computer") {playerTwo.score += 1; whoseTurnDiv.textContent = "Computer Wins"}
    else if(originalField.textContent == "O") {playerTwo.score += 1; whoseTurnDiv.textContent = "Player Two Wins"}
    playerOneScore.textContent = playerOne.score;
    playerTwoScore.textContent = playerTwo.score;
    resetGameButton.style.display = "block";
  }
// display for a tie
  function whenTie () {
    startAgainButton.style.display = "block";
    whoseTurnDiv.textContent = "It's a Tie";
    playerOneScore.style.boxShadow = "0px 0px 5px #f8f9fa";
    playerTwoScore.style.boxShadow = "0px 0px 5px #f8f9fa";
    resetGameButton.style.display = "block";
  }
// display for different turns
  function whoseTurnIsIt () {
    
    if(playerOne.turn == 1) {
      playerOneScore.style.boxShadow = "0px 0px 5px #f8f9fa";
      whoseTurnDiv.textContent = "<- Player One's Turn";
    } else{
      playerOneScore.style.boxShadow = "";}
    if(playerOne.turn == 0) {
      playerTwoScore.style.boxShadow = "0px 0px 5px #f8f9fa"
      whoseTurnDiv.textContent = "Player Two's Turn ->";
    } else{
      playerTwoScore.style.boxShadow = "";}
  }
// changing display and functionalities to reset the whole game to beginning
  function resetGame () {
    gameBoardDiv.style.animation = "gameboard-animation2 3s";
    gameBoardDiv.style.backgroundPosition = "left 1% bottom 2%";
    startButton.style.display = "block";
    choosePlayersDiv.style.display = "flex";
    choosePlayer.style.justifyContent = "center";
    
    gameBoard.allGameFields.forEach(field => {field.style.backgroundColor = "var(--state-gray)"});

    gameBoard.allGameFields.forEach(field => {field.textContent = ""});

    startAgainButton.style.display = "";
    resetGameButton.style.display = "";

    playerOne.score = 0;
    playerTwo.score = 0;
    playerOne.turn = 1
    playerOneScore.textContent = playerOne.score;
    playerTwoScore.textContent = playerTwo.score;
    whoseTurnDiv.textContent = "";
    playerOneScore.style.boxShadow = "";
    playerTwoScore.style.boxShadow = "";
  }

  resetGameButton.addEventListener("click", resetGame)

  return {whenGameWon, whoseTurnIsIt, whenTie}
})();