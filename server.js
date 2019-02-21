const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();
// Permitir acesso a qualquer dominio
app.use(cors());
// Permitir o envio de dados com json
app.use(express.json());

// Iniciando o BD
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});
requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
