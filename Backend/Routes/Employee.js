const express = require("express");

const {
  AllEmployees,
  InsertEmployee,
  EmployeeById,
  ModifyEmployeeDetails,
  ModifyEmployeeAllDetails,
  DeleteEmployee,
} = require("../Controllers/EmployeeController");

const Router = express.Router();

Router.get("/employees", AllEmployees);
Router.post("/employees", InsertEmployee);
Router.get("/employees/:id", EmployeeById);
Router.put("/employees/:id", ModifyEmployeeDetails);
Router.patch("/employees/:id", ModifyEmployeeAllDetails);
Router.delete("/employees/:id", DeleteEmployee);
module.exports = Router;
