const fs = require ("fs");

module.exports = function (app) {
    const note = require ("../db/db.json");
    app.get ("/api/note", (req, res) => {
        return res.json(note)
    });

    app.post ("/api/note", (req, res) => {
        const newNote = req.body;

        newNote.routeName = req.body.name.split(" ").join("").toLowerCase();

        note.push(newNote);
        res.json(newNote);
    });

    // delete function is WIP
    app.delete ("/api/note/:", (req, res) => {
        
    })
}

