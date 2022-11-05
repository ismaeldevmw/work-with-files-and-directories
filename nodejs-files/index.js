const fs = require("fs").promises;
const path = require("path");

const items = async () => {
  const res = await fs.readdir("stores");
  console.log(res); 
}
items()

const items2 = async () => {
  const res = await fs.readdir("stores", { withFileTypes: true });
  for (let item of res) {
    const type = item.isDirectory() ? "folder" : "file";
    console.log(`${item.name}: ${type}`);
  }
}
items2()

async function findFiles(folderName) {
  const items = await fs.readdir(folderName, { withFileTypes: true });
  items.forEach((item) => {
    if (path.extname(item.name) === ".json") {
      console.log(`Found file: ${item.name} in folder: ${folderName}`);
    } else {
      // this is a folder, so call this method again and pass in
      // the path to the folder
      findFiles(path.join(folderName, item.name));
    }
  });
}

findFiles("stores");
