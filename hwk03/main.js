//
// * Connect JS vars with SVG id's
//
const doughnutBrownSVG = document.getElementById("doughnutBrownSVG");
const textSVG = document.getElementById("textSVG");
const ampSVG = document.getElementById("ampSVG");
const doughnutPinkSVG = document.getElementById("doughnutPinkSVG");

// specific paths
let brownSvgObj;
let brownSprinklesObj
let textObj;
let ampObj;
let pinkObj;

//
// * addEventListener for every SVG
//

// * Brown doughnut
doughnutBrownSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = doughnutBrownSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("brownSvgObj");
  svgObj.addEventListener("click", handleBrown);

  // Define paths to interact with JS
  brownSvgObj = svgConDoc.getElementById("brownFill");
  brownSprinklesObj = svgConDoc.querySelector('#sprinkles0');
  s1 = svgConDoc.querySelector('#sprinkles1');
  s2 = svgConDoc.querySelector('#sprinkles2');
  s3 = svgConDoc.querySelector('#sprinkles3');
  s4 = svgConDoc.querySelector('#sprinkles4');
  s5 = svgConDoc.querySelector('#sprinkles5');
  s6 = svgConDoc.querySelector('#sprinkles6');
  s7 = svgConDoc.querySelector('#sprinkles7');
  s8 = svgConDoc.querySelector('#sprinkles8');
  s9 = svgConDoc.querySelector('#sprinkles9');
});

// * Baker's dozen text
textSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = textSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("textSvgObj");
  svgObj.addEventListener("click", handleText);

  // Define paths to interact with JS
  textObj = svgConDoc.getElementById("textObj");
});

// * Guitar amp
ampSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = ampSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("ampSvgObj");
  svgObj.addEventListener("click", handleAmp);

  // Define paths to interact with JS
  ampObj = svgConDoc.getElementById("ampObj");
});

// * Pink doughnut
doughnutPinkSVG.addEventListener("load", function () {
  // Put SVG content xml document into JS variable
  const svgConDoc = doughnutPinkSVG.contentDocument;

  // Put SVG ID in JS variable
  const svgObj = svgConDoc.getElementById("pinkSvgObj");
  svgObj.addEventListener("click", handlePink);

  // Define paths to interact with JS
  pinkObj = svgConDoc.getElementById("Path_807");
});

//
// * define micro-interactions
//

handleBrown = () => {
  // alert("handleBrown called");
  if (brownSvgObj && brownSprinklesObj) {
    brownSvgObj.classList.remove("pop");
    brownSprinklesObj.classList.remove("popper");
    s1.classList.remove("popper");
    s2.classList.remove("popper");
    s3.classList.remove("popper");
    s4.classList.remove("popper");
    s5.classList.remove("popper");
    s6.classList.remove("popper");
    s7.classList.remove("popper");
    s8.classList.remove("popper");
    s9.classList.remove("popper");
  }
  setTimeout(() => {
    brownSvgObj.classList.add('pop');
    brownSprinklesObj.classList.add('popper');
    s1.classList.toggle("popper");
    s2.classList.toggle("popper");
    s3.classList.toggle("popper");
    s4.classList.toggle("popper");
    s5.classList.toggle("popper");
    s6.classList.toggle("popper");
    s7.classList.toggle("popper");
    s8.classList.toggle("popper");
    s9.classList.toggle("popper");
  }, 100);
};


handleText = () => {
  // alert("handleText called");
  textSVG.contentDocument.getElementById("textSvgObj").classList.remove("spin");
  setTimeout(() => {
    textSVG.contentDocument.getElementById("textSvgObj").classList.add("spin");
  }, 100);
};

handleAmp = () => {
  // alert("handleAmp called");
  ampSVG.contentDocument.getElementById("ampSvgObj").classList.remove("scaleme");
  setTimeout(() => {
    ampSVG.contentDocument.getElementById("ampSvgObj").classList.add("scaleme");
  }, 100);
};

handlePink = () => {
  // alert("handlePink called");
  pinkObj.classList.remove("yellow");
  pinkObj.classList.remove("pink");
  setTimeout(() => {
    pinkObj.contentDocument.getElementById("pinkSvgObj").classList.add("yellow");
    pinkObj.contentDocument.getElementById("pinkSvgObj").classList.add("pink");
  }, 100);
};

