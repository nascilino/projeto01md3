const express = require("express");
const router = express.Router();

const paletasController = require("../controllers/matrix.controller");

router.get("/todos", paletasController.findMatrixController);
router.get("/person/:id", paletasController.findPersonByIdController);
router.post('/criar', paletasController.createPersonController);
router.put('/update/:id', paletasController.updatePersonController);
router.delete('/deletar/:id', paletasController.deletePersonController);
module.exports = router;
