import command from "../../config.json" assert { type: "json" };

const createSkills = () : string[] => {
  const skills : string[] = [];
  const sections = command.terminalContent.skills;

  skills.push("<br>");
  sections.forEach((section) => {
    skills.push(`<span class='command'>${section.category}</span>`);
    section.items.forEach((item) => {
      skills.push(`- ${item}`);
    });
    skills.push("<br>");
  });

  return skills;
}

export const SKILLS = createSkills();
