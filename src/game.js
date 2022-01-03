import {update as updateSnake, draw as drawSnake , SNAKE_SPEED} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'

let lastRenderTime = 0
const gameBoard = document.querySelector('#game-board')
let gameOver = false

function main(currentTime) {
  if (gameOver) {
    return alert('you lose')
  }

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
  updateFood()
  checkDeth()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
