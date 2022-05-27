const grid = document.querySelector('.grid');

numberOfCols = 10;
numberOfItems = numberOfCols ** 2;

grid.style.setProperty('grid-template-columns', `repeat(${numberOfCols}, 1fr)`);

for (let i = 0; i < numberOfItems; i++) {
  const div = document.createElement('div');
  grid.appendChild(div);
  div.className = 'grid-item';
}
