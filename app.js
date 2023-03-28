const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>My new App 123!</h1>');
});

app.listen(5000, () => {
    console.log('App listening to port 5000!');
});