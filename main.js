document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navbar = document.querySelector(".navbar");

  hamburgerMenu.addEventListener("click", function () {
    navbar.classList.toggle("active");
    // Toggle hamburger menu icon
    const icon = this.querySelector("i");
    if (navbar.classList.contains("active")) {
      icon.classList.remove("bx-menu");
      icon.classList.add("bx-x");
    } else {
      icon.classList.remove("bx-x");
      icon.classList.add("bx-menu");
    }
  });

  // Close navbar when clicking on a link
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      const icon = hamburgerMenu.querySelector("i");
      icon.classList.remove("bx-x");
      icon.classList.add("bx-menu");
    });
  });

  // Typing animation
  const typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Designer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});