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
  // projectInfo3.style.display = "none";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "none";
  projectInfo6.style.display = "none";
  projectInfo7.style.display = "none";
});
project2_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "flex";
  // projectInfo3.style.display = "none";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "none";
  projectInfo6.style.display = "none";
  projectInfo7.style.display = "none";
});
// project3_btn.addEventListener("click", () => {
//   main__project.style.display = "block";
//   main__projects.style.display = "none";

//   projectInfo1.style.display = "none";
//   projectInfo2.style.display = "none";
//   projectInfo3.style.display = "flex";
//   projectInfo4.style.display = "none";
//   projectInfo5.style.display = "none";
//   projectInfo6.style.display = "none";
//   projectInfo7.style.display = "none";
// });
project4_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "none";
  // projectInfo3.style.display = "none";
  projectInfo4.style.display = "flex";
  projectInfo5.style.display = "none";
  projectInfo6.style.display = "none";
  projectInfo7.style.display = "none";
});
project5_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "none";
  // projectInfo3.style.display = "none";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "flex";
  projectInfo6.style.display = "none";
  projectInfo7.style.display = "none";
});
project6_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "none";
  // projectInfo3.style.display = "none";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "none";
  projectInfo6.style.display = "flex";
  projectInfo7.style.display = "none";
});
project7_btn.addEventListener("click", () => {
  main__project.style.display = "block";
  main__projects.style.display = "none";

  projectInfo1.style.display = "none";
  projectInfo2.style.display = "none";
  // projectInfo3.style.display = "none";
  projectInfo4.style.display = "none";
  projectInfo5.style.display = "none";
  projectInfo6.style.display = "none";
  projectInfo7.style.display = "flex";
});

// project8_btn.addEventListener("click", () => {
//   main__project.style.display = "block";
//   main__projects.style.display = "none";

//   projectInfo1.style.display = "none";
//   projectInfo2.style.display = "none";
//   projectInfo3.style.display = "none";
//   projectInfo4.style.display = "none";
//   projectInfo5.style.display = "none";
//   projectInfo6.style.display = "none";
//   projectInfo7.style.display = "none";
//   projectInfo8.style.display = "flex";
// });

arrow_back.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e);

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
