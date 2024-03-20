import { readFile } from "fs/promises";

async function readJsonFile(fileName) {
  try {
    // Read the JSON file asynchronously
    const data = await readFile(fileName, "utf8");

    // Parse JSON data into a JavaScript object
    const jsonData = JSON.parse(data);

    return jsonData;
  } catch (err) {
    console.error("Error reading or parsing JSON file:", err);
    throw err; // Re-throw the error to handle it outside of this function
  }
}

async function loadFiles() {
  try {
    // Use async/await to load files sequentially
    const albums = await readJsonFile("albums.json");
    const reviews = await readJsonFile("reviews.json");
    const authors = await readJsonFile("authors.json");

    return { albums, reviews, authors };
  } catch (err) {
    console.error("Error loading files:", err);
    throw err; // Re-throw the error to handle it outside of this function
  }
}

// Load files and export them
export default loadFiles;
