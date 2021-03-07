if (window.location.pathname === '/exam/LoadTestStart.html') {
  const testID = window.location.search.split('=')[1];
  chrome.runtime.sendMessage({ status: 'setTestID', testID });
}

if (document.querySelector('.question-area')) {
  const raw = document.querySelector('.question-area');
  chrome.runtime.sendMessage({
    status: 'quest',
    rawQuest: raw.innerHTML,
  });
}
