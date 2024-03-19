document.addEventListener('DOMContentLoaded', function() {
    const bulb = document.getElementById('bulb');
    const onButton = document.getElementById('onButton');
    const offButton = document.getElementById('offButton');
  
    onButton.addEventListener('click', function() {
      bulb.style.backgroundColor = 'yellow';
    });
  
    offButton.addEventListener('click', function() {
      bulb.style.backgroundColor = '#ccc';
    });
  });
  