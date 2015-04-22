//generates the level based off of level.current

function levelLoad(current) {
    level.newLevel = current;
    console.log("Now loading: " + level.newLevel);
    brick.count = 0;

    var generatingBrick = 300;
    while (generatingBrick > 0) {
        level.brick = level.newLevel.substring(generatingBrick - 1, generatingBrick);
        //Cycles through all 300 possible bricks from level string. Sets brick[] to the brick id.
        //procedes to call correct brick generation function based off level.brick.

        addAirBrick(generatingBrick);

        if (level.brick === "1") {
            //adds Red brick (id:1)
            addRedBrick(generatingBrick);
        }

        if (level.brick === "2") {
            //adds Green brick (id:2)
            addGreenBrick(generatingBrick);
        }

        if (level.brick === "3") {
            //adds Blue brick (id:3)
            addBlueBrick(generatingBrick);
        }

        if (level.brick === "4") {
            //adds Yellow brick (id:4)
            addYellowBrick(generatingBrick);
        }

        if (level.brick === "7") {
            //adds Tnt brick (id:8)
            addTntBrick(generatingBrick);
        }

        if (level.brick === "8") {
            //adds Random brick (id:8)
            addRandomBrick(generatingBrick);
        }

        if (level.brick === "9") {
            //adds Metal brick (id:9)
            addMetalBrick(generatingBrick);
        }

        var generatingBrick = generatingBrick - 1;
        clock.nextFunction = 2;
    }
}