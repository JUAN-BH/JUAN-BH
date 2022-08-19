let observer = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 1,
  rootMargin: "0px",
});
function loadImg(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.target.classList.add(entry.target.getAttribute("class_img"));
      entry.target.classList.remove("animate__zoomOut");
      entry.target.classList.add("animate__zoomIn");
      entry.target.style.opacity = "1";
      // entry.target.classList.remove("animate__fadeOut");
    } else {
      // entry.target.classList.remove("animate__bounceIn");
      // entry.target.classList.add("animate__zoomOut");
      // entry.target.classList.remove("animate__zoomIn");
      // // entry.target.classList.remove("animate__fadeIn");
      // entry.target.style.opacity = "0";
    }
  });
}

allProjects.forEach((element) => {
  observer.observe(element);
});
// observer.observe(allProjects);
// observer.observe(allProjects, "project--playstation");
// observer.observe(allProjects, "project--escuelaMusical");
// observer.observe(allProjects, "project--loudRiot");
