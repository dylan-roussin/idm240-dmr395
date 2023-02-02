// Connect JS vars with SVG id's

const hsObjSVG = document.getElementById("hsSVG");

let svgConDoc; // SVG content document
let shieldObj; // Shield SVG path
let handObj; // Hand SVG path
let svgObj; // SVG object in content document

hsObjSVG.addEventListener("load", function () {
  // * Put SVG content xml document into JS variable
  svgConDoc = hsObjSVG.contentDocument;

  // * Put SVG shield ID in JS variable
  // shieldObj = svgConDoc.getElementById("shield");
  // shieldObj.addEventListener("click", toggleHandOpacity);

  svgObj = svgConDoc.getElementById("svgObj");
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
