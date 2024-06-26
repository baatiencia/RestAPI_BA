const express = require('express');

const app = express();
app.use(express.json());

//Port listens
const PORT = process.env.PORT || 3000;
//
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

//Endpoint
app.post("/multiply", (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'We spect 2 numbers' });
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'The characters must be numbers' });
    }
    const result = num1 * num2;
    res.json({ result: result });
});