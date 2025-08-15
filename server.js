const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')

app.use(express.json());

app.use(cors());

const rolesRoutes = require('./routes/roleRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const designationRoutes = require('./routes/designationRoutes');
const clientRoutes = require('./routes/clientRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

// Register routes
app.get('/',(req,res) => {
  res.render("index")
})

app.use('/api', rolesRoutes);
app.use('/api', departmentRoutes);
app.use('/api', designationRoutes);
app.use('/api', clientRoutes);
app.use('/api', employeeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
