function createSVG() {
  let svg = document.getElementById("svg-canvas");
  if (null == svg) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'svg-canvas');
    svg.setAttribute('style', 'position:absolute; height: 100%; width: 100%; z-index: 5;');

    let p = document.getElementById("project-slide");
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

function connectDivs(leftId, rightId, color, tension) {
  const left = document.getElementById(leftId);
  const right = document.getElementById(rightId);

  const leftPos = findAbsolutePosition(left);
  let x1 = leftPos.x;
  let y1 = leftPos.y - 3 * document.body.clientHeight;

  const rightPos = findAbsolutePosition(right);
  let x2 = rightPos.x;
  let y2 = rightPos.y - 3 * document.body.clientHeight;

  drawCurvedLine(x1, y1, x2, y2, color, tension);
}

function drawCurvedLine(x1, y1, x2, y2, color, tension) {
  const svg = createSVG();
  let shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let delta = (x2 - x1) * tension;
  let hx1 = x1 + delta;
  let hy1 = y1;
  let hx2 = x2 - delta;
  let hy2 = y2;
  let path = "M " + x1 + " " + y1 + " C " + hx1 + " " + hy1 + " " + hx2 + " " + hy2 + " " + x2 + " " + y2;
  shape.setAttribute("d", path);
  shape.setAttribute("stroke", color);
  shape.setAttribute("style", "fill: none;");
  shape.setAttribute("stroke-width", 10);
  svg.appendChild(shape);
}

// window.onresize = event => {
//   const svg = document.getElementById("svg-canvas");
//   while (svg.firstChild) {
//     svg.removeChild(svg.firstChild);
//   }
//   connectDivs("a", "b", "#2cd6c2", 0.6);
// };
//
// connectDivs("a", "b", "#2cd6c2", 0.6);
