"use strict";

function progressBarAndCountNumber() {
  const progress = document.querySelectorAll(".progress");
  let count = 0;
  // You must put the maximum number in the MAX variable.
  let MAX = 100;

  let run = setInterval(() => {
    count++;
    progress.forEach((element) => {
      if (count <= element.dataset.progress) {
        element.parentElement.style.background = `conic-gradient( #c9f31d ${count}%, #212428 0)`;
        element.firstElementChild.textContent = `${count}%`;
      }
      if (count == MAX) {
        clearInterval(run);
      }
    });
  }, 20);
}

progressBarAndCountNumber();

///////////////////////////////////////////////////////////
function showContent(contentId) {
  // Hide all content
  var contents = document.querySelectorAll(".tab-content");
  contents.forEach(function (content) {
    content.classList.add("hidden");
  });

  // Remove active class from all buttons
  var buttons = document.querySelectorAll(".about_btn");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  // Show the selected content
  document.getElementById(contentId).classList.remove("hidden");

  // Highlight the active button
  event.target.classList.add("active");
}
