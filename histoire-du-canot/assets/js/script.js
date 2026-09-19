// Variable
let nSlideNeed = 1;
let nSlideCurrent;
let bCanMoveForward = true;
let bCanMoveBackward = true;

// Backgrounds
const oBg1 = document.getElementById("bg-1");

// Assets
const oAssest1 = document.getElementById("title-1");

// Texts
const oTableMatieres = document.getElementById("table-matieres");

// Movements
document.addEventListener("keydown", function (evt) {
  if (evt.code === "ArrowLeft" && bCanMoveBackward == true) {
    console.log("LeftKey");
    nSlideNeed = nSlideNeed - 1;
    // Slide Movement
    if (nSlideNeed === 1 && nSlideCurrent != 1) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide1();
    } else if (nSlideNeed === 2 && nSlideCurrent != 2) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide2();
    } else if (nSlideNeed === 3 && nSlideCurrent != 3) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide3();
    } else if (nSlideNeed === 4 && nSlideCurrent != 4) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide4();
    } else if (nSlideNeed === 5 && nSlideCurrent != 5) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide5();
    }
  }
  if (evt.code === "ArrowRight" && bCanMoveForward == true) {
    console.log("RightKey");
    nSlideNeed = nSlideNeed + 1;
    // Slide Movement
    if (nSlideNeed === 1 && nSlideCurrent != 1) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide1();
    } else if (nSlideNeed === 2 && nSlideCurrent != 2) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide2();
    } else if (nSlideNeed === 3 && nSlideCurrent != 3) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide3();
    } else if (nSlideNeed === 4 && nSlideCurrent != 4) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide4();
    } else if (nSlideNeed === 5 && nSlideCurrent != 5) {
      bCanMoveForward = false;
      bCanMoveBackward = false;
      slide5();
    }
  }
});

// Main
function slide1() {
  oAssest1.style.left = "-980px";

  nSlideCurrent = 1;
  bCanMoveForward = true;
  oTableMatieres.style.left = "-2180px";
}

// Table des matière
function slide2() {
  oAssest1.style.left = "980px";
  oAssest1.style.display = "initial";
  oTableMatieres.style.left = "0";

  document.getElementById("tm-intro").style.display = "block";
  document.getElementById("tm-intro").style.right = "0";
  document.getElementById("tm-intro").style.top = "0";
  document.getElementById("tm-intro").style.position = "relative";
  document.getElementById("tm-intro").style.fontSize = "96px";

  // Origines
  document.getElementById("tm-origines").style.display = "block";
  document.getElementById("tm-origines").style.right = "0";
  document.getElementById("tm-origines").style.top = "0";
  document.getElementById("tm-origines").style.position = "relative";
  document.getElementById("tm-origines").style.fontSize = "96px";
  // Fab
  document.getElementById("tm-fab").style.color = "rgba(0,0,0,0.6)";
  document.getElementById("tm-fab").style.display = "block";
  document.getElementById("tm-fab").style.right = "0";
  document.getElementById("tm-fab").style.top = "0";
  document.getElementById("tm-fab").style.position = "relative";
  document.getElementById("tm-fab").style.fontSize = "96px";

  // Evo
  document.getElementById("tm-evo").style.color = "rgba(0,0,0,0.6)";
  document.getElementById("tm-evo").style.display = "block";
  document.getElementById("tm-evo").style.right = "0";
  document.getElementById("tm-evo").style.top = "0";
  document.getElementById("tm-evo").style.position = "relative";
  document.getElementById("tm-evo").style.fontSize = "96px";

  // Conclusion
  document.getElementById("tm-conclusion").style.color = "rgba(0,0,0,0.6)";
  document.getElementById("tm-conclusion").style.display = "block";
  document.getElementById("tm-conclusion").style.right = "0";
  document.getElementById("tm-conclusion").style.top = "0";
  document.getElementById("tm-conclusion").style.position = "relative";
  document.getElementById("tm-conclusion").style.fontSize = "96px";

  document.getElementById("intro-text").style.left = "-1000px";

  nSlideCurrent = 2;
  bCanMoveForward = true;
  bCanMoveBackward = true;
}

