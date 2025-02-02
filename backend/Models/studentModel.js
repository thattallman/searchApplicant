const fs = require("fs");
const path = require("path");

// Read student data
const getStudents = () => {
    const dataPath = path.join(__dirname, "../data/students.json");
    return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
};

module.exports = { getStudents };
