document.addEventListener("DOMContentLoaded", function () {
  var links = document.getElementsByClassName("link");

  function setActiveLink() {
    var scrollPosition = window.scrollY || window.pageYOffset;

    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var sectionId = link.getAttribute("href");
      var section = document.querySelector(sectionId);

      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition + 500
      ) {
        link.classList.add("active");
        break;
      }
    }
  }

  setActiveLink();

  window.addEventListener("scroll", setActiveLink);
});
