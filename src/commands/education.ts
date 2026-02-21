const createEducation = () : string[] => {
  const education : string[] = [];

  education.push("<br>");
  education.push("<span class='command'>Education</span>");
  education.push("Bachelor's Degree in Computer Science");
  education.push("Focused on core CS fundamentals:");
  education.push("- Data Structures and Algorithms");
  education.push("- Operating Systems");
  education.push("- Database Management Systems");
  education.push("- Computer Networks");
  education.push("<br>");

  return education;
}

export const EDUCATION = createEducation();
