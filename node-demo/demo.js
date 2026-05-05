const fs = require("fs");

const content = "Updated Node.js content";

fs.writeFile("message.txt", content, { flag: "w" }, (error) => {
  if (error) {
    console.log("Error creating file:", error);
    return;
  }

  console.log("message.txt created successfully!");
});