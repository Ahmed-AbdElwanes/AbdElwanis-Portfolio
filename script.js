// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    } else {
      window.location.href = targetId;
    }
  });
});

// check theme state
if (window.localStorage.getItem("theme")) {
  window.localStorage.getItem("theme") == "dark"
    ? document.getElementById("theme-body").classList.add("dark")
    : document.getElementById("theme-body").classList.remove("dark");
} else {
  // document.getElementById("theme-body").classList.toggle("dark");
}
// Dark/Light mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  // check theme state
  if (window.localStorage.getItem("theme") == "dark") {
    window.localStorage.setItem("theme", "light");
    document.getElementById("theme-body").classList.remove("dark");
  } else {
    window.localStorage.setItem("theme", "dark");
    document.getElementById("theme-body").classList.add("dark");
  }

  document
    .getElementById("theme-toggle")
    .querySelector("i")
    .classList.toggle("fa-moon");
  document
    .getElementById("theme-toggle")
    .querySelector("i")
    .classList.toggle("fa-sun");
});

// Burger menu toggle
document
  .querySelectorAll('[data-collapse-toggle="mobile-menu"]')
  .forEach((button) => {
    button.addEventListener("click", () => {
      const menu = document.getElementById("mobile-menu");
      menu.classList.toggle("hidden");
      menu.classList.toggle("active");
      const openIcon = button.querySelector("svg:not(.hidden)");
      const closeIcon = button.querySelector("svg.hidden");
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });
  });

// Add scroll animation for project and contact cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card, .contact-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card));
});

// Dark mode styles
document.head.insertAdjacentHTML(
  "beforeend",
  `
  <style>
    .dark {
      background-color: #1a202c;
      color: #e2e8f0;
    }
    .dark .bg-white {
      background-color:rgb(25, 30, 37);
    }
    .dark .bg-gray-100 {
      background-color:rgb(24, 36, 59);
    }
    .dark .bg-gray-50 {
      background-color:rgb(19, 20, 26);
    }
    .dark .text-gray-700 {
      color: #e2e8f0;
    }
    .dark .text-blue-900 {
      color: #63b3ed;
    }
    .dark .hover\\:text-orange-600:hover {
      color: #ed8936;
    }
    .dark .bg-orange-600 {
      background-color: #c05621;
    }
    .dark .hover\\:bg-orange-700:hover {
      background-color: #9c4221;
    }
    .dark .hover\\:bg-gray-200:hover {
      background-color:rgb(20, 20, 20);
    }
    .dark .skill:hover {
      background-color:rgb(29, 35, 44);
    }
  </style>
`
);

// particles-js
// particlesJS("particles-js", {
//   particles: {
//     number: { value: 80, density: { enable: true, value_area: 800 } },
//     color: { value: "#ffffff" },
//     shape: { type: "circle" },
//     opacity: { value: 0.5, random: true },
//     size: { value: 3, random: true },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1
//     },
//     move: { enable: true, speed: 2, direction: "none", random: false }
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: { enable: true, mode: "repulse" },
//       onclick: { enable: true, mode: "push" }
//     },
//     modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
//   },
//   retina_detect: true
// });
// particlesJS("footer-particles", {
//   particles: {
//     number: { value: 40, density: { enable: true, value_area: 800 } },
//     color: { value: "#FFD700" },
//     shape: { type: "star" },
//     opacity: { value: 0.6, random: true },
//     size: { value: 4, random: true },
//     line_linked: { enable: false },
//     move: { enable: true, speed: 3, direction: "none", random: true }
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: { enable: true, mode: "bubble" },
//       onclick: { enable: true, mode: "push" }
//     },
//     modes: {
//       bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8 },
//       push: { particles_nb: 3 }
//     }
//   },
//   retina_detect: true
// });
// particles-js
