const matrixService = require("../services/matrix.sevice");

const findAllMatrixController = async (req, res) => {
  const allMatrix = await matrixService.findMatrixService();
  if (allMatrix.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhuma Person cadastrada!" });
  }
  res.send(allMatrix);
};

const findByIdPersonController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPerson = await matrixService.findByIdMatrixService(idParam);
  if (!chosenPerson) {
    return res.status(404).send({ message: "Person não encontrada!" });
  }
  res.send(chosenPerson);
};

const createPersonController = async (req, res) => {
  const Person = req.body;
  const newPerson = await matrixService.createMatrixService(Person);
  res.status(201).send(newPerson);
};

const updatePersonController = async (req, res) => {
  const idParam = req.params.id;
  const editPerson = req.body;
  const updatedPerson = await matrixService.updateMatrixService(
    idParam,
    editPerson
  );
  res.send(updatedPerson);
};

const deletePersonController = async (req, res) => {
  const idParam = req.params.id;
  await matrixService.deleteMatrixService(idParam);
  res.send({ message: "Person deletada com sucesso!" });
};

module.exports = {
  findAllMatrixController,
  findByIdPersonController,
  createPersonController,
  updatePersonController,
  deletePersonController,
};
