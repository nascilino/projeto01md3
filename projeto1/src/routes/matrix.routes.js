const route = require('express').Router();
const controllerMatrix = require('../controllers/matrix.controller');
const { validId, validObjectBody } = require('../middlewares/person.middleware');

route.get('/todos', controllerMatrix.findAllMatrixController);
route.get('/person/:id', validId, controllerMatrix.findByIdPersonController);
route.post('/create', validObjectBody, controllerMatrix.createPersonController);
route.put('/update-person/:id',validId, validObjectBody,  controllerMatrix.updatePersonController);
route.delete('/delete-person/:id', validId, controllerMatrix.deletePersonController);

module.exports = route;