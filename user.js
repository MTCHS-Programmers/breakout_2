key = new Array();

paddle = new Object;
paddle.x = 0;

speed = new Object();
speed.timer = 5;

user = new Object();
user.score = 0;
user.lives = 5;
user.power = 1;
user.catch = "false"
user.paddleX = 0;
user.paddleSpeed = 3;

onkeydown = onkeyup = function (e) {
    e = e || event; // to deal with IE
    key[e.keyCode] = e.type == 'keydown';

    /*insert conditional here*/
}

function userInfo() {
    document.getElementById("infoScore").innerHTML = "Score: " + user.score;
    document.getElementById("infoLives").innerHTML = "Lives: " + user.lives;
    document.getElementById("infoBrickCount").innerHTML = "Brick Count: " + brick.count;
}