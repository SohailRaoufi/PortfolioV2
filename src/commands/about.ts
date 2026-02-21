import command from "../../config.json" assert { type: "json" };

const createAbout = (): string[] => {
  const about: string[] = [];
  const aboutContent = command.terminalContent.about;
  const githubUrl = command.social.github.startsWith("http")
    ? command.social.github
    : `https://github.com/${command.social.github}`;
  const linkedinUrl = command.social.linkedin.startsWith("http")
    ? command.social.linkedin
    : `https://www.linkedin.com/in/${command.social.linkedin}`;
  const emailAddress = command.social.email.replace(/^mailto:/, "");

  about.push("<br>");
  about.push(`<span class='command'>${command.aboutGreeting}</span>`);
  about.push("<br>");
  aboutContent.summary.forEach((line) => {
    about.push(line);
  });
  about.push("<br>");
  about.push(aboutContent.interestsTitle);
  aboutContent.interests.forEach((interest) => {
    about.push(`- ${interest}`);
  });
  about.push("<br>");

  about.push("<br>");
  about.push(
    `<i class='fa-brands fa-github'></i> <a target='_blank' href='${githubUrl}'>${githubUrl}</a>`,
  );
  about.push(
    `<i class='fa-brands fa-linkedin'></i> <a target='_blank' href='${linkedinUrl}'>${linkedinUrl}</a>`,
  );
  about.push(
    `<i class='fa-solid fa-envelope'></i> <a target='_blank' href='mailto:${emailAddress}'>${emailAddress}</a>`,
  );
  about.push("Run: 'skills', 'projects', 'awards', 'education', 'mission'.");

  about.push("<br>");
  return about;
};

export const ABOUT = createAbout();
