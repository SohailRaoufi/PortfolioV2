const createSkills = () : string[] => {
  const skills : string[] = [];

  skills.push("<br>");
  skills.push("<span class='command'>Programming Languages</span>");
  skills.push("- TypeScript, Python, Go, Rust");
  skills.push("<br>");
  skills.push("<span class='command'>Backend & APIs</span>");
  skills.push("- Node.js, NestJS, Django, Gin, RESTful API design");
  skills.push("<br>");
  skills.push("<span class='command'>Frontend</span>");
  skills.push("- React, Next.js");
  skills.push("<br>");
  skills.push("<span class='command'>Databases</span>");
  skills.push("- PostgreSQL, Oracle, MongoDB, Redis");
  skills.push("<br>");
  skills.push("<span class='command'>Cloud & DevOps</span>");
  skills.push("- AWS, Docker, CI/CD pipelines");
  skills.push("<br>");
  skills.push("<span class='command'>Messaging & Storage</span>");
  skills.push("- RabbitMQ, MinIO");
  skills.push("<br>");
  skills.push("<span class='command'>Tools</span>");
  skills.push("- Git, Gitea, Prisma, MikroORM, Dokploy");
  skills.push("<br>");

  return skills;
}

export const SKILLS = createSkills();