// Intro
function slide3() {
  oAssest1.style.left = "1920px";

  document.getElementById("tm-intro").style.right = "-50vw";
  document.getElementById("tm-intro").style.top = "-50px";
  document.getElementById("tm-intro").style.fontSize = "125px";

  document.getElementById("tm-origines").style.right = "-105vw";
  document.getElementById("tm-fab").style.right = "-105vw";
  document.getElementById("tm-evo").style.right = "-105vw";
  document.getElementById("tm-conclusion").style.right = "-105vw";

  document.getElementById("intro-text").style.display = "initial";

  document.getElementById("buble-frene").style.display = "none";
  document.getElementById("buble-roots").style.display = "none";
  document.getElementById("buble-birch").style.display = "none";
  document.getElementById("buble-resin").style.display = "none";
  document.getElementById("buble-leather").style.display = "none";

  setTimeout(slide3_1, 500);
  function slide3_1() {
    document.getElementById("intro-text").style.left = "0";

    nSlideCurrent = 3;
    bCanMoveForward = true;
    bCanMoveBackward = true;
  }
}

// Origines
function slide4() {
  document.getElementById("intro-text").style.left = "-1000px";
  document.getElementById("tm-intro").style.right = "-105vw";
  document.getElementById("tm-intro").style.position = "absolute";
  document.getElementById("tm-intro").style.display = "block";
  oAssest1.style.display = "none";

  document.getElementById("tm-origines").style.right = "-50vw";
  document.getElementById("tm-origines").style.zIndex = "1";

  document.getElementById("bg-2").style.top = "1080px";
  document.getElementById("bg-2").style.display = "inline";
  document.getElementById("bg-2").style.zIndex = "1";
  document.getElementById("tm-fab").style.display = "none";
  document.getElementById("tm-evo").style.display = "none";
  document.getElementById("tm-conclusion").style.display = "none";

  // Origines
  document.getElementById("tm-origines").style.top = "-50px";
  document.getElementById("tm-origines").style.position = "absolute";
  document.getElementById("tm-origines").style.fontSize = "125px";
  // Fab
  document.getElementById("tm-fab").style.top = "-50px";
  document.getElementById("tm-evo").style.right = "-105vw";
  document.getElementById("tm-fab").style.color = "rgba(255,255,255,0.6)";
  document.getElementById("tm-fab").style.display = "initial";
  document.getElementById("tm-fab").style.position = "absolute";
  document.getElementById("tm-fab").style.fontSize = "125px";

  // Evo
  document.getElementById("tm-evo").style.top = "-50px";
  document.getElementById("tm-evo").style.right = "-105vw";
  document.getElementById("tm-evo").style.position = "absolute";
  document.getElementById("tm-evo").style.fontSize = "125px";

  // Conclusion
  document.getElementById("tm-conclusion").style.right = "-105vw";
  document.getElementById("tm-conclusion").style.top = "-50px";
  document.getElementById("tm-evo").style.position = "absolute";
  document.getElementById("tm-conclusion").style.fontSize = "125px";

  // Buble
  document.getElementById("buble-birch").style.display = "initial";
  document.getElementById("buble-frene").style.display = "initial";
  document.getElementById("buble-leather").style.display = "initial";
  document.getElementById("buble-resin").style.display = "initial";
  document.getElementById("buble-roots").style.display = "initial";

  document.getElementById("bg-1-bottom").style.top = "0";
  document.getElementById("bg-1-bottom").style.display = "inline";

  document.getElementById("buble-frene").style.opacity = "0";
  document.getElementById("buble-roots").style.opacity = "0";
  document.getElementById("buble-birch").style.opacity = "0";
  document.getElementById("buble-resin").style.opacity = "0";
  document.getElementById("buble-leather").style.opacity = "0";

  document.getElementById("tm-fab").style.right = "-105vw";

  nSlideCurrent = 4;
  bCanMoveForward = true;
  bCanMoveBackward = true;
}

// Fabrication
function slide5() {
  document.getElementById("tm-intro").style.display = "none";
  document.getElementById("bg-2").style.top = "0";
  document.getElementById("tm-origines").style.zIndex = "0";

  document.getElementById("bg-1-bottom").style.top = "-1080px";

  setTimeout(slide5_1, 500);
  function slide5_1() {
    // Fab
    document.getElementById("tm-fab").style.right = "-50vw";

    setTimeout(slide5_2, 500);
  }
  function slide5_2() {
    document.getElementById("buble-frene").style.opacity = "1";
    setTimeout(slide5_3, 500);
  }
  function slide5_3() {
    document.getElementById("buble-roots").style.opacity = "1";
    setTimeout(slide5_4, 500);
  }
  function slide5_4() {
    document.getElementById("buble-birch").style.opacity = "1";
    setTimeout(slide5_5, 500);
  }
  function slide5_5() {
    document.getElementById("buble-resin").style.opacity = "1";
    setTimeout(slide5_6, 500);
  }
  function slide5_6() {
    document.getElementById("buble-leather").style.opacity = "1";

    nSlideCurrent = 5;
    bCanMoveBackward = true;
  }
}
