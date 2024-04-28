import http from 'http';

const PORT = 7000;

const rotas = {
  "/": "Rota raiz",
  "/sobre": "Rota sobre",
  "/livros": "Rota livros",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(rotas[req.url] || "Rota não encontrada");
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});