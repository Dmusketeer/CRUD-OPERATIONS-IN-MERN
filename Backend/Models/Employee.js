const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  Name: {
    type: "string",
    required: true,
  },
  Age: {
    type: "Number",
    required: true,
  },
  Job: {
    type: "string",
    emum: ["Engineer", "Manager", "Doctor", "Teacher"],
  },
  Salary: {
    type: "Number",
    required: true,
  },
  DoesOwnCar: {
    type: "boolean",
    required: true,
    default: false,
  },
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

module.exports = EmployeeModel;
