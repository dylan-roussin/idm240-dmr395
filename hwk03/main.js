// Connect JS vars with SVG id's

const doughnutBrownSVG = document.getElementById("doughnutBrownSVG");
const textSVG = document.getElementById("textSVG");
const ampSVG = document.getElementById("ampSVG");
const doughnutPinkSVG = document.getElementById("doughnutPinkSVG");

let svgConDoc; // SVG content document
let shieldObj; // Shield SVG path
let handObj; // Hand SVG path
let svgObj; // SVG object in content document

doughnutBrownSVG.addEventListener("load", function () {
  // * Put SVG content xml document into JS variable
  svgConDoc = doughnutBrownSVG.contentDocument;

  // * Put SVG shield ID in JS variable
  svgObj = svgConDoc.getElementById("brownSvgObj");
  svgObj.addEventListener("click", toggleHandOpacity);

  handObj = svgConDoc.getElementById("hand");
});

toggleHandOpacity = () => {
  // alert("toggleHandOpacity called");
  if (handObj.style.opacity == 0.5) {
    handObj.style.opacity = 1;
  } else {
    handObj.style.opacity = 0.5;
  }
};
