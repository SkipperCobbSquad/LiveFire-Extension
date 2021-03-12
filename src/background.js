const io = require('socket.io-client');
const socket = io('http://localhost:5000');
console.log('Hello fucker');

let currentTest;
// document.querySelector('#h').innerText = 'Siema byczku'

socket.on('connect', () => {
  console.log('Hello');
});

socket.on('answers', (answ) => {
  console.log(answ);
});

chrome.runtime.onMessage.addListener((req, sender, send) => {
  if (req.status === 'setTestID') {
    currentTest = req.testID;
    if (socket.connected) {
      socket.emit('setTestID', req.testID);
    }
  } else if (req.status === 'quest') {
    if (socket.connected) {
      socket.emit('quest', req.rawQuest);
    }
  }
  console.log(req);
});
