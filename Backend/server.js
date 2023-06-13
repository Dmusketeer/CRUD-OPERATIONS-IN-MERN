const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const DataBaseConnection = require("./DB/DbConnection");
const routes = require("./Routes/Employee");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
DataBaseConnection();

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
