const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3000;
const BasicEmployeeDetail = require('./models/basicEmployeeDetail');

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});
// POST request to add a new record
app.post('/records', async (req, res) => {
  try {
    const { first_name, last_name, email, position } = req.body;
    const record = await BasicEmployeeDetail.create({ first_name, last_name, email, position });
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET request to fetch all records
app.get('/records', async (req, res) => {
  try {
    console.log('GET /records endpoint hit'); // Debug log
    const records = await BasicEmployeeDetail.findAll();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
