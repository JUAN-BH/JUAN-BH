import { Header } from "../templates/header.js";
import projectsHome from "../pages/projects.js";
import { projectSolo } from "../pages/projectSolo.js";
import { skills } from "../pages/skills.js";
import { aboutMe } from "../pages/aboutMe.js";
import resolveRoutes from "../utils/resolveRoutes.js";
import { observerProjects } from "../utils/IO.js";
const $ = (element) => document.querySelector(element);

const routes = {
  "/": projectsHome,
  "/project": projectSolo,
  skills: skills,
  aboutme: aboutMe,
};

const router = async () => {
  const header = null || $(".Header");
  const content = null || $(".Main");

  header.innerHTML = await Header();
  let hash = location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : console.log("Error404");
  content.innerHTML = await render();
  if (route == "/") {
    const project = document.querySelectorAll(".projects--projectItem");
    for (let i = 0; i < project.length; i++) {
      observerProjects.observe(project[i]);
    }
  }
};

export default router;
