const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });

    // burger animation
    hamburger.classList.toggle("toggle");
  });
};

navSlide();
