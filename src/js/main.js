
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll(".stripe-section");
  const navLinks = document.querySelectorAll(".nav-content a");

  window.addEventListener("scroll", function() {
    const pos = window.scrollY;

    if (pos > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    let current = "";

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop - navbar.offsetHeight - 10;
      const sectionHeight = section.offsetHeight;

      if (pos >= sectionTop && pos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
      if (sections.length > 0) {
        current = sections[sections.length - 1].getAttribute("id");
      }
    }

    navLinks.forEach(function(link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const slides = Array.from(track.children);
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentIndex = 0;

  // Function to move track to target slide index
  const moveToSlide = (index) => {
    // Prevent index out-of-bounds by wrapping around
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  nextBtn.addEventListener("click", () => {
    moveToSlide(currentIndex + 1);
  });

  prevBtn.addEventListener("click", () => {
    moveToSlide(currentIndex - 1);
  });
});

// Modal trigger
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("open-modal-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");

  if (openModalBtn && closeModalBtn && modal) {
    openModalBtn.addEventListener("click", () => modal.classList.add("show"));
    closeModalBtn.addEventListener("click", () => modal.classList.remove("show"));

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  }
