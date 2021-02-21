import App from "./App.svelte";
import projects from "./content/projects.yml";
import skills from "./content/skills.yml";
import experiences from "./content/experience.yml";

const app = new App({
  target: document.body,
  props: {
    projects,
    skills,
    experiences,
  },
});

export default app;
