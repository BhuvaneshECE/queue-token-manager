# Smart Token

A real-time token management system built with Node.js, Express, and Socket.IO. Clients can request a new token number and call the next token, with every connected user updated instantly.

## Features
- Generate sequential token numbers
- Call the next token in real time
- Live updates to all connected clients via WebSockets
- Static frontend served from the `public` folder

## Tech Stack
- Node.js
- Express 5
- Socket.IO 4
- Nodemon (dev)

## Installation
git clone https://github.com/<your-username>/smart-token.git
cd smart-token
npm install

## Usage
Start the server:
npm start

Run in development mode (auto-restart):
npm run dev

Open http://localhost:3000 in your browser.

## Socket Events
| Event | Direction | Description |
|-------|-----------|-------------|
| `getToken` | Client → Server | Request a new token |
| `newToken` | Server → All | Broadcasts the new token number |
| `callNext` | Client → Server | Call the current token |
| `callToken` | Server → All | Broadcasts the token being called |

## Project Structure
smart-token/
├── public/          # Frontend files
├── server.js        # Express + Socket.IO server
├── package.json
└── package-lock.json

## License
ISC
