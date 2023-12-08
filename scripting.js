
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function SetRRGB(boxID) {
    document.getElementById(boxID).style.backgroundColor = getRandomColor();
}

function randColor(box) {
    box.style.backgroundColor = getRandomColor();
}

function flashColors() {
    (document.querySelectorAll(".flash")).forEach(randColor);
}

setInterval(flashColors, 100);