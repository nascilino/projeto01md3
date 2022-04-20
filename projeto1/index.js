const express = require("express");
const connectToDatabase = require("./src/database/database");
const cors = require("cors");
const port = 3000;
const app = express();
const route = require("./src/routes/matrix.routes");

app.use(cors());

app.use(express.json());

connectToDatabase();

app.use("/matrix", route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
