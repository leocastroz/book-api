import express from "express";
import livros from "../routes/livrosRoutes.js";
import autores from "../routes/autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js - rota principal"));
  app.use(express.json(), livros, autores);
};

export default routes;