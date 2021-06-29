// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');
// Sets up the Express App

const app = express();
const PORT = 3000;

const notes = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route that returns notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// Displays notes
app.get('/api/notes', (req, res) => res.json(JSON.parse(fs.readFileSync('./db/db.json','utf8'))));

// Creating new note
app.post('/api/notes', (req,res) => {
    const newNote = req.body;
    
    newNote.routeName = newNote;
    console.log(newNote);
    
    notes.push(newNote);
    res.json(newNote);
})

// Basic route that sends the user to the index.html
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));