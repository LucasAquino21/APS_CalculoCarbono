const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const calcPegadaCarbonoController = require("./controllers/calcPegadaCarbonoController");

app.use(bodyParser.json());

app.post("/pegadacarbono", calcPegadaCarbonoController.create);

app.get("/", (req, res) => {
  res.send("<h1> Calculadora da Pegada de Carbono </h1>");
});

app.listen(12000, () => {
  console.log("Servidor Iniciado!");
});
