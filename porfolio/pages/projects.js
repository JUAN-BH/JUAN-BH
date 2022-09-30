import { projectsArr } from "../utils/projectsClass.js";
import { observerProjects } from "../utils/IO.js";
const projectsHome = () => {
  const view = document.createElement("div");

  const sectionProjects = document.createElement("section");
  sectionProjects.classList.add("main__projects");
  sectionProjects.innerHTML = " ";
  projectsArr.map((project) => {
    const projectItem = document.createElement("article");
    projectItem.classList.add("projects--projectItem", "animate__animated");
    projectItem.style.background = `url('${project.imgUrl}') center/cover no-repeat`;
    const blur = document.createElement("div");
    blur.classList.add("projectItem__blur");
    const projectInfo = document.createElement("div");
    projectInfo.classList.add("projectItem__info");
    const projectName = document.createElement("h2");
    projectName.innerText = project.name.split("_").join(" ");
    const technologiesContainer = document.createElement("div");
    technologiesContainer.classList.add("tecnologies");
    project.technologies.map((e) => {
      const technology = document.createElement("span");
      technology.classList.add("technology");
      technology.style.background = `url("${e}") center/cover no-repeat`;
      technologiesContainer.appendChild(technology);
    });
    const btnViewMore = document.createElement("a");
    btnViewMore.innerText = "View More";
    btnViewMore.classList.add("projectItem__info--button");
    btnViewMore.href = `#/project/${project.name}`;

    projectInfo.append(projectName, technologiesContainer, btnViewMore);
    projectItem.append(blur, projectInfo);
    sectionProjects.append(projectItem);
    view.appendChild(sectionProjects);
    // observerProjects.observe(projectItem);
  });
  return view.innerHTML;
};
export default projectsHome;
