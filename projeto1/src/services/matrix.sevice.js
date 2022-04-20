const person = require('../models/person');

const findMatrixService = async () => {
  const matrix = await person.find();
  console.log(matrix)
  return matrix;
  
};

const findByIdMatrixService = async (id) => {
  const person = await person.findById(id);
  return person;
};

const createMatrixService = async (newPerson) => {
  const personCriada = await person.create(newPerson);
  return personCriada;
};

const updateMatrixService = async (id, PersonEdited) => {
  const personAtualizada = await person.findByIdAndUpdate(id, PersonEdited);
  return personAtualizada;
};

const deleteMatrixService = async (id) => {
  return await person.findByIdAndDelete(id);
};

module.exports = {
  findMatrixService,
  findByIdMatrixService,
  createMatrixService,
  updateMatrixService,
  deleteMatrixService,
};