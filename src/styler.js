document.querySelector('body').style.background = '#2a2c3e';
document.querySelector('.test-body-background').style.background = '#2a2c3e';
document.querySelector('body').style.color = '#fefefe';

try{
    document.querySelector('.start-test-row').style.background = '#2a2c3e';
    document.querySelector('.instructions-box').style.background = '#2a2c3e';
}catch(err){}

try{
document.querySelector('.question-area').style.background = '#2a2c3e';
document.querySelector('.question-area').style.border = '10px solid #e25822';
document.querySelector('.question-area').style.borderRadius = '20px';
}catch(err){}
try{
document
  .querySelectorAll('.mdc-radio__outer-circle')
  .forEach((e) => (e.style.borderColor = '#e25822'));
}catch(err){}

try{ 
  document
  .querySelectorAll('.mdc-checkbox__background')
  .forEach((e) => (e.style.borderColor = '#e25822'));
}catch(err){}

try{document.querySelector('.test-page-outer').style.background = '#2a2c3e';}catch(err){}
