const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allsections = document.querySelectorAll(".main-content");

function PageTransitions() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList = currentBtn[0].className.replace(
        "active-btn",
        " "
      );
      this.className += " active-btn";
    });
  }

  //active sections
  // initialSection = allsections[0]; // get the first section
  //initialSection.classList.add("active-btn"); // add "active" class to the first section
  allsections.forEach((section) => {
    section.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      if (id) {
        sectBtns.forEach((btn) => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide other sections
        sections.forEach((section) => {
          section.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
  });
  //toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransitions();
