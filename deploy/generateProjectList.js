const fs = require("fs");
const path = require("path");

const resourcesDir = "./public/resources";
const outputFilePath = "./public/projectList.json";

fs.readdir(resourcesDir, { withFileTypes: true }, (err, entries) => {
  if (err) {
    console.error("Failed to read resources directory:", err);
    return;
  }

  const projects = entries
    .filter((entry) => entry.isDirectory())
    .map((dir) => {
      const images = fs
        .readdirSync(path.join(resourcesDir, dir.name))
        .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .map((fileName) => `${dir.name}/${fileName}`);
      return { name: dir.name, images };
    });

  fs.writeFile(outputFilePath, JSON.stringify(projects, null, 2), (err) => {
    if (err) {
      console.error("Failed to write project list file:", err);
    } else {
      console.log("Project list generated successfully.");
    }
  });
});
