// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;

};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    if (this.x < 480) {
        this.x++;
    } else if (this.x = 480) {
        this.x = 0;
    }

    // 8You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt) {
    // Now I am not sure what to write here...
    // For the Player.prototype.update, you might want to put in the logic 
    // so that the player cannot move off screen.
    for (i = 0; i < 3; i++) {

        if (this.x > 480) {
            this.x = 400;
        } else if (this.x + 60 > allEnemies[i].x && this.x < allEnemies[i].x + 60 && this.y + 25 > allEnemies[i].y && this.y < allEnemies[i].y + 25) {
            this.reset(this.x, 435);
        } else if (this.y < 1) {
            alert("Conguraturations !! You won !!")
            this.reset(this.x, 435);
        }
    }

};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keycode) {
    if (keycode == 'up') {
        if (this.y > 0) {
            this.y = this.y - 50;
        }
    } else if (keycode == 'down') {
        if (this.y < 400) {
            this.y = this.y + 50;
        }
    } else if (keycode == 'right') {
        if (this.x < 450) {
            this.x = this.x + 100;
        }
    } else if (keycode == 'left') {
        if (this.x > 0) {
            this.x = this.x - 100;
        }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

Player.prototype.reset = function(x, y) {
    this.x = x;
    this.y = 400;
};


var allEnemies = [new Enemy(0, 150), new Enemy(200, 200), new Enemy(250,50)];
var player = new Player(200, 400);


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


function writeString(text) {
    console.log(text)
}
