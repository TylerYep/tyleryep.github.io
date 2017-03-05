getTime();

document.getElementById("sunrisebutton").addEventListener("click", function() {
    removeMoon();
    sunriseSunset();
    changeBackground("sunrise");
});
document.getElementById("sunbutton").addEventListener("click", function() {
    removeMoon();
    bringSun();
    changeBackground("sun");
});
document.getElementById("sunsetbutton").addEventListener("click", function() {
    removeMoon();
    sunriseSunset();
    changeBackground("sunset");
});
document.getElementById("nightbutton").addEventListener("click", function() {
    removeSun();
    bringMoon();
    changeBackground("night");
});

function getTime() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 5) {
        changeBackground("night");
        bringMoon();
    } else if (5 <= currentTime && currentTime < 8) {
        changeBackground("sunrise");
        sunriseSunset();
    } else if (16 <= currentTime && currentTime < 19) {
        changeBackground("sunset");
        sunriseSunset();
    } else if (19 <= currentTime && currentTime <= 24) {
        changeBackground("night");
        bringMoon();
    } else {
        bringSun();
    }
}

function changeBackground(button) {
    var homePage = document.getElementById("home");
    var header = document.getElementById("splash");
    if (button == "sunrise") {
        homePage.style.backgroundImage = "url('img/sunrise.png')";
        header.style.color = "inherit";
    } else if (button == "sun") {
        homePage.style.backgroundImage = "url('img/sky.png')";
        header.style.color = "inherit";
    } else if (button == "sunset") {
        homePage.style.backgroundImage = "url('img/sunset.png')";
        header.style.color = "inherit";
    } else if (button == "night") {
        homePage.style.backgroundImage = "url('img/nightsky.jpg')";
        header.style.color = "white";
    }
}

function removeSun() {
    var sun = document.getElementById("sun");
    sun.style.top = "70%";
}

function bringSun() {
    var sun = document.getElementById("sun");
    sun.style.top = "30%";
}

function removeMoon() {
    var moon = document.getElementById("moon");
    moon.style.top = "70%";
}

function bringMoon() {
    var moon = document.getElementById("moon");
    moon.style.top = "30%";
}

function sunriseSunset() {
    var sun = document.getElementById("sun");
    sun.style.top = "60%";
}
