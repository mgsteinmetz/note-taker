// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

const notes = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user to the index.html
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Route that returns notes.html
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// Displays notes
app.get('/api/notes', (req, res) => {
    const savedNotes = req.params.notes;

    console.log(savedNotes);

    for (let i = 0; i < notes.length; i++) {
        if (chosen === notes[i].routeName) {
            return res.json(notes[i]);
        }
    }
    return res.json(false);
});

// Creating new note
app.post('/api/notes', (req,res) => {
    const newNote = req.body;

    newNote.routeName = newNote;
    console.log(newNote);

    notes.push(newNote);
    res.json(newNote);
})

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));