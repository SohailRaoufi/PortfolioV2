import command from '../../config.json' assert {type: 'json'};

const createProject = () : string[] => {
  const projects : string[] = [];

  projects.push("<br>");
  command.projects.forEach((project, idx) => {
    projects.push(`<span class='command'>${idx + 1}) ${project.name}</span>`);
    projects.push(project.description);
    projects.push(`<a href='${project.link}' target='_blank'>${project.link}</a>`);
    projects.push("<br>");
  });
  projects.push(`${command.projects.length} project(s)`);
  projects.push("<br>");

  return projects;
}

export const PROJECTS = createProject()
