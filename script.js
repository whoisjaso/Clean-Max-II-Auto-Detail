(function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector(".primary-nav");
  const requestForm = document.querySelector("[data-request-form]");
  const formMessage = document.querySelector("[data-form-message]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      primaryNav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    primaryNav.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        menuToggle.setAttribute("aria-expanded", "false");
        primaryNav.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      }
    });
  }

  function setMobileAccordions() {
    const boards = Array.from(document.querySelectorAll(".price-board-card"));
    if (!boards.length) return;
    const mobile = window.matchMedia("(max-width: 680px)").matches;
    boards.forEach((board, index) => {
      if (mobile) {
        board.open = index === 0;
      } else {
        board.open = true;
      }
    });
  }

  setMobileAccordions();

  if (requestForm && formMessage) {
    requestForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!requestForm.checkValidity()) {
        requestForm.reportValidity();
        return;
      }
      formMessage.textContent = "Thanks. Clean Max II received your request and will call or text you to confirm.";
      requestForm.reset();
    });
  }

  function runFallbackReveal() {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "none";
    });
  }

  function runGsapMotion() {
    if (prefersReducedMotion || !window.gsap) {
      runFallbackReveal();
      return;
    }

    const gsap = window.gsap;
    if (window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    gsap.from(".hero-copy > *", {
      y: 36,
      duration: 0.9,
      stagger: 0.1,
      ease: "power4.out"
    });

    gsap.from(".hero-visual", {
      scale: 0.94,
      duration: 1,
      ease: "power4.out",
      delay: 0.18
    });

    gsap.utils.toArray(".reveal").forEach((element) => {
      if (element.closest(".hero")) return;
      gsap.from(element, {
        y: 46,
        duration: 0.82,
        ease: "power4.out",
        scrollTrigger: window.ScrollTrigger
          ? {
              trigger: element,
              start: "top 88%",
              once: true
            }
          : undefined
      });
    });

    if (window.ScrollTrigger) {
      gsap.utils.toArray(".gallery-card img").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.92 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top 92%",
              end: "bottom 35%",
              scrub: true
            }
          }
        );
      });
    }
  }

  window.addEventListener("load", runGsapMotion, { once: true });
})();
