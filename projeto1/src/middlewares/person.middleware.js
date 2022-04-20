const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const person = req.body;
  if (
    !person.nome ||
    !person.descricao ||
    !person.preco
    ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos da person!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};