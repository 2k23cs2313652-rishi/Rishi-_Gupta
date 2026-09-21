document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     LOADER
  ===================================================== */

  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {

      setTimeout(() => {

          loader.style.opacity = "0";

          loader.style.visibility = "hidden";

      }, 900);

  });



  /* =====================================================
     MOBILE MENU
  ===================================================== */

  const menuButton =
      document.querySelector(".menu-toggle");

  const navLinks =
      document.querySelector(".nav-links");


  menuButton.addEventListener("click", () => {

      navLinks.classList.toggle("open");

  });


  document
      .querySelectorAll(".nav-links a")
      .forEach(link => {

          link.addEventListener("click", () => {

              navLinks.classList.remove("open");

          });

      });



  /* =====================================================
     SCROLL REVEAL
  ===================================================== */

  const revealElements =
      document.querySelectorAll(".reveal");


  const revealObserver =
      new IntersectionObserver(
          (entries, observer) => {

              entries.forEach(entry => {

                  if (entry.isIntersecting) {

                      entry.target.classList.add(
                          "visible"
                      );

                      observer.unobserve(
                          entry.target
                      );

                  }

              });

          },
          {
              threshold: 0.12
          }
      );


  revealElements.forEach(element => {

      revealObserver.observe(element);

  });



  /* =====================================================
     ACTIVE NAVIGATION
  ===================================================== */

  const sections =
      document.querySelectorAll(
          "main section[id]"
      );

  const navigationLinks =
      document.querySelectorAll(
          ".nav-links a"
      );


  const sectionObserver =
      new IntersectionObserver(
          entries => {

              entries.forEach(entry => {

                  if (!entry.isIntersecting)
                      return;


                  navigationLinks.forEach(link => {

                      link.classList.remove(
                          "active"
                      );

                  });


                  const activeLink =
                      document.querySelector(
                          `.nav-links a[href="#${entry.target.id}"]`
                      );


                  if (activeLink) {

                      activeLink.classList.add(
                          "active"
                      );

                  }

              });

          },
          {
              rootMargin:
                  "-35% 0px -55% 0px"
          }
      );


  sections.forEach(section => {

      sectionObserver.observe(section);

  });



  /* =====================================================
     CURSOR GLOW
  ===================================================== */

  if (
      window.matchMedia(
          "(pointer:fine)"
      ).matches
  ) {

      const glow =
          document.createElement("div");


      glow.style.cssText = `

          position: fixed;

          width: 180px;

          height: 180px;

          border-radius: 50%;

          pointer-events: none;

          z-index: -1;

          filter: blur(65px);

          background:
              rgba(156,108,255,.08);

          transform:
              translate(-50%, -50%);

          left: 50%;

          top: 50%;

          transition:
              left .12s ease,
              top .12s ease;

      `;


      document.body.appendChild(glow);


      window.addEventListener(
          "pointermove",
          event => {

              glow.style.left =
                  event.clientX + "px";

              glow.style.top =
                  event.clientY + "px";

          }
      );

  }



  /* =====================================================
     TYPING EFFECT
  ===================================================== */

  const terminalLine =
      document.querySelector(
          ".terminal-content p:last-child"
      );


  if (terminalLine) {

      setInterval(() => {

          const cursor =
              terminalLine.querySelector(
                  ".cursor"
              );

          if (cursor) {

              cursor.style.opacity =
                  cursor.style.opacity === "0"
                      ? "1"
                      : "0";

          }

      }, 500);

  }



  /* =====================================================
     SMOOTH PROJECT CARD EFFECT
  ===================================================== */

  const projectCards =
      document.querySelectorAll(
          ".project-card"
      );


  projectCards.forEach(card => {

      card.addEventListener(
          "mousemove",
          event => {

              const rect =
                  card.getBoundingClientRect();


              const x =
                  event.clientX - rect.left;

              const y =
                  event.clientY - rect.top;


              const rotateX =
                  ((y / rect.height) - .5) * -2;

              const rotateY =
                  ((x / rect.width) - .5) * 2;


              card.style.transform =
                  `perspective(900px)
                   rotateX(${rotateX}deg)
                   rotateY(${rotateY}deg)
                   translateY(-5px)`;

          }
      );


      card.addEventListener(
          "mouseleave",
          () => {

              card.style.transform = "";

          }
      );

  });



  /* =====================================================
     YEAR
  ===================================================== */

  const copyright =
      document.querySelector(
          ".copyright"
      );


  if (copyright) {

      copyright.textContent =
          `© ${new Date().getFullYear()} Rishi Gupta`;

  }

});