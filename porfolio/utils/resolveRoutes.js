const resolveRoutes = (route) => {
  if (route.includes("project")) {
    let validRoute = route === "/" ? route : "/project";
    return validRoute;
  }
  return `${route}`;
};

export default resolveRoutes;

//se encarga de saber a donde enviar el template
