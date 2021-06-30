const fs = require('fs');
const { v4: uuidv4 } = require('uuidv4')

module.exports = (app) => {

    // display note
    
    app.get('/api/notes', (req, res) => {
        const dataBase = JSON.parse(fs.readFileSync('./db/db.json','utf8'));

        res.json(dataBase);
    });

    // Creating new note

    app.post('/api/notes', (req,res) => {
        let newNote = req.body;
        newNote.id = uuidv();

        const dataBase = JSON.parse(fs.readFileSync('db/db.json','utf8'));

        dataBase.push(newNote);
        fs.readFileSync('db/db.json', JSON.stringify(dataBase));

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