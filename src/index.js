 
const http = require('http');
const { WebSocketServer } = require('ws');
const app = require('./app');
const config = require('./config/db.config');

// Create HTTP server and attach the app (express)
const server = http.createServer(app);

// Initialize WebSocket server on the same HTTP server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);

        // Broadcast message to all connected clients
        wss.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
