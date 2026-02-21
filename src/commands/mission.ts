const createMission = () : string[] => {
  const mission : string[] = [];

  mission.push("<br>");
  mission.push("<span class='command'>Personal Statement</span>");
  mission.push("I am continuously improving my backend engineering skills");
  mission.push("and problem-solving ability.");
  mission.push("I value efficiency, scalability, and clean design.");
  mission.push("I am open to collaboration, learning opportunities,");
  mission.push("and challenging technical problems.");
  mission.push("<br>");
  mission.push("<span class='command'>Mission</span>");
  mission.push("Build scalable systems.");
  mission.push("Solve meaningful problems.");
  mission.push("Keep leveling up.");
  mission.push("<br>");

  return mission;
}

export const MISSION = createMission();
