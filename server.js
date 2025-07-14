// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let messages = [];
let SIMU = []; // Changed from messages to SIMU

// Endpoint to check version (fetch ads)
app.get('/ads', (req, res) => {
    res.json(SIMU); // Updated to use SIMU
});

// Endpoint to send a new ad
app.post('/dx', (req, res) => {
    const { message } = req.body;
    if (message) {
        // Clear old ads and add the new one
        SIMU = [{ id: 1, message, timestamp: new Date() }]; // Updated to use SIMU
        res.status(200).json({ status: 'success', message: 'New ad received', data: SIMU }); // Updated to use SIMU
    } else {
        res.status(400).json({ status: 'error', message: 'No message provided' });
    }
});

// Endpoint to check version
app.get('/check_version', (req, res) => {
    res.json(messages);
});

// Endpoint to send a new version message
app.post('/send', (req, res) => {
    const { message } = req.body;
    if (message) {
        messages.push({ message });
        res.status(200).json({ status: 'success', message: 'Message received' });
    } else {
        res.status(400).json({ status: 'error', message: 'No message provided' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});
