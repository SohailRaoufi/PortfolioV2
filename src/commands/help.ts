const helpObj = {
  "commands": [
    [
      "'about'",
      "Background, focus, and engineering goals.",
    ],
    [
      "'projects'",
      "Backend and competitive programming projects."
    ],
    [
      "'skills'",
      "Programming, backend, DB, and tooling skills."
    ],
    [
      "'awards'",
      "ICPC achievements and competition awards."
    ],
    [
      "'education'",
      "CS degree focus and core coursework."
    ],
    [
      "'contact'",
      "Email, GitHub, and LinkedIn."
    ],
    [
      "'mission'",
      "Personal statement and mission."
    ],
    [
      "'whoami'",
      "Quick identity and current focus."
    ],
    ["'sudo'",
      "???"
    ],
    [
      "'repo'",
      "Open GitHub profile/repository link."
    ],
    [
      "'github' / 'linkedin' / 'email'",
      "Open direct contact links."
    ],
    ["'banner'",
      "Display the banner."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ]
  ],
}

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(Math.max(2, 17 - ele[0].length));
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
