const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Simple route to return some data
app.get('/data', (req, res) => {
  res.json({ message: 'Data from shared backend service' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend service running on port ${PORT}`);
});

