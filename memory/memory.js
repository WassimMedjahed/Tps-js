document.addEventListener('DOMContentLoaded', () => {
    let seconds = 0;
    let timer;
    let firstTile = null;
    let secondTile = null;
    let isChecking = false;
    const gridContainer = document.querySelector('.grid-container');
    const timerElement = document.querySelector('.timer');
    const winMessage = document.querySelector('.win-message');
    const restartButton = document.querySelector('.restart-btn');
  
    function startTimer() {
      timer = setInterval(() => {
        seconds++;
        timerElement.textContent = `Temps écoulé : ${seconds}s`;
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(timer);
    }
  
    function shuffle(array) {
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
        let x;
        do {
          x = Math.floor(Math.random() * array.length);
        } while (newArray[x] !== undefined);
        newArray[x] = array[i];
      }
      return newArray;
    }
  
    function resetGame() {
      stopTimer();
      seconds = 0;
      timerElement.textContent = `Temps écoulé : 0s`;
      winMessage.style.display = 'none';
      gridContainer.innerHTML = '';
  
      const tiles = Array.from({ length: 12 }, (_, i) => i);
      const shuffledTiles = shuffle(tiles.concat(tiles));
  
      shuffledTiles.forEach(val => {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerHTML = `<img src="./img/${val}.webp" alt="Tile ${val}" />`;
        gridContainer.appendChild(tile);
      });
  
      startTimer();
  
      gridContainer.addEventListener('click', event => {
        const clickedTile = event.target.closest('.tile');
        if (!clickedTile || clickedTile.classList.contains('matched') || isChecking) return;
  
        clickedTile.classList.add('flipped');
  
        if (!firstTile) {
          firstTile = clickedTile;
        } else if (!secondTile) {
          secondTile = clickedTile;
          isChecking = true;
          setTimeout(() => {
            if (firstTile.innerHTML === secondTile.innerHTML) {
              firstTile.classList.add('matched');
              secondTile.classList.add('matched');
            } else {
              firstTile.classList.remove('flipped');
              secondTile.classList.remove('flipped');
            }
            firstTile = null;
            secondTile = null;
            isChecking = false;
  
            if (document.querySelectorAll('.matched').length === shuffledTiles.length) {
              winMessage.style.display = 'block';
            }
          }, 1000);
        }
      });
  
      restartButton.addEventListener('click', resetGame);
    }
  
    resetGame();
  });
  