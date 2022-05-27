const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.reset-button');

numberOfCols = 50;
numberOfItems = numberOfCols ** 2;

grid.style.setProperty('grid-template-columns', `repeat(${numberOfCols}, 1fr)`);

for (let i = 0; i < numberOfItems; i++) {
  const div = document.createElement('div');

  div.className = 'grid-item';
  div.addEventListener('mouseover', function (event) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = `#${randomColor}`;
  });
  grid.appendChild(div);
}

resetButton.addEventListener('click', function () {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((element) => {
    element.style.backgroundColor = 'transparent';
  });
});
