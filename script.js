const gameBoard = (() => {
  const allGameFields = document.querySelectorAll(".board");
  const allGameFieldsArray = Array.from(allGameFields);
  const startButton = document.querySelector(".start");
  const startAgainButton = document.querySelector(".start-again");
  const playerOneScore = document.querySelector("#score1");
  const playerTwoScore = document.querySelector("#score2");


  let gameBoardArray = ["0", "1", "2",
                        "3", "4", "5",
                        "6", "7", "8"];         
                                             


  allGameFields.forEach(field => {field.addEventListener("click", gamePlay)})


  function gamePlay () {
    
    if(startButton.style.display == "") return

    if(this.textContent == "X" || this.textContent == "O") return


    let selectedField = allGameFieldsArray.indexOf(this);

    if(playerOne.turn == 0){
      gameBoardArray[selectedField] = playerTwo.sign;
      this.textContent = playerTwo.sign;
    } else { 
      gameBoardArray[selectedField] = playerOne.sign;
      this.textContent = playerOne.sign; 
    }

    if(playerOne.turn == 0){
       playerOne.turn = 1
    } else { playerOne.turn = 0} 

    gameFunction()

    if(this.style.backgroundColor == "green") return

    displayController.whoseTurnIsIt ()
    
  }




 function gameFunction () {

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

 function startAgain() {

   allGameFields.forEach(field => {field.style.backgroundColor = "var(--state-gray)"})

   allGameFields.forEach(field => {field.textContent = ""})

   gameBoardArray = ["0", "1", "2",
                     "3", "4", "5",
                     "6", "7", "8"];

   startAgainButton.style.display = "none";

   let randomNumber = Math.floor(Math.random() * 2);
   
   if (randomNumber == 0) playerOne.turn = 0;
   if (randomNumber == 1) playerOne.turn = 1;

   displayController.whoseTurnIsIt ()

 }

 startAgainButton.addEventListener("click", startAgain)





  //audio ushte da napraish da komentirash i mozebi computer da napraish

  

 return {startAgain}

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

const computerOne = (() => {


})();



const displayController = (() => {
  
  const startButton = document.querySelector(".start");
  const gameBoardDiv = document.querySelector(".game-board-div");
  const allGameFields = document.querySelectorAll(".board");
  const choosePlayersDiv = document.querySelector(".choose-players");
  const gameState = document.querySelector(".game-state");
  const chooseOneToPlay = document.querySelector("#choose-one");
  const textForChoosing = document.querySelector("#label-choose");
  const playerOneScore = document.querySelector("#score1");
  const playerTwoScore = document.querySelector("#score2");
  const startAgainButton = document.querySelector(".start-again");

  

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
    gameState.style.display = "block";
    setTimeout(function(){ gameState.style.display = "none" }, 3000);
    whoseTurnIsIt ()
  });

  function whenGameWon ( originalField, firstField, secondField) {
    originalField.style.backgroundColor = "green";                                                                           
    firstField.style.backgroundColor = "green";                                                                                
    secondField.style.backgroundColor = "green";
    startAgainButton.style.display = "block";
    console.log(originalField.textContent)
    if(originalField.textContent == "X") playerOne.score += 1 ;
    if(originalField.textContent == "O") playerTwo.score += 1;
    playerOneScore.textContent = playerOne.score;
    playerTwoScore.textContent = playerTwo.score;
  }

  function whoseTurnIsIt () {
    
    if(playerOne.turn == 1) {playerOneScore.style.boxShadow = "0px 0px 5px #f8f9fa"}
    else{playerOneScore.style.boxShadow = ""}
    if(playerOne.turn == 0) {playerTwoScore.style.boxShadow = "0px 0px 5px #f8f9fa"} 
    else{playerTwoScore.style.boxShadow = ""}
  }

  return {whenGameWon, whoseTurnIsIt}


})();