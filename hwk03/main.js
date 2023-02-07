//
// * Connect JS vars with SVG id's
//

const doughnutBrownSVG = document.getElementById("doughnutBrownSVG");
const textSVG = document.getElementById("textSVG");
const ampSVG = document.getElementById("ampSVG");
const doughnutPinkSVG = document.getElementById("doughnutPinkSVG");

// specific paths
let brownObj;
let textObj;
let ampObj;
let pinkObj;

//
// * addEvent listeners to every SVG
//

// * Brown doughnut
doughnutBrownSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = doughnutBrownSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("brownSvgObj");
  svgObj.addEventListener("click", handleBrown);

  // Define paths to interact with JS
  brownObj = svgConDoc.getElementById("hand2");
});

// * Baker's dozen text
textSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = textSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("textSvgObj");
  svgObj.addEventListener("click", handleText);

  // Define paths to interact with JS
  textObj = svgConDoc.getElementById("hand");
});

// * Guitar amp
ampSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = ampSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("ampSvgObj");
  svgObj.addEventListener("click", handleAmp);

  // Define paths to interact with JS
  ampObj = svgConDoc.getElementById("hand");
});

// * Pink doughnut
doughnutPinkSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = doughnutPinkSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("pinkSvgObj");
  svgObj.addEventListener("click", handlePink);

  // Define paths to interact with JS
  pinkObj = svgConDoc.getElementById("Path_804");
});

//
// * define micro-interactions
//

handleBrown = () => {
  // alert("handleBrown called");
  if (brownObj.style.opacity == 0.5) {
    brownObj.style.opacity = 1;
  } else {
    brownObj.style.opacity = 0.5;
  }
};

handleText = () => {
  // alert("handleText called");
  if (textObj.style.opacity == 0.5) {
    textObj.style.opacity = 1;
  } else {
    textObj.style.opacity = 0.5;
  }
};

handleAmp = () => {
  // alert("handleAmp called");
  if (ampObj.style.opacity == 0.5) {
    ampObj.style.opacity = 1;
  } else {
    ampObj.style.opacity = 0.5;
  }
};

handlePink = () => {
  // alert("handlePink called");
  if (pinkObj.style.opacity == 0.5) {
    pinkObj.style.opacity = 1;
  } else {
    pinkObj.style.opacity = 0.5;
  }
};
