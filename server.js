const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const page = fs.readFileSync(path.join(__dirname, 'public/index.html'));
const template = fs.readFileSync(path.join(__dirname, 'public/bienvenida.html'), 'utf8');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  const reply = (status, body) => {
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(body));
  };
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(page);
  }
  if (req.method !== 'POST' || req.url !== '/suscribir') return reply(404, { error: 'Ruta no encontrada.' });
  let body = '';
  req.on('data', chunk => {
    body += chunk;
    if (body.length > 4096) req.destroy();
  });
  req.on('end', async () => {
    let email;
    try { email = JSON.parse(body).email; } catch { return reply(400, { error: 'Solicitud inválida.' }); }
    if (typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return reply(400, { error: 'Escribe un correo válido.' });
    }
    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM) {
      return reply(503, { error: 'El servicio de correo aún no está configurado.' });
    }
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: process.env.EMAIL_FROM, to: [email.trim()], subject: '¡Bienvenido a Pausa Lectora!', html: template })
      });
      if (!response.ok) return reply(502, { error: 'No pudimos enviar el correo. Inténtalo de nuevo.' });
      return reply(200, { message: '¡Listo! Revisa tu correo de bienvenida.' });
    } catch {
      return reply(502, { error: 'No pudimos conectar con el servicio de correo.' });
    }
  });
}).listen(port, () => console.log(`Pausa Lectora disponible en http://localhost:${port}`));
