const fs = require('fs');

module.exports = (app) => {

    // display note
    
    app.get('/api/notes', (req, res) => {
        const dataBase = JSON.parse(fs.readFileSync('./db/db.json','utf8'));

        res.json(dataBase);
    });

    // Creating new note

    app.post('/api/notes', (req,res) => {
        const newNote = req.body;
        const dataBase = JSON.parse(fs.readFileSync('./db/db.json','utf8'));

        fs.readFileSync('./db/db.json', JSON.stringify);

        newNote.id = Math.random() * 100;

        dataBase.push(newNote);
        res.json(newNote);
    });

    // Deleting a note 

    app.post('/api/notes/:id', (req, res) => {
        console.log(req.params.id);

        const deleteNote = note.filter(item => item.id != req.params.id);
        note = deleteNote;

        return res.redirect('/');
    });
};