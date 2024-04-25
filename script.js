const GRID_SIZE = 4;
let grid = [];

function initializeGrid() {
  for (let i = 0; i < GRID_SIZE; i++) {
    grid[i] = [];
    for (let j = 0; j < GRID_SIZE; j++) {
      grid[i][j] = 0;
    }
  }
}

function generateRandomCell() {
  const emptyCells = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      if (grid[i][j] === 0) {
        emptyCells.push({ x: i, y: j });
      }
    }
  }
  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const { x, y } = emptyCells[randomIndex];
    grid[x][y] = Math.random() < 0.9 ? 2 : 4;
  }
}

function renderGrid() {
  const container = document.getElementById('grid-container');
  container.innerHTML = '';
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      const cellValue = grid[i][j];
      const cellDiv = document.createElement('div');
      cellDiv.className = 'grid-item';
      if (cellValue !== 0) {
        cellDiv.style.backgroundImage = `url('images/${cellValue}.jpg')`;
      }
      cellDiv.textContent = cellValue !== 0 ? '' : '';
      container.appendChild(cellDiv);
    }
  }
}

function startGame() {
  initializeGrid();
  generateRandomCell();
  generateRandomCell();
  renderGrid();
}

document.addEventListener('DOMContentLoaded', () => {
  startGame();
});
