const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (data) => {
    const message = JSON.parse(data);
    console.log('Mensaje recibido:');
    console.log(`  Nombre:  ${message.name}`);
    console.log(`  Email:   ${message.email}`);
    console.log(`  Asunto:  ${message.subject}`);
    console.log(`  Mensaje: ${message.message}`);
  });

  ws.on('close', () => console.log('Cliente desconectado'));
});

console.log('WebSocket server en ws://localhost:8080');