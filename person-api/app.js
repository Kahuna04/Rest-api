const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const personRoutes = require('./routes/personRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/mydatabase');
const connection = mongoose.connection;
autoIncrement.initialize(connection);

// Include personRoutes for handling /api/persons routes
app.use('/api', personRoutes);

// Provide a basic description of the API
app.get('/api', (req, res) => {
    res.json({message: 'Welcome to the Person API!',
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

