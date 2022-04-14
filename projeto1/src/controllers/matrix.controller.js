const matrixService = require('../services/matrix.sevice');

const findMatrixController = (req, res) => {
  const allMatrix = matrixService.findMatrixService();
  res.send(allMatrix);
};

const findPersonByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenPerson = matrixService.findPersonByIdService(idParam);
  res.send(chosenPerson);
};
const createPersonController = (req, res) => {
  const person = req.body;
  const newPerson = matrixService.createPersonService(person);
  res.send(newPerson);
};

const updatePersonController = (req, res) => {
  const idParam = +req.params.id;
  const personEdit = req.body;
  const updatedPerson = matrixService.updatePersonService(idParam, personEdit);
  res.send(updatedPerson);
};

const deletePersonController = (req, res) => {
  const idParam = req.params.id;
  matrixService.deletePersonService(idParam);
  res.send({ message: 'personagem deletado com sucesso!' });
};

module.exports = {
  findMatrixController,
  findPersonByIdController,
  deletePersonController,
  updatePersonController,
  createPersonController,
};
