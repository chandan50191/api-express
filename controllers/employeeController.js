// employees.controller.js
const fs = require('fs');
const filePath = './employees.json'; // same folder

// Load data from file
const loadEmployees = () => {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

// Save data to file
const saveEmployees = (employees) => {
  fs.writeFileSync(filePath, JSON.stringify(employees, null, 2));
};

// GET all employees
const getAllEmployees = (req, res) => {
  const employees = loadEmployees();
  res.json(employees);
};

// GET employee by ID
const getEmployeeById = (req, res) => {
  const employees = loadEmployees();
  const id = parseInt(req.params.id);
  const employee = employees.data.find(e => e.empId === id);

  if (employee) {
    res.json({ message: "", result: true, data: employee });
  } else {
    res.status(404).json({ message: "Employee not found", result: false });
  }
};

// ADD or UPDATE employee
const addOrUpdateEmployee = (req, res) => {
  const employees = loadEmployees();
  const incomingEmployee = req.body;

  let message = "";
  let isNew = false;

  if (incomingEmployee.empId) {
    // Try to update existing
    const index = employees.data.findIndex(e => e.empId === incomingEmployee.empId);
    if (index !== -1) {
      employees.data[index] = { ...employees.data[index], ...incomingEmployee };
      message = "Employee updated";
    } else {
      // empId given but not found → create new
      incomingEmployee.empId = Date.now();
      employees.data.push(incomingEmployee);
      message = "Employee added (empId not found, created new)";
      isNew = true;
    }
  } else {
    // No empId → create new
    incomingEmployee.empId = Date.now();
    employees.data.push(incomingEmployee);
    message = "Employee added";
    isNew = true;
  }

  saveEmployees(employees);
  res.status(isNew ? 201 : 200).json({
    message,
    result: true,
    data: incomingEmployee
  });
};

// DELETE employee
const deleteEmployee = (req, res) => {
  const employees = loadEmployees();
  const id = parseInt(req.params.id);
  const index = employees.data.findIndex(e => e.empId === id);

  if (index === -1) {
    return res.status(404).json({ message: "Employee not found", result: false });
  }

  const deletedEmployee = employees.data.splice(index, 1)[0];
  saveEmployees(employees);
  res.json({ message: "Employee deleted", result: true, data: deletedEmployee });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addOrUpdateEmployee,
  deleteEmployee
};
