const Student = require("../Models/studentModel");

const searchStudents = (req, res) => {
    const query = req.query.query?.trim().toLowerCase();
    if (!query || query.length < 3) return res.json([]);

    const students = Student.getStudents();
    const results = students.filter(student => student.name.toLowerCase().includes(query));

    res.json(results.slice(0, 5)); // Return only 5 results
};

module.exports = { searchStudents };
