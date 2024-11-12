const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Sample endpoint to get directions
app.post('/api/directions', async (req, res) => {
    const { origin, destination } = req.body;

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
            params: {
                origin,
                destination,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving directions');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
