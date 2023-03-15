const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define API routes
app.get('/api/hello', (req, res) => {
  res.send({resp:'Hello from the server!'});
});

// Start the server

app.listen(port, () => console.log(`Example app listening on port ${port}!`));