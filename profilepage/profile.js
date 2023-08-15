const collapseBar = document.querySelector('.collapse-bar');
const collapseBar2 = document.querySelector('.collapse-bar2');
const popupWindow = document.querySelector('.popup-window')
const divBody = document.querySelector('.body')
const NDAselector = document.querySelector('.NDA')
const CDSselector = document.querySelector('.CDS')

const CDS = 'this page is for CDS and only those who select CDS will see this.'
const NDA = 'this page is for NDA and only those who select NDA will see this.'




collapseBar.addEventListener('click', () => {
          popupWindow.classList.toggle('hidden')
});

collapseBar2.addEventListener('click', () => {
          popupWindow.classList.toggle('hidden')
});


NDAselector.addEventListener('click', () => {
          divBody.innerHTML = NDA
});


CDSselector.addEventListener('click', () => {
          divBody.innerHTML = CDS
});



const socket = new WebSocket('ws://https://focus-acad.netlify.app/');

socket.addEventListener('open', (event) => {
          console.log('Connected to server');
});

socket.addEventListener('message', (event) => {
          const chatArea = document.getElementById('chat-area');
          const message = event.data;
          chatArea.innerHTML += `<p>${message}</p>`;
});

const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');

sendButton.addEventListener('click', () => {
          const message = messageInput.value;
          socket.send(message);
          messageInput.value = '';
});


// Backend 
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
          console.log('Client connected');

          socket.on('message', (message) => {
                    server.clients.forEach((client) => {
                              if (client.readyState === WebSocket.OPEN) {
                                        client.send(message);
                              }
                    });
          });
});



