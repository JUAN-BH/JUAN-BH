import { projectsArr } from "../utils/projectsClass.js";
export const projectSolo = () => {
  // const header = document.querySelector(".Header");
  // header.style.display = "none";
  // const main = document.querySelector(".Main");
  // main.classList.toggle("project_solo");
  const projectHash = location.hash.split("/")[2];
  const projectToRender = projectsArr.find(
    (project) => project.name === projectHash
  );
  const view = `
  <section class="main__project">
    <section class="project__projectItem animate__animated animate__fadeIn" id="projectInfo1">
        <h1 class="projectItem__title">${projectToRender.name
          .split("_")
          .join(" ")}</h1>
        <img class="projectItem" src="${projectToRender.imgUrl}" alt="${
    projectToRender.name
  }" />
        <div class="projectItem__subtitle">
            <a class="arrow_back" href="/"></a>
            <h2>Description</h2>
        </div>
        <p class="projectItem__body">
        ${projectToRender.description}
        </p>
        <div class="projectItem__buttons">
            <a href="${projectToRender.links.github}" target="_blank">Page</a>
            <a href="${projectToRender.links.page}" target="_blank">GitHub</a>
        </div>
    </section>
  </section>
  `;
  return view;
};
