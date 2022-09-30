import router from "./routes/index.js";
import { observerProjects } from "./utils/IO.js";
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
