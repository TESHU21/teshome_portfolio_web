"use strict";

var sections = document.querySelectorAll(".section");
var sectBtns = document.querySelectorAll(".controlls");
var sectBtn = document.querySelectorAll(".control");
var allsections = document.querySelectorAll(".main-content");

function PageTransitions() {
  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      var currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList = currentBtn[0].className.replace("active-btn", " ");
      this.className += " active-btn";
    });
  } //active sections
  // initialSection = allsections[0]; // get the first section
  //initialSection.classList.add("active-btn"); // add "active" class to the first section


  allsections.forEach(function (section) {
    section.addEventListener("click", function (e) {
      var id = e.target.dataset.id;

      if (id) {
        sectBtns.forEach(function (btn) {
          btn.classList.remove("active");
        });
        e.target.classList.add("active"); // hide other sections

        sections.forEach(function (section) {
          section.classList.remove("active");
        });
        var element = document.getElementById(id);
        element.classList.add("active");
      }
    });
  }); //toggle theme

  var themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", function () {
    var element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransitions();