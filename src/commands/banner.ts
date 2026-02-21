import command from '../../config.json' assert {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });  
  banner.push("<br>");
  banner.push(`Welcome to ${command.title}.`);
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push("Use <span class='command'>'about'</span> to see my profile and focus.");
  banner.push("Use <span class='command'>'contact'</span> to reach me directly.");
  banner.push(`Use <span class='command'>'repo'</span> to open GitHub or click <a href='${command.repoLink}' target='_blank'>here</a>.`);
  banner.push("<br>");
  return banner;
}

export const BANNER = createBanner();
