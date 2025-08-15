// Sample role data
const roles = {
  message: "",
  result: true,
  data: [
    { roleId: 4, role: "Junior Developer" },
    { roleId: 6, role: "Team Lead" },
    { roleId: 13, role: "Manager" },
    { roleId: 36, role: "Devops Manager" },
    { roleId: 37, role: "Sr Soft Eng" },
    { roleId: 38, role: "Sr QA LEad" },
    { roleId: 39, role: "string" }
  ]
};

// Controller function
const getAllRoles = (req, res) => {
  res.json(roles);
};

module.exports = {
  getAllRoles
};
