import command from "../../config.json" assert { type: "json" };

const createAbout = (): string[] => {
  const about: string[] = [];
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
  about.push(
    "I build scalable backend systems and solve complex algorithmic problems.",
  );
  about.push("Focused on performance, clean architecture, and efficient code.");
  about.push("<br>");
  about.push(
    "I am a Computer Science student focused on backend engineering and",
  );
  about.push(
    "competitive programming. I enjoy the logic-heavy side of software:",
  );
  about.push(
    "API design, database modeling, performance tuning, and clean systems.",
  );
  about.push("<br>");
  about.push(
    "Problem solving and DSA shaped how I engineer real backend systems.",
  );
  about.push(
    "Competitive programming sharpened my debugging, edge-case handling,",
  );
  about.push("and optimization mindset under constraints.");
  about.push("<br>");
  about.push("Core interests:");
  about.push("- Backend architecture");
  about.push("- Distributed systems");
  about.push("- System design");
  about.push("- Performance optimization");
  about.push("- Database design");
  about.push("- Clean, maintainable code");
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
  about.push(
    "Run: 'skills', 'projects', 'awards', 'education', 'mission'.",
  );

  about.push("<br>");
  return about;
};

export const ABOUT = createAbout();
