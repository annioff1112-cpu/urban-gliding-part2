/* ================= PREMIUM LOADER ================= */

window.addEventListener("load", function () {

  const loader = document.querySelector(".loader");

  // Smooth fade out
  loader.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transform = "scale(1.05)";

    setTimeout(() => {
      loader.style.display = "none";
    }, 800);

  }, 1200);

});


/* ================= PROGRAM MODAL SYSTEM ================= */

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.style.display = "flex";
  modal.style.opacity = "0";

  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);

  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.style.opacity = "0";

  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }, 200);
}


/* Close modal when clicking outside content */
window.addEventListener("click", function (e) {
  const modals = document.querySelectorAll(".program-modal");

  modals.forEach(modal => {
    if (e.target === modal) {
      closeModal(modal.id);
    }
  });
});


/* Close modal with ESC key */
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const modals = document.querySelectorAll(".program-modal");
    modals.forEach(modal => {
      if (modal.style.display === "flex") {
        closeModal(modal.id);
      }
    });
  }
});


/* ================= STAGGERED SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
  ".program-card, .gallery-item, .section-title, .hero-inner"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach((el, index) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = `all 0.8s ease ${index * 0.05}s`;

  revealObserver.observe(el);
});


/* ================= NAVBAR SCROLL EFFECT ================= */

window.addEventListener("scroll", function () {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 30) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    navbar.style.transition = "0.3s ease";
  } else {
    navbar.style.boxShadow = "none";
  }

});


/* ================= GALLERY CLICK EFFECT ================= */
/*
const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

  image.addEventListener("click", function () {

    image.style.transition = "transform 0.4s ease";
    image.style.transform = "scale(1.12) rotate(1deg)";

    setTimeout(() => {
      image.style.transform = "scale(1)";
    }, 350);

  });

});
*/