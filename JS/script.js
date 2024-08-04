"use strict";

// accordion section

document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.addEventListener("click", function() {
    const answer = this.querySelector(".answer");
    const arrow = this.querySelector(".arrow");

    this.classList.toggle("active");
    arrow.classList.toggle("active");
  });
});
