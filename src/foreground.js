if (window.location.pathname === '/exam/LoadTestStart.html') {
  const testID = window.location.search.split('=')[1];
  chrome.runtime.sendMessage({ status: 'setTestID', testID });
}

if (document.querySelector('.question-area')) {
  const raw = document.querySelector('.question-area');
  const id = document.querySelector('.answer_container').children[1].getAttribute('for').split('_')[1]
  chrome.runtime.sendMessage({ status: 'quest', questId: id , rawQuest: raw.innerHTML});
}
