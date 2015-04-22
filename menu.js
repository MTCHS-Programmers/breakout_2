menu = new Object()
menu.pause = "true";
menu.mouse = "false";
menu.toggle = "true";

lineLevel = new Array()

function customLevel() {
    document.getElementById("infoLevel").innerHTML = "Level: Custom Level";
    user.lives = 5;
    user.score = 0;

    var loop = 1;

    while (loop < 16) {
        lineLevel[loop] = document.getElementById(loop + "Lines").value;
        while (lineLevel[loop].length < 20) {
            lineLevel[loop] = lineLevel[loop] + "0";
        }

        loop = loop + 1;
    }

    var totalLevel = lineLevel[1] + lineLevel[2] + lineLevel[3] + lineLevel[4] + lineLevel[5] + lineLevel[6] + lineLevel[7] + lineLevel[8] + lineLevel[9] + lineLevel[10] + lineLevel[11] + lineLevel[12] + lineLevel[13] + lineLevel[14] + lineLevel[15];
    document.getElementById("allLines").value = totalLevel;
    level.current = 0;

    levelLoad(totalLevel);
}

function convertLines() {
    var totalLevel = document.getElementById("allLines").value;

    while (totalLevel.length < 300) {
        totalLevel = totalLevel + "0";
    }

    document.getElementById("1Lines").value = totalLevel.substring(0, 20);
    document.getElementById("2Lines").value = totalLevel.substring(20, 40);
    document.getElementById("3Lines").value = totalLevel.substring(40, 60);
    document.getElementById("4Lines").value = totalLevel.substring(60, 80);
    document.getElementById("5Lines").value = totalLevel.substring(80, 100);
    document.getElementById("6Lines").value = totalLevel.substring(100, 120);
    document.getElementById("7Lines").value = totalLevel.substring(120, 140);
    document.getElementById("8Lines").value = totalLevel.substring(140, 160);
    document.getElementById("9Lines").value = totalLevel.substring(160, 180);
    document.getElementById("10Lines").value = totalLevel.substring(180, 200);
    document.getElementById("11Lines").value = totalLevel.substring(200, 220);
    document.getElementById("12Lines").value = totalLevel.substring(220, 240);
    document.getElementById("13Lines").value = totalLevel.substring(240, 260);
    document.getElementById("14Lines").value = totalLevel.substring(260, 280);
    document.getElementById("15Lines").value = totalLevel.substring(280, 300);

    document.getElementById("allLines").value = totalLevel;
}

function resetLines() {
    document.getElementById("1Lines").value = ""
    document.getElementById("2Lines").value = ""
    document.getElementById("3Lines").value = ""
    document.getElementById("4Lines").value = ""
    document.getElementById("5Lines").value = ""
    document.getElementById("6Lines").value = ""
    document.getElementById("7Lines").value = ""
    document.getElementById("8Lines").value = ""
    document.getElementById("9Lines").value = ""
    document.getElementById("10Lines").value = ""
    document.getElementById("11Lines").value = ""
    document.getElementById("12Lines").value = ""
    document.getElementById("13Lines").value = ""
    document.getElementById("14Lines").value = ""
    document.getElementById("15Lines").value = ""
}

function menuPause() {
    if (menu.pause === "true") {
        menu.returnState = clock.nextFunction;
        document.getElementById("pauseButton").innerHTML = "UnPause";
        clock.nextFunction = 3;
        menu.pause = "false";
    }
    else {
        clock.nextFunction = menu.returnState;
        document.getElementById("pauseButton").innerHTML = "Pause";
        menu.pause = "true";
        timer()
    }
}

function mouseLaunch() {
    if (menu.mouse === "true") {
        if (clock.nextFunction === 2) {
            clock.nextFunction = 1;
            ball.y = 430;
        }
    }
}

function mouseCoords(event) {
    if (menu.mouse === "true") {
        if (clock.nextFunction != 3) {
            var x = event.clientX - document.getElementById("game").getBoundingClientRect().left;
            user.paddleX = x - 30; ;
        }
    }
}

function mouseControl() {
    if (menu.mouse === "true") {
        menu.mouse = "false";
    }
    else {
        menu.mouse = "true";
    }
}

function menuToggle() {
    if (menu.toggle === "true") {
        menu.toggle = "false";
    }
    else {
        menu.toggle = "true";
    }
}

function out(left) {
    document.getElementById("menu").style.left = -9;
}

function into(left) {
    if (menu.toggle === "true") {
        document.getElementById("menu").style.left = -290;
    }
}

function refresh() {
    location.reload();
}