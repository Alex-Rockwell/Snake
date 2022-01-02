import {update as updateSnake, draw as drawSnake , SNAKE_SPEED} from './snake.js'
const gameBoard = document.querySelector('#game-board')

let lastRenderTime = 0

function main(currentTime) {
  let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  window.requestAnimationFrame(main)
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime
  console.log(secondsSinceLastRender)

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
}
