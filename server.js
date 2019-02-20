const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();

// Iniciando o BD
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});
requireDir("./src/models");

const Product = mongoose.model("Product");

// Primeira rota
app.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Alguma coisa",
    url: "www.google.com"
  });
  return res.send("Hello Davi");
});

app.listen(3001);
