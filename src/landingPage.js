document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('myPopup');
    const linecut = document.getElementById('line-cut');
    const mainContainer = document.getElementById('main-container');
    const initialLodingContainer = document.getElementById('initial-loading-div');

    mainContainer.style.display = 'none';
    // Show the popup initially
    popup.style.display = 'block';

    // Hide Line cut initially
    linecut.style.display = 'none';

    setTimeout(function(){
      linecut.style.display = 'block';
    }, 300);
    // Hide the popup after 2 seconds
    setTimeout(function() {
      initialLodingContainer.remove();
      mainContainer.style.display = 'block';
    }, 700);
  });
