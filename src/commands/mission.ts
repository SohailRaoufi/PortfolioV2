import command from "../../config.json" assert { type: "json" };

const createMission = () : string[] => {
  const mission : string[] = [];
  const missionContent = command.terminalContent.mission;

  mission.push("<br>");
  mission.push(`<span class='command'>${missionContent.statementTitle}</span>`);
  missionContent.statementLines.forEach((line) => {
    mission.push(line);
  });
  mission.push("<br>");
  mission.push(`<span class='command'>${missionContent.missionTitle}</span>`);
  missionContent.missionLines.forEach((line) => {
    mission.push(line);
  });
  mission.push("<br>");

  return mission;
}

export const MISSION = createMission();
