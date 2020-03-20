const fs = require ("fs");

module.exports = function (app) {
    const note = require ("../db/db.json");
    app.get ("/api/notes", (req, res) => {
        console.log(note);
        return res.json(note);
        

    });

    app.post ("/api/notes", (req, res) => {
        const newNote = req.body;
        
        // create the id here db.json
        newNote.id = (notes[notes.length-1].id +1);
        note.push(newNote);
        const jNotes = JSON.stringify(notes);
        fs.writeFile("./db/db.json", jNotes, function (err) {
            if (err) throw err;
        })
        newNote.routeName = req.body.name.split(" ").join("").toLowerCase();
        res.json(newNote);
    });

    // delete function is WIP 
    app.delete ("/api/notes/:id", (req, res) => {
        const id = req.params.id;
        notes.forEach((item, index) => {
            if(id === item.id) {
                notes.splice(index, 1);
            }
            const jNotes = JSON.stringify(notes);
            fs.writeFile("./db/db.json", jNotes, err => {
                if (err) throw err;
                console.log(`Note has been deleted!`)
            })
        })
    })
}