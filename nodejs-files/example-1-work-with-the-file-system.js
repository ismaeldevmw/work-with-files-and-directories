const fs = require("fs");
const path = require("path");

async function findSalesFiles(folderName) {
  // this array will hold sales files as they are found
  let salesFiles = [];

  async function findFiles(folderName) {
    // read all the items in the current folder
    const items = await fs.readdirSync(folderName, { withFileTypes: true });

    // iterate over each found item
    for (let item of items) {
      // if the item is a directory, it will need to be searched for files
      if (item.isDirectory()) {
        // search this directory for files (this is recursion!)
        await findFiles(`${folderName}/${item.name}`);
      } else {
        // Make sure the discovered file is a sales.json file
        if (item.name === "sales.json") {
          // store the file path in the salesFiles array
          salesFiles.push(`${folderName}/${item.name}`);
        }
      }
    }
  }

  // find the sales files
  await findFiles(folderName);

  // return the array of found file paths
  return salesFiles;
}

async function main() {
  try {
    const salesFiles = await findSalesFiles("stores");
    console.log(salesFiles);
  } catch (exception) {
    console.log(exception.message);
  } 
}

main();
