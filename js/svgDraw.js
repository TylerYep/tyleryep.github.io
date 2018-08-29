function connectAllDivs() {
  connectDivs("a", "b", "#2cd6c2", 0.6);
  connectDivs("c", "d", "#2cd6c2", 0.6);
  connectDivs("d", "a", "#2cd6c2", 0.6);
  connectDivs("e", "f", "#2cd6c2", 0.6);

}


window.onresize = event => {
  const svg = document.getElementById("svg-canvas");
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }
  connectAllDivs();
};

connectAllDivs();


/* --- Helper functions --- */

function createSVG() {
  let svg = document.getElementById("svg-canvas");
  if (svg == null) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'svg-canvas');

    let p = document.getElementsByClassName("carousel-item active")[0];
    p.insertBefore(svg, p.firstChild);
  }
  return svg;
}

function findAbsolutePosition(htmlElement) {
  let x = 0, y = 0;
  for (let el = htmlElement; el != null; el = el.offsetParent) {
    x += el.offsetLeft;
    y += el.offsetTop;
  }
  return {"x": x, "y": y};
}

function drawCurvedLine(x1, y1, x2, y2, color, tension) {
  const svg = createSVG();
  const delta = (x2 - x1) * tension;
  let hx1 = x1 + delta;
  let hy1 = y1;
  let hx2 = x2 - delta;
  let hy2 = y2;
  const path = "M " + x1 + " " + y1 + " C " + hx1 + " " + hy1 + " " + hx2 + " " + hy2 + " " + x2 + " " + y2;

  let shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
  shape.setAttribute("d", path);
  shape.setAttribute("stroke", color);
  shape.setAttribute("style", "fill: none;");
  shape.setAttribute("stroke-width", 10);
  svg.appendChild(shape);
}

function connectDivs(leftId, rightId, color, tension) {
  const left = document.getElementById(leftId);
  const right = document.getElementById(rightId);

  const leftPos = findAbsolutePosition(left);
  const x1 = leftPos.x;
  const y1 = leftPos.y - 3 * document.body.clientHeight; // Projects page is 3rd from the top

  const rightPos = findAbsolutePosition(right);
  const x2 = rightPos.x;
  const y2 = rightPos.y - 3 * document.body.clientHeight; // Projects page is 3rd from the top

  drawCurvedLine(x1, y1, x2, y2, color, tension);
}
