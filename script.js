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
  const allGameFields = document.querySelectorAll(".board-field");

  allGameFields.forEach(field => {field.addEventListener("click", gamePlay)})

  const gamePlay = () => {
    
  }




  

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