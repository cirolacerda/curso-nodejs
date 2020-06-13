const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Permite utilizar o formato JSON na aplicação
app.use(express.json());

// Permite acesso externo 
app.use(cors());

// Iniciando o MongoDB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
     { useNewUrlParser: true, useUnifiedTopology:true}
);
requireDir('./src/models');


// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);