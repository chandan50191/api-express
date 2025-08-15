// controllers/designationController.js

const designations = {
  message: "",
  result: true,
  data: [
    {
      designationId: 30,
      designation: "Ben"
    },
    {
      designationId: 35,
      designation: "UI/UX Developer"
    }
  ]
};

// Controller function to handle GET request
const getAllDesignations = (req, res) => {
  res.json(designations);
};

// GET designation by ID
const getDesignationById = (req, res) => {
  const id = parseInt(req.params.id);

  const designation = designations.data.find(d => d.designationId === id);

  if (designation) {
    res.json({
      message: "",
      result: true,
      data: designation
    });
  } else {
    res.status(404).json({
      message: `Designation with ID ${id} not found`,
      result: false,
      data: null
    });
  }
};

module.exports = {
  getAllDesignations,
  getDesignationById
};
