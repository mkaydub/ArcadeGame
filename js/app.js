// scorePanel and final scoreCard variables
let moves = 0;
let second = 0;
let minute = 0;
let interval;
let timerRunning = false;
let timer = document.querySelector('.timer');
let starsArray = document.querySelectorAll(".stars li");


// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y + 55;
  this.speed = Math.floor(Math.random() * 350 + 50);
  this.horiz = 101;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x < 505) {
    this.x += (this.speed * dt);
  } else {
    this.x = -10;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y) {
    this.sprite = 'images/char-horn-girl.png';
    this.x = x;
    this.y = y;
    this.horiz = 101;
    this.vert = 83;
  }
  //UPDATE PLAYER POSITION METHOD
  update() {
    for (let enemy of allEnemies) {
      if (this.y === enemy.y && (enemy.x + enemy.horiz / 2.25 > this.x && enemy.x < this.x + enemy.horiz / 2.25)) {
        resetStars();
        resetMoves();
        this.resetpos();
      }
    }
    if (this.y === -28) {
      addMove();
      setTimeout(() => {
        this.resetpos();
        scoreStarsChange();
      }, 10);
    }
  }

  //RENDER PLAYER IMAGE METHOD
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  resetpos() {
    this.x = 202;
    this.y = 387;
  }

  //HANDLEINPUT METHOD

  handleInput(keys) {
    switch (keys) {
      case 'left':
        if (this.x > 0) {
          this.x -= this.horiz;
        }
        break;
      case 'up':
        if (this.y > 33) {
          this.y -= this.vert;
        }
        break;
      case 'right':
        if (this.x < 404) {
          this.x += this.horiz;
        }
        break;
      case 'down':
        if (this.y < 332) {
          this.y += this.vert;
        }
        break;
    }
  }
}



//reset moves to zero
function resetMoves() {
  moves = 0;
  document.querySelector('.moves').innerHTML = moves;
}

function scoreStarsChange() {
  if (moves === 1) {
    //color in one star when player makes it to the water
    starsArray[0].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[0].getElementsByTagName('i')[0].classList.add("fa-star");
  } else if (moves === 2) {
    //color in 2 stars when player makes it to the water 2 times
    starsArray[0].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[0].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[1].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[1].getElementsByTagName('i')[0].classList.add("fa-star");
  } else if (moves === 3) {
    //color in 3 stars when player makes it to the water 3 times
    starsArray[0].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[0].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[1].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[1].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[2].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[2].getElementsByTagName('i')[0].classList.add("fa-star");
  } else if (moves === 4) {
    //color in 4 stars when player makes it to the water 4 times
    starsArray[0].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[0].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[1].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[1].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[2].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[2].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[3].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[3].getElementsByTagName('i')[0].classList.add("fa-star");
  } else if (moves === 5) {
    //color in 5 stars when player makes it to the water 5 times
    starsArray[0].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[0].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[1].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[1].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[2].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[2].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[3].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[3].getElementsByTagName('i')[0].classList.add("fa-star");
    starsArray[4].getElementsByTagName('i')[0].classList.remove("fa-star-o");
    starsArray[4].getElementsByTagName('i')[0].classList.add("fa-star");
    stopTimer();
  }
}

// resets all stars to 0 if collision occurs
function resetStars() {
  starsArray[0].getElementsByTagName('i')[0].classList.remove("fa-star");
  starsArray[0].getElementsByTagName('i')[0].classList.add("fa-star-o");
  starsArray[1].getElementsByTagName('i')[0].classList.remove("fa-star");
  starsArray[1].getElementsByTagName('i')[0].classList.add("fa-star-o");
  starsArray[2].getElementsByTagName('i')[0].classList.remove("fa-star");
  starsArray[2].getElementsByTagName('i')[0].classList.add("fa-star-o");
  starsArray[3].getElementsByTagName('i')[0].classList.remove("fa-star");
  starsArray[3].getElementsByTagName('i')[0].classList.add("fa-star-o");
  starsArray[4].getElementsByTagName('i')[0].classList.remove("fa-star");
  starsArray[4].getElementsByTagName('i')[0].classList.add("fa-star-o");
}

//start timer for score panel
function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    second = 0;
    minute = 0;
    interval = setInterval(function() {
      second++;
      timer.innerHTML = minute + " mins " + second + " secs";
      if (second == 60) {
        minute++;
        second = 0;
      }
    }, 1000);
  }
}
//stop timer

function stopTimer() {
  if (timerRunning) {
    timerRunning = false;
    clearInterval(interval);
  }
}
//reset clock to zero

function resetClock() {
  stopTimer();
  timerRunning = false;
  second = 0;
  minute = 0;
  let timer = document.querySelector(".timer");
  timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(202, 387);
const enemy1 = new Enemy(0, 0);
const enemy2 = new Enemy(-5, 83);
const enemy3 = new Enemy(-10, 166);
const enemy4 = new Enemy(0, 0);
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3, enemy4);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
  startTimer();
});

let restart = document.querySelector('.restart');
restart.addEventListener('click', () => {
  window.location.reload(true);
});

function addMove() {
  moves++;
  const movesText = document.querySelector('.moves');
  movesText.innerHTML = moves;
}

function resetGame() {
  resetMoves();
  resetStars();
  resetClock();
}