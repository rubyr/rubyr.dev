import App from "./App.svelte";
import projects from "./content/projects.yml";
import skills from "./content/skills.yml";
import experiences from "./content/experience.yml";
import links from "./content/links.yml";

const app = new App({
  target: document.body,
  props: {
    projects,
    skills,
    experiences,
    links,
  },
});

export default app;
