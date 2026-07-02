document.addEventListener('DOMContentLoaded', function() {
    var changeButton = document.getElementById('lassan_click');
    var lassan_click = document.getElementById('lassan_click');
    var originalSrc = lassan_click.src;
    var currentImageIndex = 0;
  
    changeButton.addEventListener('click', function() {
      lassan_click.src = 'Images/Dance-Lassan.png';
      currentImageIndex = (currentImageIndex + 1) % 2;
      lassan_click.src = (currentImageIndex === 0) ? originalSrc : 'Images/Dance-Lassan.png';
    });
  });  
