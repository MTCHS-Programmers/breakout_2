var newBrick = 300;
var insert = document.getElementById("game");

while (newBrick > 0) {
    elem = document.createElement("div");
    elem.id = newBrick;
    elem.style.width = "30px";
    elem.style.height = "15px";
    elem.style.cssFloat = "left";
    elem.style.zIndex = "1000";
    insert.insertBefore(elem, insert.childNodes[0]);
    newBrick = newBrick - 1;
}