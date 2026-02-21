import command from '../../config.json' assert {type: 'json'};

const createContact = () : string[] => {
  const contact : string[] = [];
  const githubUrl = command.social.github.startsWith("http")
    ? command.social.github
    : `https://github.com/${command.social.github}`;
  const linkedinUrl = command.social.linkedin.startsWith("http")
    ? command.social.linkedin
    : `https://www.linkedin.com/in/${command.social.linkedin}`;
  const emailAddress = command.social.email.replace(/^mailto:/, "");

  contact.push("<br>");
  contact.push("<span class='command'>Contact</span>");
  contact.push(`<i class='fa-brands fa-github'></i> <a target='_blank' href='${githubUrl}'>${githubUrl}</a>`);
  contact.push(`<i class='fa-brands fa-linkedin'></i> <a target='_blank' href='${linkedinUrl}'>${linkedinUrl}</a>`);
  contact.push(`<i class='fa-solid fa-envelope'></i> <a target='_blank' href='mailto:${emailAddress}'>${emailAddress}</a>`);
  contact.push("<br>");

  return contact;
}

export const CONTACT = createContact();
