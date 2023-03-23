const slider = document.querySelector(".slider"),
  slides = document.querySelector(".slides"),
  slider_nav = document.querySelector(".slider__nav"),
  numberOfSlides = slides.childElementCount;

let slideNumber = 0, auto = 0;

const desactivar = () => {
  Array.from(slides.children).forEach(element => {
    element.classList.remove("active")
  });
  Array.from(slider_nav.children).forEach(element => {
    element.classList.remove("active");
  });
}
const activar = () => {
  slides.children[slideNumber].classList.add("active");
  slider_nav.children[slideNumber].classList.add("active");
}
const nextSlide = () => {
  slideNumber++;
  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }
  desactivar();
  activar()
}

const autoSlide = () => {
  auto = setInterval(() => {
    nextSlide();
  }, 5000);
}

slider.addEventListener("mouseover", () => {
  clearInterval(auto);
});
slider.addEventListener("mouseout", () => {
  autoSlide();
});

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") === "button_toggle") {
    menu.classList.toggle("mostrar");
  }
  if (e.target.getAttribute("data-name") === "slide-number") {
    desactivar();
    e.target.classList.add("active");
    slides.children[e.target.getAttribute("data-value")].classList.add("active");
    slideNumber = Number(e.target.getAttribute("data-value"));
  }
});
