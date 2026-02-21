const createAwards = () : string[] => {
  const awards : string[] = [];

  awards.push("<br>");
  awards.push("<span class='command'>Awards</span>");
  awards.push("- ICPC World Finalist (2025) - Qualified among top global teams, demonstrating advanced problem-solving and analytical skills.");
  awards.push("- ICPC Regional Gold Medalist (2024) - First place in regional competition.");
  awards.push("<br>");

  return awards;
}

export const AWARDS = createAwards();
