const mongooose = require('mongoose');

const PersonSchema = new mongooose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  forca: { type: Number, required: true },
});

const Person = mongooose.model('person', PersonSchema);

module.exports = Person;