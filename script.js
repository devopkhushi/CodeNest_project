const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const form = document.querySelector(".enroll-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you! Your enquiry has been submitted successfully.");
  form.reset();
});
