const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/weddingDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const weddingSchema = new mongoose.Schema({
    date: String,
    guests: Number,
    services: String,
    budget: Number
});

const Wedding = mongoose.model('Wedding', weddingSchema);

app.post('/api/wedding', async (req, res) => {
    try {
        const newWedding = new Wedding(req.body);
        await newWedding.save();
        res.status(201).send(newWedding);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});


const contactSchema = new mongoose.Schema({
    name: String,
    prenom: String,
    tel: Number,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).send(newContact);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
