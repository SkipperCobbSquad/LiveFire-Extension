const io = require('socket.io-client');
const socket = io('http://localhost:5000');
console.log('Hello fucker');

let currentTest;

socket.on('connect',()=>{
    console.log('Hello');
})

chrome.runtime.onMessage.addListener((req, sender, send) => {
  if (req.status === 'setTestID') {
    currentTest = req.testID;
    if (socket.connected) {
      socket.emit('setTestID', req.testID);
    }
  } else if (req.status === 'quest') {
    if (socket.connected) {
      socket.emit('quest', req.questId, req.rawQuest);
    }
  }
  console.log(req);
});
