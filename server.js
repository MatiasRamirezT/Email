const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const page = fs.readFileSync(path.join(__dirname, 'public/index.html'));
const template = fs.readFileSync(path.join(__dirname, 'public/bienvenida.html'));
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  if (req.method === 'GET' && (req.url === '/' || (req.url === '/bienvenida' || req.url === '/bienvenida.html'))) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(req.url === '/' ? page : template);
  }
  if (req.method === 'GET' && (req.url === '/assets/lectura.gif' || req.url === '/assets/lectura-estatica.png')) {
    const file = req.url.endsWith('.gif') ? 'lectura.gif' : 'lectura-estatica.png';
    res.writeHead(200, { 'Content-Type': file.endsWith('.gif') ? 'image/gif' : 'image/png' });
    return res.end(fs.readFileSync(path.join(__dirname, 'public/assets', file)));
  }
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Página no encontrada.');
}).listen(port, () => console.log(`Pausa Lectora disponible en http://localhost:${port}`));
