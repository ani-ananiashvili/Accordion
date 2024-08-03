"use strict";

// accordion section

document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const answer = accordion.querySelector(".answer");
    const arrow = accordion.querySelector(".arrow");

    accordion.classList.toggle("active");
    arrow.classList.toggle("active");
  });
});
