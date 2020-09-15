export function drawSVGLine(
  leftRef,
  rightRef,
  dimensions,
  strokeColor = 'lightseagreen',
  strokeWidth = 10,
  tension = 0.6,
) {
  function findAbsolutePosition(htmlElement) {
    let x = 0
    let y = 0
    for (let el = htmlElement; el != null; el = el.offsetParent) {
      x += el.offsetLeft
      y += el.offsetTop
    }
    return { x: x, y: y }
  }
  const leftPos = findAbsolutePosition(leftRef.current)
  const rightPos = findAbsolutePosition(rightRef.current)

  // Projects page is 3rd from the top
  const distanceFromTop = 3 * dimensions.height
  const x1 = leftPos.x
  const y1 = leftPos.y - distanceFromTop
  const x2 = rightPos.x
  const y2 = rightPos.y - distanceFromTop

  const delta = (x2 - x1) * tension
  const hx1 = x1 + delta
  const hy1 = y1
  const hx2 = x2 - delta
  const hy2 = y2
  const path = `M ${x1} ${y1} C ${hx1} ${hy1} ${hx2} ${hy2} ${x2} ${y2}`

  const namespace = 'http://www.w3.org/2000/svg'
  const shape = document.createElementNS(namespace, 'path')
  shape.setAttribute('d', path)
  shape.setAttribute('stroke', strokeColor)
  shape.setAttribute('class', 'path')
  shape.setAttribute('style', 'fill: none;')
  shape.setAttribute('stroke-width', strokeWidth)
  return shape
}

export function resetCanvases() {
  const carouselSlides = document.getElementsByClassName('carousel-item')
  for (let i = 0; i < carouselSlides.length; i++) {
    const svg = carouselSlides[i].getElementsByClassName('svg-canvas')[0]
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild)
    }
  }
}
