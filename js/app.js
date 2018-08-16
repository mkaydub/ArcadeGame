// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y + 55;
  this.speed = speed;
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
    this.sprite = 'images/char-cat-girl.png';
    this.x = x;
    this.y = y - 18;
    this.horiz = 101;
    this.vert = 83;
  }
  //UPDATE PLAYER POSITION METHOD
  update() {
    for (let enemy of allEnemies) {
      if (this.y === enemy.y) {
        console.log('enemy hit');
      }
      if (this.y < 30) {
        console.log('winner');
      }
    }
  }
  //RENDER PLAYER IMAGE METHOD
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  reset() {
    this.x = 202;
    this.y = 405;
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(202, 405);
const enemy1 = new Enemy(20, 0, 100);
const enemy2 = new Enemy(50, 83, 200);
const allEnemies = [];
allEnemies.push(enemy1, enemy2);


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
});