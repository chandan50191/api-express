// Sample department data
const departments = {
  message: "",
  result: true,
  data: [
    { departmentId: 1, departmentName: "Engineering" },
    { departmentId: 2, departmentName: "HR" },
    { departmentId: 3, departmentName: "Marketing" }
  ]
};

// Controller function
const getAllDepartments = (req, res) => {
  res.json(departments);
};

module.exports = {
  getAllDepartments
};
