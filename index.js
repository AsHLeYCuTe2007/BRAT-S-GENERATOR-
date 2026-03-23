const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/generate-brat', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Walang text na nilagay.' });
    }

    const bratText = text.toLowerCase().trim();

    res.json({
        original: text,
        bratified: bratText,
        color: "#8ACE00",
        font: "Arial"
    });
});

app.listen(PORT, () => {
    console.log(`Brat Generator is running on http://localhost:${PORT}`);
});
