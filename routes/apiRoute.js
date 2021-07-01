const fs = require('fs');
const { v4: uuidv4 } = require('uuid')

let savedNote = {};

module.exports = (app) => {

    // display note
    
    app.get('/api/notes', (req, res) => {
        fs.readFileSync('./db/db.json','utf8');

        savedNote = JSON.parse(res);
        res.json(savedNote);
    });

    // Creating new note

    app.post('/api/notes', (req,res) => {
        req.body.id = uuidv4(); 
        savedNote.push(req.body);

        fs.writeFileSync('db/db.json', JSON.stringify(savedNote));

        res.json(req.body);
    });

    // Deleting a note 

    app.post('/api/notes/:id', (req, res) => {
        console.log(req.params.id);

        const deleteNote = note.filter(item => item.id != req.params.id);
        savedNote = deleteNote;

        return res.redirect('/');
    });
};