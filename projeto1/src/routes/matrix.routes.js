const express = require("express");
const router = express.Router();

const matrixController = require("../controllers/matrix.controller");

router.get("/todos", matrixController.findMatrixController);
router.get("/person/:id", matrixController.findPersonByIdController);
router.post('/criar', matrixController.createPersonController);
router.put('/update/:id', matrixController.updatePersonController);
router.delete('/deletar/:id', matrixController.deletePersonController);
module.exports = router;
