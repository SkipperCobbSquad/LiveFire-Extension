(()=>{if("/exam/LoadTestStart.html"===window.location.pathname){const e=window.location.search.split("=")[1];chrome.runtime.sendMessage({status:"setTestID",testID:e})}if(document.querySelector(".question-area")){const e=document.querySelector(".question-area"),t=document.querySelector(".answer_container").children[1].getAttribute("for").split("_")[1];chrome.runtime.sendMessage({status:"quest",questId:t,rawQuest:e.innerHTML})}})();