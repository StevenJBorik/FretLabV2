const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming request bodies as JSON
app.use(express.json());

// Sample route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Sample route to handle POST requests
app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.json({ message: 'Data received successfully!', data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
