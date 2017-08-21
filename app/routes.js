var notesModel = require('./models/notes');

module.exports = function (app) {

  //get all notes
  app.get('/api/notes', function (req, res) {
    notesModel.find(function (err, notes) {
      if (err) res.send(err); //check kung if may error
      res.json(notes);
    });
  });

  //add a note, then return all notes
  app.post('/api/notes', function (req, res) {

    var requestBody = {
      title: req.body.title,
      text: req.body.text,
    };

    notesModel.create(requestBody, function (err, notes) {
      if (err) res.send(err); //check kung if may error

      //get all notes
      notesModel.find(function (err, notes) {
        if (err) res.send(err);
        res.json(notes);
      });

    });
  });

  //delete a note, then return all notes
  app.delete('/api/notes/:note_id', function (req, res) {
    var note = { _id: req.params.note_id };
    notesModel.remove(note, function (err) {
      if (err) res.send(err); //check kung may error

      //get all notes
      notesModel.find(function (err, notes) {
        if (err) res.send(err);
        res.json(notes);
      });

    });
  });

  //get a specific note
  app.get('api/notes/:note_id', function (req, res) {
    var noteId = { _id: req.params.note_id };
    notesModel.find(noteId, function (err, note) {
      if (err) res.send(err); //check kung if may error
      res.json(note);
    });
  });

};