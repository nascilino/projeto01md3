const matrixService = require('../services/matrix.sevice');

const findMatrixController = (req, res) => {
  const allMatrix = matrixService.findMatrixService();
  res.send(allMatrix);
};

const findPersonByIdController = (req, res) => {
  const idParam = req.params.id;

  // if(!idParam){
  //   return res.status(400).send({message: 'Id invalido!'})}
  const chosenPerson = matrixService.findPersonByIdService(idParam);
  if(!chosenPerson){
    return res.status(404).send({message: 'personagem nao encontrado'})
  }
  res.send(chosenPerson);
};
const createPersonController = (req, res) => {
  const person = req.body;
  if(
    !person||
    !person.nome||
    !person.descricao||
    !person.forca

  ){
  return res.status(400).send({message:'preencha todos os campos!'})
  }
  const newPerson = matrixService.createPersonService(person);
  res.status(201).send(newPerson);
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
