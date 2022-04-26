const route = require("express").Router();
const controllerMatrix = require("../controllers/matrix.controller");
// const {validId, validObjectBody } = require('../middlewares/person.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get("/todos", controllerMatrix.findAllMatrixController);
route.get("/person/:id", controllerMatrix.findByIdPersonController);
route.post("/criar", controllerMatrix.createPersonController);
route.put("/update/:id", controllerMatrix.updatePersonController);
route.delete("/deletar/:id", controllerMatrix.deletePersonController);

module.exports = route;
