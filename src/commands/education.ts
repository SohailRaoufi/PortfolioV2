import command from "../../config.json" assert { type: "json" };

const createEducation = () : string[] => {
  const education : string[] = [];
  const educationContent = command.terminalContent.education;

  education.push("<br>");
  education.push(`<span class='command'>${educationContent.title}</span>`);
  education.push(educationContent.degree);
  education.push(educationContent.focusTitle);
  educationContent.focusItems.forEach((item) => {
    education.push(`- ${item}`);
  });
  education.push("<br>");

  return education;
}

export const EDUCATION = createEducation();
