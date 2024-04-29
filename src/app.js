import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import livro from "../src/models/Livro.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (err) => {
  console.log("Erro na conexão com o DB ->", err);
});

conexao.once("open", () => {
  console.log("Conectado ao DB!!");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
  const index = getLivroById(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = getLivroById(req.params.id);
  livros[index] = req.body;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = getLivroById(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("livros deletado com sucesso!");
});

export default app