const io = require('socket.io-client');
const socket = io('http://localhost:5000');
console.log('Hello fucker');

let currentTest;
// document.querySelector('#h').innerText = 'Siema byczku'

socket.on('connect', () => {
  console.log('Hello');
  if (currentTest) {
    socket.emit('setTestID', currentTest);
  }
});

socket.on('answers', (answ) => {
  console.log(answ);
  // chrome.runtime.sendMessage(answ)
  chrome.tabs.query({active: true}, function(tabs) {
    const to = tabs.find(a => a.url = "https://www.testportal.net/exam/DoStartTest.html");
    console.log(to.id);
    chrome.tabs.sendMessage(to.id, answ);
  });
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
