//*Buttons
const project__btn = document.querySelector("#project__btn");
const skills__btn = document.querySelector("#skills__btn");
const aboutMe__btn = document.querySelector("#aboutMe__btn");

const project1_btn = document.querySelector("#project1_btn");
const project2_btn = document.querySelector("#project2_btn");
const project3_btn = document.querySelector("#project3_btn");
const project4_btn = document.querySelector("#project4_btn");
const project5_btn = document.querySelector("#project5_btn");
const project6_btn = document.querySelector("#project6_btn");
// const project7_btn = document.querySelector("#project7_btn");

const arrow_back = Array.from(document.querySelectorAll(".arrow_back"));
//*Sections
const main__projects = document.querySelector(".main__projects");
const main__project = document.querySelector(".main__project");
const main__skills = document.querySelector(".main__skills");
const main__aboutMe = document.querySelector(".main__aboutme");

const projectInfo1 = document.querySelector("#projectInfo1");
const projectInfo2 = document.querySelector("#projectInfo2");
const projectInfo3 = document.querySelector("#projectInfo3");
const projectInfo4 = document.querySelector("#projectInfo4");
const projectInfo5 = document.querySelector("#projectInfo5");
const projectInfo6 = document.querySelector("#projectInfo6");
// const projectInfo7 = document.querySelector("#projectInfo7");

//*Navigation
project__btn.addEventListener("click", (e) => {
  //   e.event.preventDefault();
  main__projects.style.display = "flex";
  main__project.style.display = "none";
  main__skills.style.display = "none";
  main__aboutMe.style.display = "none";
});
skills__btn.addEventListener("click", (e) => {
  //   e.event.preventDefault();
  main__projects.style.display = "none";
  main__project.style.display = "none";
  main__skills.style.display = "block";
  main__aboutMe.style.display = "none";
});
aboutMe__btn.addEventListener("click", (e) => {
  //   e.event.preventDefault();
  main__projects.style.display = "none";
  main__project.style.display = "none";
  main__skills.style.display = "none";
  main__aboutMe.style.display = "block";
});
//*Projects Navigation
project1_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "flex";
  projectInfo2.style.display = "none";
  projectInfo3.style.display = "none";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "none";
  // projectInfo6.style.display = "none";
});
project2_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "flex";
  projectInfo3.style.display = "none";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "none";
  // projectInfo6.style.display = "none";
});
project3_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "none";
  projectInfo3.style.display = "flex";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "none";
  // projectInfo6.style.display = "none";
});
project4_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "none";
  projectInfo3.style.display = "none";
  projectInfo4.style.display = "flex";
  projectInfo5.style.display = "none";
  // projectInfo6.style.display = "none";
});
project5_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "none";
  projectInfo3.style.display = "none";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "flex";
  // projectInfo6.style.display = "none";
});
project6_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "none";
  projectInfo3.style.display = "none";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "none";
  projectInfo6.style.display = "flex";
});
// project7_btn.addEventListener("click", () => {
//   main__project.style.display = "block";
//   main__projects.style.display = "none";

//   projectInfo1.style.display = "none";
//   projectInfo2.style.display = "none";
//   projectInfo3.style.display = "none";
//   projectInfo4.style.display = "none";
//   projectInfo5.style.display = "none";
//   projectInfo6.style.display = "none";
//   projectInfo6.style.display = "flex";
// });

arrow_back.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e);

    main__projects.style.display = "flex";
    main__project.style.display = "none";

    projectInfo1.style.display = "none";
    projectInfo2.style.display = "none";
    projectInfo3.style.display = "none";
    projectInfo4.style.display = "none";
    projectInfo5.style.display = "none";
    projectInfo6.style.display = "none";
  });
});
