const route = require("express").Router();
const controllerMatrix = require("../controllers/matrix.controller");
// const {validId, validObjectBody } = require('../middlewares/person.middleware');

route.get("/todos", controllerMatrix.findAllMatrixController);
route.get("/person/:id", controllerMatrix.findByIdPersonController);
route.post("/criar", controllerMatrix.createPersonController);
route.put("/update/:id", controllerMatrix.updatePersonController);
route.delete("/deletar/:id", controllerMatrix.deletePersonController);

module.exports = route;
