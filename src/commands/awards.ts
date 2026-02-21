import command from "../../config.json" assert { type: "json" };

const createAwards = () : string[] => {
  const awards : string[] = [];
  const awardsContent = command.terminalContent.awards;

  awards.push("<br>");
  awards.push(`<span class='command'>${awardsContent.title}</span>`);
  awardsContent.items.forEach((item) => {
    awards.push(`- ${item}`);
  });
  awards.push("<br>");

  return awards;
}

export const AWARDS = createAwards();
