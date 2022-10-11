class Projects {
  constructor({
    name,
    imgUrl,
    technologies = [],
    description,
    links = {},
  } = {}) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.technologies = technologies;
    this.description = description;
    this.links = links;
  }
}

const html = "/porfolio/assets/img/HTML_LOGO.svg";
const css = "/porfolio/assets/img/CSS_LOGO.svg";
const js = "/porfolio/assets/img/JS_LOGO.svg";
const sass = "/porfolio/assets/img/sass.svg";
const webpack = "/porfolio/assets/img/webpack.svg";
const react = "/porfolio/assets/icons/react.svg";

const batataProjectxx = new Projects({
  name: "Batatabit",
  imgUrl: "/porfolio/assets/img/batata_back.PNG",
  technologies: [html, css],
  description:
    "This project was a HTML and CSS challenge usigin the mobile first design there for is a responsive page, is the landing page of Batatabit.",
  links: {
    github: "https://juan-bh.github.io/Btatabit/",
    page: "https://github.com/JUAN-BH/Btatabit",
  },
});
const playStationProject = new Projects({
  name: "PlayStation",
  imgUrl: "/porfolio/assets/img/playstation_back.PNG",
  technologies: [html, css],
  description: "This project is a web of Playstation with a unique design.",
  links: {
    github: "https://juan-bh.github.io/Playstation/",
    page: "https://github.com/JUAN-BH/Playstation",
  },
});
const loudRiotProject = new Projects({
  name: "Loud_Riot",
  imgUrl: "/porfolio/assets/img/Loud_Riot_back.PNG",
  technologies: [html, css],
  description:
    "This project is a landing page for a festival that i created, it doesn't have responsive design for now.",
  links: {
    github: "https://juan-bh.github.io/LoudRiot/",
    page: "https://github.com/JUAN-BH/LoudRiot",
  },
});
const wikiProject = new Projects({
  name: "Wikipedia",
  imgUrl: "/porfolio/assets/img/wikipedia_back.PNG",
  technologies: [html, css],
  description:
    "This project was a HTML & CSS (grid) with responsive challenge of the landing page of wikipedia.",
  links: {
    github: "https://juan-bh.github.io/Wikipedia/",
    page: "https://github.com/JUAN-BH/Wikipedia",
  },
});
const catApiProject = new Projects({
  name: "Cat_API",
  imgUrl: "/porfolio/assets/img/catAPI.PNG",
  technologies: [html, css, js],
  description: "This project was a pratice of API consumption.",
  links: {
    github: "https://juan-bh.github.io/Cats_API/",
    page: "https://github.com/JUAN-BH/Cats_API",
  },
});
const theForestTempleProject = new Projects({
  name: "The_Forest_Temple",
  imgUrl: "/porfolio/assets/img/theForestTemple.PNG",
  technologies: [html, css, js],
  description: `This project was a challenge of the talentum corporation, it contains a game and each user has their own stadistics, however this stadistics are fake because it doesn't have a real data base, therefore it was build with local Storage and it doesn't have responsive.
    Some of the local users are:
    Jhon - 852, David - 123, Julis - 852123`,
  links: {
    github: "https://juan-bh.github.io/TheForestTemple/",
    page: "https://github.com/JUAN-BH/TheForestTemple",
  },
});
const weatherBHCProject = new Projects({
  name: "Weather_BHC",
  imgUrl: "/porfolio/assets/img/weatherBHC.PNG",
  technologies: [html, js, sass, webpack],
  description: `This project was a pratice with a weather API
    and also a pratice with sass and webpack`,
  links: {
    github: "https://weather-bhc-d7e2cb.netlify.app/#city=Cali",
    page: "https://github.com/JUAN-BH/weatherProject",
  },
});
const toDoMachineProject = new Projects({
  name: "To_Do_Machine",
  imgUrl: "/porfolio/assets/img/toDoMachine.PNG",
  technologies: [html, js, sass, react],
  description: `This project was a pratice with react`,
  links: {
    github: "https://juan-bh.github.io/ToDoMachine/",
    page: "https://github.com/JUAN-BH/ToDoMachine",
  },
});

export const projectsArr = [
  batataProjectxx,
  loudRiotProject,
  catApiProject,
  theForestTempleProject,
  weatherBHCProject,
  toDoMachineProject,
];
