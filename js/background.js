function getTime() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 5) {
        changeBackground("night");
    } else if (5 <= currentTime && currentTime < 8) {
        changeBackground("sunrise");
    } else if (16 <= currentTime && currentTime < 19) {
        changeBackground("sunset");
    } else if (19 <= currentTime && currentTime <= 24) {
        changeBackground("night");
    }
}

getTime();

document.getElementById("sunrisebutton").addEventListener("click", function() {
    changeBackground("sunrise");
    removeSun();
});
document.getElementById("sunbutton").addEventListener("click", function() {
    changeBackground("sun");
    bringSun();
});
document.getElementById("sunsetbutton").addEventListener("click", function() {
    changeBackground("sunset");
    removeSun();
});
document.getElementById("nightbutton").addEventListener("click", function() {
    changeBackground("night");
    bringSun();
});

function changeBackground(button) {
    var homePage = document.getElementById("home");
    var header = document.getElementById("splash");
    if (button == "sunrise") {
        homePage.style.backgroundImage = "url('img/sunrise.jpg')";
        header.style.color = "inherit";
    } else if (button == "sun") {
        homePage.style.backgroundImage = "url('img/sky.png')";
        header.style.color = "inherit";
    } else if (button == "sunset") {
        homePage.style.backgroundImage = "url('img/sunset.jpg')";
        header.style.color = "inherit";
    } else if (button == "night") {
        homePage.style.backgroundImage = "url('img/nightsky.jpg')";
        header.style.color = "white";
    }
}

function removeSun() {
    var sun = document.getElementById("sun")
    sun.style.visibility="hidden";
}

function bringSun() {
    var sun = document.getElementById("sun")
    sun.style.visibility="";
}
