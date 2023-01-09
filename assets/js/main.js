"use strict";

//copy right actual year
const paragraph = `
 <p>
  Copyright
  National ${new Date().getFullYear()} Geographic Society. All rights reserved
</p>
`;
document.getElementById("copyright").innerHTML = paragraph;

//NAVBAR
function navMenu() {
  let nav = document.getElementById("myLinks");
  let bars = document.getElementsByClassName("fa-bars");
  let close = document.getElementsByClassName("fa-x");
  if (nav.classList.contains("hideNav")) {
    nav.style.display = "block";
    nav.classList.add("showNav");
    nav.classList.remove("hideNav");
    close[0].classList.add("open");
    setTimeout(() => {
      bars[0].style.display = "none";
      close[0].style.display = "block";
    }, "1000");
  } else {
    nav.classList.add("hideNav");
    nav.classList.remove("showNav");
    bars[0].classList.add("open");
    setTimeout(() => {
      nav.style.display = "none";
      close[0].style.display = "none";
      bars[0].style.display = "block";
    }, "1000");
  }
}
