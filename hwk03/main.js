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

  brownObj = svgConDoc.getElementById("hand2");
});

// * Baker's dozen text
textSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = textSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("textSvgObj");
  svgObj.addEventListener("click", handleText);

  textObj = svgConDoc.getElementById("hand");
});

// * Guitar amp
ampSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = ampSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("ampSvgObj");
  svgObj.addEventListener("click", handleAmp);

  ampObj = svgConDoc.getElementById("hand");
});

// * Pink doughnut
doughnutPinkSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = doughnutPinkSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("pinkSvgObj");
  svgObj.addEventListener("click", handlePink);

  pinkObj = svgConDoc.getElementById("Path_804");
});

//
// * define micro-interactions
//

handleBrown = () => {
  alert("handleBrown called");
  if (handObj.style.opacity == 0.5) {
    handObj.style.opacity = 1;
  } else {
    handObj.style.opacity = 0.5;
  }
};

handleText = () => {
  alert("handleText called");
  if (hand2Obj.style.opacity == 0.5) {
    hand2Obj.style.opacity = 1;
  } else {
    hand2Obj.style.opacity = 0.5;
  }
};

handleAmp = () => {
  alert("handleAmp called");
  if (hand2Obj.style.opacity == 0.5) {
    hand2Obj.style.opacity = 1;
  } else {
    hand2Obj.style.opacity = 0.5;
  }
};

handlePink = () => {
  alert("handlePink called");
  if (hand2Obj.style.opacity == 0.5) {
    hand2Obj.style.opacity = 1;
  } else {
    hand2Obj.style.opacity = 0.5;
  }
};
