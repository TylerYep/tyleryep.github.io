// Written by Tyler Yep

// Turn on Zenscroll
zenscroll.setup(null, 0);

// Turn on tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

createAllCanvas();
connectAllDivs();

window.onresize = (event) => {
  event.preventDefault();
  resetAllCanvases();
  connectAllDivs();
};

$(".carousel-control-prev").on("click", (event) => {
  event.preventDefault();
  window.requestAnimationFrame(waitForSlide);
});

$(".carousel-control-next").on("click", (event) => {
  event.preventDefault();
  window.requestAnimationFrame(waitForSlide);
});

$(".carousel-indicators")
  .children("li")
  .each(function () {
    $(this).on("click", (event) => {
      event.preventDefault();
      window.requestAnimationFrame(waitForSlide);
    });
  });

// Just add connections here to link two nodes! '#2cd6c2'
function connectAllDivs() {
  const activeSlide = findActiveSlide();

  if (activeSlide === 0) {
    connectDivs(0, "stanford", "openproof");
    connectDivs(0, "stanford", "edutech");
    connectDivs(0, "marker-0", "stanford");
    connectDivs(0, "openproof", "marker-5");
    connectDivs(0, "marker-1", "cs198");
    connectDivs(0, "cs198", "marker-6");
  } else if (activeSlide === 1) {
    connectDivs(1, "marker-10", "stanford-2");
    connectDivs(1, "stanford-2", "intuit");
    connectDivs(1, "stanford-2", "vhil");
    connectDivs(1, "vhil", "marker-16");
    connectDivs(1, "marker-16", "intuit");
    connectDivs(1, "intuit", "marker-15");
    connectDivs(1, "marker-11", "wolfbot");
    connectDivs(1, "marker-17", "cs198-2");
    connectDivs(1, "cs198-2", "marker-18");
  } else if (activeSlide === 2) {
    connectDivs(2, "marker-20", "stanford-3");
    connectDivs(2, "stanford-3", "bridgewater");
    connectDivs(2, "marker-26", "cs198-3");
    connectDivs(2, "marker-21", "self-driving");
    connectDivs(2, "bridgewater", "marker-25");
    connectDivs(2, "cs198-3", "bridgewater");
  } else if (activeSlide === 3) {
    connectDivs(3, "marker-30", "stanford-4");
    connectDivs(3, "stanford-4", "bridgewater-2");
    connectDivs(3, "marker-30", "cs198-4");
    connectDivs(3, "cs198-4", "bridgewater-2");
  }
}

/* --- Helper functions --- */

function findActiveSlide() {
  const carouselSlides = document.getElementsByClassName("carousel-item");
  for (let i = 0; i < carouselSlides.length; i++) {
    if (carouselSlides[i].className.includes("active")) {
      return i;
    }
  }
}

function resetAllCanvases() {
  const carouselSlides = document.getElementsByClassName("carousel-item");
  for (let i = 0; i < carouselSlides.length; i++) {
    const svg = carouselSlides[i].getElementsByClassName("svg-canvas")[0];
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
  }
}

function waitForSlide() {
  if (
    $(".carousel-item-left").length > 0 ||
    $(".carousel-item-right").length > 0
  ) {
    window.requestAnimationFrame(waitForSlide);
  } else {
    connectAllDivs();
  }
}

function createAllCanvas() {
  const carousels = document.getElementsByClassName("carousel-item");
  for (let i = 0; i < carousels.length; i++) {
    const carousel = carousels[i];
    const namespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(namespace, "svg");
    svg.setAttribute("class", "svg-canvas");
    carousel.insertBefore(svg, carousel.firstChild);
  }
}

function findAbsolutePosition(htmlElement) {
  let x = 0,
    y = 0;
  for (let el = htmlElement; el != null; el = el.offsetParent) {
    x += el.offsetLeft;
    y += el.offsetTop;
  }
  return { x: x, y: y };
}

function drawCurvedLine(slideIndex, x1, y1, x2, y2, color, tension) {
  const svg = document.getElementsByClassName("svg-canvas")[slideIndex];
  const delta = (x2 - x1) * tension;
  const hx1 = x1 + delta;
  const hy1 = y1;
  const hx2 = x2 - delta;
  const hy2 = y2;
  const path = `M ${x1} ${y1} C ${hx1} ${hy1} ${hx2} ${hy2} ${x2} ${y2}`;

  const namespace = "http://www.w3.org/2000/svg";
  const shape = document.createElementNS(namespace, "path");
  shape.setAttribute("d", path);
  shape.setAttribute("stroke", color);
  shape.setAttribute("class", "path");
  shape.setAttribute("style", "fill: none;");
  shape.setAttribute("stroke-width", 10);
  svg.appendChild(shape);
}

function connectDivs(
  slideIndex,
  leftId,
  rightId,
  color = "lightseagreen",
  tension = 0.6
) {
  // Projects page is 3rd from the top
  const distanceFromTop = 3 * document.body.clientHeight;

  const left = document.getElementById(leftId);
  const right = document.getElementById(rightId);

  const leftPos = findAbsolutePosition(left);
  const x1 = leftPos.x;
  const y1 = leftPos.y - distanceFromTop;

  const rightPos = findAbsolutePosition(right);
  const x2 = rightPos.x;
  const y2 = rightPos.y - distanceFromTop;

  drawCurvedLine(slideIndex, x1, y1, x2, y2, color, tension);
}
