(function () {
  function setLang(lang) {
    document.documentElement.setAttribute("data-active-lang", lang);
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.setlang === lang);
    });
    try {
      localStorage.setItem("dromu-lang", lang);
    } catch (e) {
      /* private browsing etc. — ignore */
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = "ja";
    try {
      saved = localStorage.getItem("dromu-lang") || "ja";
    } catch (e) {
      /* ignore */
    }
    setLang(saved);

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.dataset.setlang);
      });
    });
  });
})();
