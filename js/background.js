// Written by Tyler Yep

/* --- Main --- */

getTime(); // Set current background
document.getElementById("body").classList.add("loaded"); // Remove loading screen

/* --- Event Listeners --- */

document.getElementById("sunrisebutton").addEventListener("click", () => {
  changeBackground("sunrise");
  removeMoon();
  sunriseSunset();
});

document.getElementById("sunbutton").addEventListener("click", () => {
  changeBackground("sun");
  removeMoon();
  bringSun();
});

document.getElementById("sunsetbutton").addEventListener("click", () => {
  changeBackground("sunset");
  removeMoon();
  sunriseSunset();
});

document.getElementById("nightbutton").addEventListener("click", () => {
  changeBackground("night");
  removeSun();
  bringMoon();
});

/* --- Function Definitions --- */

function getTime() {
  const currentTime = new Date().getHours();
  if ((currentTime >= 0 && currentTime < 5) || currentTime >= 19) {
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
  const homePage = document.getElementById("home");
  const header = document.getElementById("splash");
  if (button === "sunrise") {
    homePage.style.backgroundImage = "url('img/home/sunrise.jpg')";
    header.style.color = "inherit";
  } else if (button === "sun") {
    homePage.style.backgroundImage = "url('img/home/sky.jpg')";
    header.style.color = "inherit";
  } else if (button === "sunset") {
    homePage.style.backgroundImage = "url('img/home/sunset.jpg')";
    header.style.color = "inherit";
  } else if (button === "night") {
    homePage.style.backgroundImage = "url('img/home/nightsky.jpg')";
    header.style.color = "white";
  }
}

function removeSun() {
  const sun = document.getElementById("sun");
  sun.style.top = "70%";
}

function bringSun() {
  const sun = document.getElementById("sun");
  sun.style.top = "30%";
}

function removeMoon() {
  const moon = document.getElementById("moon");
  moon.style.top = "70%";
}

function bringMoon() {
  const moon = document.getElementById("moon");
  moon.style.top = "30%";
}

function sunriseSunset() {
  const sun = document.getElementById("sun");
  sun.style.top = "60%";
}
