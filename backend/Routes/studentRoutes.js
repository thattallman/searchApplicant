const express = require("express");
const router = express.Router();
const studentController = require("../Controllers/studentController");

router.get("/", studentController.searchStudents);

module.exports = router;
