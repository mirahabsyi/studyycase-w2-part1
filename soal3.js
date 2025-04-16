const fs = require("fs");

const readJson = () => {
  fs.readFile("data.json", "utf-8", (err, fileData) => {
    if (err) return console.error("Error:", err);

    const data = JSON.parse(fileData); // ambil data terus parse
    data[8].first_name = "Amira";
    console.log(data);
    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) return console.error("Error writing file:", err);
      console.log("File successfully updated!");
    });
  });
};

readJson();
