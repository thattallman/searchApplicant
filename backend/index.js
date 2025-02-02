const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const studentRoutes = require("./Routes/studentRoutes");
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
