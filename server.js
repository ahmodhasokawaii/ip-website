const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (userIP.includes('::ffff:')) {
        userIP = userIP.split('::ffff:')[1];
    }

    console.log(`Visitor IP: ${userIP}`);

    res.send(`
        <h1>Welcome to My Website</h1>
        <p>Your IP address is: ${userIP}</p>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});