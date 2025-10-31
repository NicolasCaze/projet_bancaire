const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:5173'],
};

const User = require('./models/user.model');
app.use(express.json());
app.use(cors(corsOptions));

const hostname = '127.0.0.7';
const port = process.env.PORT || 3000;


app.listen(port, hostname, () => {
	console.log(`Serveur démarré sur http://${hostname}:${port}`);
});
