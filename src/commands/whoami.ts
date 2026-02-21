import command from "../../config.json" assert { type: "json" };

export const createWhoami = () : string[] => {
  const whoami : string[] = [];
  whoami.push("<br>");
  command.terminalContent.whoami.forEach((line) => {
    whoami.push(line);
  });
  whoami.push("<br>");

  return whoami
}
