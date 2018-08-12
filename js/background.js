getTime();

document.getElementById("sunrisebutton").addEventListener("click", function() {
    changeBackground("sunrise");
    removeMoon();
    sunriseSunset();
});
document.getElementById("sunbutton").addEventListener("click", function() {
    changeBackground("sun");
    removeMoon();
    bringSun();
});
document.getElementById("sunsetbutton").addEventListener("click", function() {
    changeBackground("sunset");
    removeMoon();
    sunriseSunset();
});
document.getElementById("nightbutton").addEventListener("click", function() {
    changeBackground("night");
    removeSun();
    bringMoon();
});

function getTime() {
    let currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 5 || currentTime >= 19) {
        changeBackground("night");
        bringMoon();
    } else if (currentTime >= 5 && currentTime < 8) {
        changeBackground("sunrise");
        sunriseSunset();
    } else if (currentTime >= 16 && currentTime < 19) {
        changeBackground("sunset");
        sunriseSunset();
    } else {
        bringSun();
    }
}

function changeBackground(button) {
    let homePage = document.getElementById("home");
    let header = document.getElementById("splash");
    if (button == "sunrise") {
        homePage.style.backgroundImage = "url('img/home/sunrise.jpg')";
        header.style.color = "inherit";
    } else if (button == "sun") {
        homePage.style.backgroundImage = "url('img/home/sky.jpg')";
        header.style.color = "inherit";
    } else if (button == "sunset") {
        homePage.style.backgroundImage = "url('img/home/sunset.jpg')";
        header.style.color = "inherit";
    } else if (button == "night") {
        homePage.style.backgroundImage = "url('img/home/nightsky.jpg')";
        header.style.color = "white";
    }
}

function removeSun() {
    let sun = document.getElementById("sun");
    sun.style.top = "70%";
}

function bringSun() {
    let sun = document.getElementById("sun");
    sun.style.top = "30%";
}

function removeMoon() {
    let moon = document.getElementById("moon");
    moon.style.top = "70%";
}

function bringMoon() {
    let moon = document.getElementById("moon");
    moon.style.top = "30%";
}

function sunriseSunset() {
    let sun = document.getElementById("sun");
    sun.style.top = "60%";
}
