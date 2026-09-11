document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const menuLinks = document.querySelector(".menu-links");

  // =========================================
  // MENU MOBILE
  // =========================================

  if (menuToggle && menuLinks) {

    menuToggle.addEventListener("click", () => {

      menuLinks.classList.toggle("open");

      const isOpen = menuLinks.classList.contains("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    // Fecha o menu ao clicar em um link

    menuLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        menuLinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  // =========================================
  // SELETOR DE IDIOMA
  // =========================================

  const languageSelector =
    document.querySelector(".menu-language");

  const languageCurrent =
    document.querySelector(".language-current");

  if (languageSelector && languageCurrent) {

    languageCurrent.addEventListener("click", (event) => {

      event.stopPropagation();

      languageSelector.classList.toggle("open");

    });


    // Fecha ao clicar fora

    document.addEventListener("click", () => {

      languageSelector.classList.remove("open");

    });

  }


  // =========================================
  // IDIOMA ATUAL
  // =========================================

  const currentLang =
    localStorage.getItem("lang") || "en";

  const currentFlag =
    document.querySelector(".language-current img");

  const currentText =
    document.querySelector(
      ".language-current span:not(.language-arrow)"
    );

  
  // =========================================
  // PEGA A BANDEIRA
  // =========================================
  const languageOptions = document.querySelectorAll(
    ".language-options button"
    );

    languageOptions.forEach(option => {

    const optionText = option.querySelector("span");
    const optionFlag = option.querySelector("img");

    if (!optionText || !optionFlag) return;

    const optionLang =
        option.getAttribute("onclick")?.match(/setLang\('(.+?)'\)/)?.[1];

    if (optionLang === currentLang) {

        currentText.textContent = optionText.textContent;
        currentFlag.src = optionFlag.src;

    }

    });

});