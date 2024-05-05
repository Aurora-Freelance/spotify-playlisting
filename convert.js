const fs = require("fs");
const { parse } = require("json2csv");

// Define the path to the JSON file
const jsonFilePath = "./songs.json";

// Read the JSON file
fs.readFile(jsonFilePath, (err, data) => {
  if (err) throw err;

  // Parse the JSON data
  const songs = JSON.parse(data);

  // Define the CSV fields
  const fields = ["song", "artist"];
  const opts = { fields, header: true };

  try {
    // Convert JSON to CSV
    const csv = parse(songs, opts);

    // Define the path to the output CSV file
    const csvFilePath = "./output.csv";

    // Write the CSV data to a file
    fs.writeFile(csvFilePath, csv, (err) => {
      if (err) throw err;
      console.log("CSV file has been saved as output.csv");
    });
  } catch (err) {
    console.error(err);
  }
});
