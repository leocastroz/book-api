import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDataBase();

conexao.on("error", (err) => {
  console.log("Erro na conexão com o DB ->", err);
});

conexao.once("open", () => {
  console.log("Conectado ao DB!!");
});

const app = express();
routes(app);

export default app