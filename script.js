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

    gameFunction()
    
  }



 function gameFunction () {
  gameBoardArray.forEach((field, index) => {
    if(index == 0 || index == 3 || index == 6) {
      if(gameBoardArray[index + 1] == field && gameBoardArray[index + 2] == field){ allGameFieldsArray[index].style.backgroundColor = "green"
                                                                                    allGameFieldsArray[index + 1].style.backgroundColor = "green"
                                                                                    allGameFieldsArray[index + 2].style.backgroundColor = "green"}
    }

    if(index == 0 || index == 1 || index == 2) {
      if(gameBoardArray[index + 3] == field && gameBoardArray[index + 6] == field){ return "1"}
    }

    if(index == 0) {
      if(gameBoardArray[index + 4] == field && gameBoardArray[index + 8] == field){ return "1"}
    }

    if(index == 2) {
      if(gameBoardArray[index + 2] == field && gameBoardArray[index + 4] == field){ return "1"}
    }
  })

 }



  //staj im sign na playerone two i computer za da znaeme koj pobedil

  



})();

const playerOne = (() => {
  let turn = 1;


  return {turn}
})();

const playerTwo = (() => {

  let sign

  if(playerOne.sign == "X"){ sign = "O"}
  else { sign = "X" }


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