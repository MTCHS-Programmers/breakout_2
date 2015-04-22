function brickCheck() {

    if (clock.loop === 1) {
        while (parseFloat(brickState.indexOf(16)) > -1) {
            brickActive = parseFloat(brickState.indexOf(16))
            brickState[brickActive] = 0;
            brickType[brickActive] = 0;

            brickTotalStrength[brickActive] = "null";
            brickStrength[brickActive] = "null";
            brickType[brickActive] = 0;
            brickLocation[brickActive] = "null";
            brick.count = brick.count - 1;


            var id = document.getElementById(brickActive);
            id.style.backgroundImage = "none";
            id.style.backgroundColor = "rgba(00,00,00,0.0)";
        }

        while (parseFloat(brickState.indexOf(15)) > -1) {
            brickActive = parseFloat(brickState.indexOf(15))
            document.getElementById(brickActive).style.backgroundColor = "#000000";
            brickState[brickActive] = 16;
            brickType[brickActive] = "7_16"

            if (brickTime[brickActive] === 15) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(14)) > -1) {
            brickActive = parseFloat(brickState.indexOf(14))
            document.getElementById(brickActive).style.backgroundColor = "#000000";
            brickState[brickActive] = 15;
            brickType[brickActive] = "7_15"

            if (brickTime[brickActive] === 14) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(13)) > -1) {
            brickActive = parseFloat(brickState.indexOf(13))
            document.getElementById(brickActive).style.backgroundColor = "#000000";
            brickState[brickActive] = 14;
            brickType[brickActive] = "7_14"

            if (brickTime[brickActive] === 13) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(12)) > -1) {
            brickActive = parseFloat(brickState.indexOf(12))
            document.getElementById(brickActive).style.backgroundColor = "#ff0000";
            brickState[brickActive] = 13;
            brickType[brickActive] = "7_13"

            if (brickTime[brickActive] === 12) {
                doDamage(brickActive)
            }
        }


        while (parseFloat(brickState.indexOf(11)) > -1) {
            brickActive = parseFloat(brickState.indexOf(11))
            document.getElementById(brickActive).style.backgroundColor = "#ff0000";
            brickState[brickActive] = 12;
            brickType[brickActive] = "7_12"

            if (brickTime[brickActive] === 11) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(10)) > -1) {
            brickActive = parseFloat(brickState.indexOf(10))
            document.getElementById(brickActive).style.backgroundColor = "#ff0000";
            brickState[brickActive] = 11;
            brickType[brickActive] = "7_11"

            if (brickTime[brickActive] === 10) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(9)) > -1) {
            brickActive = parseFloat(brickState.indexOf(9))
            document.getElementById(brickActive).style.backgroundColor = "#c80000";
            brickState[brickActive] = 10;
            brickType[brickActive] = "7_10"

            if (brickTime[brickActive] === 9) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(8)) > -1) {
            brickActive = parseFloat(brickState.indexOf(8))
            document.getElementById(brickActive).style.backgroundColor = "#880000";
            brickState[brickActive] = 9;
            brickType[brickActive] = "7_9"

            if (brickTime[brickActive] === 8) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(7)) > -1) {
            brickActive = parseFloat(brickState.indexOf(7))
            document.getElementById(brickActive).style.backgroundColor = "#480000";
            brickState[brickActive] = 8;
            brickType[brickActive] = "7_8"

            if (brickTime[brickActive] === 7) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(6)) > -1) {
            brickActive = parseFloat(brickState.indexOf(6))
            document.getElementById(brickActive).style.backgroundColor = "#000000";
            brickState[brickActive] = 7;
            brickType[brickActive] = "7_7"

            if (brickTime[brickActive] === 6) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(5)) > -1) {
            brickActive = parseFloat(brickState.indexOf(5))
            document.getElementById(brickActive).style.backgroundColor = "#ffffff";
            brickState[brickActive] = 6;
            brickType[brickActive] = "7_6"

            if (brickTime[brickActive] === 5) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(4)) > -1) {
            brickActive = parseFloat(brickState.indexOf(4))
            document.getElementById(brickActive).style.backgroundColor = "#ffffff";
            brickState[brickActive] = 5;
            brickType[brickActive] = "7_5"

            if (brickTime[brickActive] === 4) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(3)) > -1) {
            brickActive = parseFloat(brickState.indexOf(3))
            document.getElementById(brickActive).style.backgroundColor = "#ffffff";
            brickState[brickActive] = 4;
            brickType[brickActive] = "7_4"

            if (brickTime[brickActive] === 3) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(2)) > -1) {
            brickActive = parseFloat(brickState.indexOf(2))
            document.getElementById(brickActive).style.backgroundColor = "#ffffff";
            brickState[brickActive] = 3;
            brickType[brickActive] = "7_3"

            if (brickTime[brickActive] === 2) {
                doDamage(brickActive)
            }
        }

        while (parseFloat(brickState.indexOf(1)) > -1) {
            brickActive = parseFloat(brickState.indexOf(1))
            document.getElementById(brickActive).style.backgroundImage = "none"
            document.getElementById(brickActive).style.backgroundColor = "#000000";
            brickState[brickActive] = 2;
            brickType[brickActive] = "7_2"

            brickTime[brickActive] = Math.floor((Math.random() * 15) + 2)
        }
    }

    clock.loop = clock.loop + 1;
    if (clock.loop === 5) {
        clock.loop = 0;
    }
}
function doDamage(brickActive) {

    //actually does damage to nearby bricks
    var explosionX1 = brickLocation[brickActive].substring(0, 1);
    var explosionX2 = brickLocation[brickActive].substring(1, 2);
    if (explosionX2 != "-") {
        var explosionX = explosionX1 + explosionX2;
        var explosionY = brickLocation[brickActive].substring(3, 10);
    }
    else {
        var explosionX = explosionX1;
        var explosionY = brickLocation[brickActive].substring(2, 10);
    }

    var explosionXLeft = parseFloat(explosionX) - 1
    var explosionXRight = parseFloat(explosionX) + 1
    var explosionX2Right = parseFloat(explosionX) + 2
    var explosionX2Left = parseFloat(explosionX) - 2

    var explosionYUp = parseFloat(explosionY) - 1
    var explosionYDown = parseFloat(explosionY) + 1
    var explosionY2Up = parseFloat(explosionY) - 2
    var explosionY2Down = parseFloat(explosionY) + 2
    //sides
    if (parseFloat(brickLocation.indexOf(explosionXRight + "-" + explosionY)) > -1) {
        brickActive = brickLocation.indexOf(explosionXRight + "-" + explosionY);
        breakBrick(brickActive)
        breakBrick(brickActive)
    }

    if (parseFloat(brickLocation.indexOf(explosionXLeft + "-" + explosionY)) > -1) {
        brickActive = brickLocation.indexOf(explosionXLeft + "-" + explosionY);
        breakBrick(brickActive)
        breakBrick(brickActive)
    }

    if (parseFloat(brickLocation.indexOf(explosionX + "-" + explosionYUp)) > -1) {
        brickActive = brickLocation.indexOf(explosionX + "-" + explosionYUp);
        breakBrick(brickActive)
        breakBrick(brickActive)
    }

    if (parseFloat(brickLocation.indexOf(explosionX + "-" + explosionYDown)) > -1) {
        brickActive = brickLocation.indexOf(explosionX + "-" + explosionYDown);
        breakBrick(brickActive)
        breakBrick(brickActive)
    }

    //corners
    if (parseFloat(brickLocation.indexOf(explosionXRight + "-" + explosionYUp)) > -1) {
        brickActive = brickLocation.indexOf(explosionXRight + "-" + explosionYUp);
        breakBrick(brickActive)
    }

    if (parseFloat(brickLocation.indexOf(explosionXLeft + "-" + explosionYUp)) > -1) {
        brickActive = brickLocation.indexOf(explosionXLeft + "-" + explosionYUp);
        breakBrick(brickActive)
    }

    if (parseFloat(brickLocation.indexOf(explosionXRight + "-" + explosionYDown)) > -1) {
        brickActive = brickLocation.indexOf(explosionXRight + "-" + explosionYDown);
        breakBrick(brickActive)
    }

    if (parseFloat(brickLocation.indexOf(explosionXLeft + "-" + explosionYDown)) > -1) {
        brickActive = brickLocation.indexOf(explosionXLeft + "-" + explosionYDown);
        breakBrick(brickActive)
    }

    //outers
    if (parseFloat(brickLocation.indexOf(explosionX2Right + "-" + explosionY)) > -1) {
        brickActive = brickLocation.indexOf(explosionX2Right + "-" + explosionY);
        breakBrick(brickActive)
    }

    if (parseFloat(brickLocation.indexOf(explosionX2Left + "-" + explosionY)) > -1) {
        brickActive = brickLocation.indexOf(explosionX2Left + "-" + explosionY);
        breakBrick(brickActive)
    }

    if (parseFloat(brickLocation.indexOf(explosionX + "-" + explosionY2Up)) > -1) {
        brickActive = brickLocation.indexOf(explosionX + "-" + explosionY2Up);
        breakBrick(brickActive)
    }

    if (parseFloat(brickLocation.indexOf(explosionX + "-" + explosionY2Down)) > -1) {
        brickActive = brickLocation.indexOf(explosionX + "-" + explosionY2Down);
        breakBrick(brickActive)
    }
}