export default function openWebsite() {
  const animationDiv = document.getElementById("animation-div");
  animationDiv.classList.add("animation-box");
  document.getElementById("open-web").remove();
  const elements = document.getElementsByClassName("remove");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  setTimeout(function () {
    document.getElementById("starting-div").remove();
    document.getElementById("animation-div").remove();
  }, 2000);
}
