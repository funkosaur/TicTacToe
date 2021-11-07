const gameBoard = (() => {
  const startButton = document.querySelector(".start");
  const gameBoardDiv = document.querySelector(".game-board-div")
  

  startButton.addEventListener("click", () => {
    gameBoardDiv.style.animation = "gameboard-animation 3s";
    gameBoardDiv.style.backgroundPosition = "left 50% bottom 50%";
    startButton.style.display = "none";
  })

})();
