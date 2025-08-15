const fs = require('fs');
const filePath = './clients.json'; // same folder

// Load data from file
const loadClients = () => {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

// Save data to file
const saveClients = (clients) => {
  fs.writeFileSync(filePath, JSON.stringify(clients, null, 2));
};

const getAllClients = (req, res) => {
  const clients = loadClients();
  res.json(clients);
};

const getClientById = (req, res) => {
  const clients = loadClients();
  const id = parseInt(req.params.id);
  const client = clients.data.find(c => c.clientId === id);
  if (client) {
    res.json({ message: "", result: true, data: client });
  } else {
    res.status(404).json({ message: "Client not found", result: false });
  }
};
const addOrUpdateClient = (req, res) => {
  const clients = loadClients();
  const incomingClient = req.body;

  let message = "";
  let isNew = false;

  if (incomingClient.clientId) {
    // Try to update existing client
    const index = clients.data.findIndex(c => c.clientId === incomingClient.clientId);
    if (index !== -1) {
      clients.data[index] = { ...clients.data[index], ...incomingClient };
      message = "Client updated";
    } else {
      // If clientId is provided but not found, treat it as new
      incomingClient.clientId = Date.now();
      clients.data.push(incomingClient);
      message = "Client added (clientId not found, created new)";
      isNew = true;
    }
  } else {
    // New client without clientId
    incomingClient.clientId = Date.now();
    clients.data.push(incomingClient);
    message = "Client added";
    isNew = true;
  }

  saveClients(clients);
  res.status(isNew ? 201 : 200).json({
    message,
    result: true,
    data: incomingClient
  });
};

const deleteClient = (req, res) => {
  const clients = loadClients();
  const id = parseInt(req.params.id);
  const index = clients.data.findIndex(c => c.clientId === id);

  if (index === -1) {
    return res.status(404).json({ message: "Client not found", result: false });
  }

  const deletedClient = clients.data.splice(index, 1)[0];
  saveClients(clients);
  res.json({ message: "Client deleted", result: true, data: deletedClient });
};

module.exports = {
  getAllClients,
  getClientById,
  addOrUpdateClient,
  deleteClient
};
