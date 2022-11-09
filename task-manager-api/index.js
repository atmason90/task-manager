const express = require('express');

// Instantiate express app
const app = express();

// Define server port
const PORT = 3001;

// Create default route
app.get('/', (req, res) => {
    res.send('Express + TypeSscript Server')
});

// Start listening to the requests on defined port
app.listen(PORT);