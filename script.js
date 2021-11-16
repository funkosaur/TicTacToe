const gameBoard = (() => {
  const topLeft = document.querySelector("#top-left");
  const topMiddle = document.querySelector("#top-middle");
  const topRight = document.querySelector("#top-right");
  const middleLeft = document.querySelector("#middle-left");
  const middleCenter = document.querySelector("#middle-center");
  const middleRight = document.querySelector("#middle-right");
  const bottomLeft = document.querySelector("#bottom-left");
  const bottomMiddle = document.querySelector("#bottom-middle");
  const bottomRight = document.querySelector("#bottom-right");
  const allGameFields = document.querySelectorAll(".board");
  const allGameFieldsArray = Array.from(allGameFields);


  let gameBoardArray = ["0", "1", "2",
                        "3", "4", "5",
                        "6", "7", "8"];         
                                             


  allGameFields.forEach(field => {field.addEventListener("click", gamePlay)})


  function gamePlay () {
    console.log(gameBoardArray)

    if(this.textContent == "X" || this.textContent == "O") return

    let sign;

    if(playerOne.turn == 0){
      sign = "O"
    } else { sign = "X" }

    let selectedField = allGameFieldsArray.indexOf(this);

    gameBoardArray[selectedField] = sign;

    this.textContent = sign;

    if(playerOne.turn == 0){
       playerOne.turn = 1
    } else { playerOne.turn = 0} 

    console.log(gameFunction())
    
  }

  //staj im sign na playerone two i computer za da znaeme koj pobedil

  function gameFunction () {
    if(gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {return 1}
    else if(gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {return 2}
    else if(gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {return 3}
    else if(gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {return 4}
    else if(gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {return 5}
    else if(gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {return 6}
    else if(gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {return 7}
    else if(gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {return 8}
    else {return 0}

    
    
  }



})();

const playerOne = (() => {
  let turn = 1;


  return {turn}
})();

const playerTwo = (() => {


})();

const computerOne = (() => {


})();



const displayController = (() => {
  
  const startButton = document.querySelector(".start");
  const gameBoardDiv = document.querySelector(".game-board-div");
  const choosePlayersDiv = document.querySelector(".choose-players");
  const gameState = document.querySelector(".game-state");
  const chooseOneToPlay = document.querySelector("#choose-one");
  const textForChoosing = document.querySelector("#label-choose")

  

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
  })


})();