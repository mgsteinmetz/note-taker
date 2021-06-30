const path = require('path');

module.exports = (app) => {

// Route that returns notes.html

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

// Basic route that sends the user to the index.html

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
};