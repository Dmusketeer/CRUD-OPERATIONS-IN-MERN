const { response } = require("express");
const EmployeeModel = require("../Models/Employee");

const AllEmployees = async (req, res) => {
  await EmployeeModel.find()
    .then((employees) => {
      res.status(200).send(employees);
    })
    .catch((err) => {
      res.status(500).send({ err: err.message });
    });
};

const InsertEmployee = async (req, res) => {
  const employee = new EmployeeModel({
    Name: req.body.Name,
    Age: req.body.Age,
    Job: req.body.Job,
    Salary: req.body.Salary,
    DoesOwnCar: req.body.DoesOwnCar,
  });
  const employees = await EmployeeModel.create(employee);
  employees
    .save()
    .then(() => {
      res.status(201).send(employee);
    })
    .catch((err) => {
      res.status(500).send({ err: err.message });
    });
};

const EmployeeById = async (req, res) => {
  try {
    const Emp = await EmployeeModel.findById(req.params.id);
    res.status(200).send(Emp);
  } catch (error) {
    res.status(500).send({ Error: error.message });
  }
};

const ModifyEmployeeDetails = async (req, res) => {};

const ModifyEmployeeAllDetails = async (req, res) => {
  const { Name, Age, Job, Salary, DoesOwnCar } = req.body;
  try {
    await EmployeeModel.findByIdAndUpdate(
      { _id: req.params.id },
      { Name, Age, Job, Salary, DoesOwnCar }
    );
    res.status(200).send("Updated");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

const DeleteEmployee = async (req, res) => {
  try {
    await EmployeeModel.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .send(
        `Employee with id : ${req.params.id} has been deleted successfully`
      );
  } catch (error) {
    res.status(500).send({ Error: error.message });
  }
};

module.exports = {
  AllEmployees,
  InsertEmployee,
  EmployeeById,
  ModifyEmployeeDetails,
  ModifyEmployeeAllDetails,
  DeleteEmployee,
};
