const Person = require('../models/Person');

const findMatrixService = async () => {
  const matrix = await Person.find();
  return matrix;
  
};

const findByIdMatrixService = async (id) => {
  const person = await Person.findById(id);
  return person;
};

const createMatrixService = async (newPerson) => {
  const personCriada = await Person.create(newPerson);
  return personCriada;
};

const updateMatrixService = async (id, PersonEdited) => {
  const personAtualizada = await Person.findByIdAndUpdate(id, PersonEdited);
  return personAtualizada;
};

const deleteMatrixService = async (id) => {
  return await Person.findByIdAndDelete(id);
};

module.exports = {
  findMatrixService,
  findByIdMatrixService,
  createMatrixService,
  updateMatrixService,
  deleteMatrixService,
};