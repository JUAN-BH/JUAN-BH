const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

function loadImg(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.target.classList.remove("animate__zoomOut");
      entry.target.classList.add("animate__zoomIn");
      entry.target.style.opacity = "1";
    } else {
      // entry.target.classList.remove("animate__bounceIn");
      // entry.target.classList.add("animate__zoomOut");
      // entry.target.classList.remove("animate__zoomIn");
      // // entry.target.classList.remove("animate__fadeIn");
      // entry.target.style.opacity = "0";
    }
  });
}

export const observerProjects = new IntersectionObserver(loadImg, options);
