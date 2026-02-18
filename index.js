const express = require('express');
const {dataBaseConnection} = require('./configuration/config');
const tasksRoutes = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.use(express.json());       
app.use('/tasks', tasksRoutes);

dataBaseConnection();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});