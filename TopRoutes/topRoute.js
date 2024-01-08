// function displayContent(contentType) {
//     const descriptionContent = document.getElementById('descriptionContent');
//     const enquiryContent = document.getElementById('enquiryContent');
//     const contactContent = document.getElementById('contactContent');
  
//     // Hide all content initially
//     descriptionContent.style.display = 'none';
//     enquiryContent.style.display = 'none';
//     contactContent.style.display = 'none';
  
//     // Show content based on the button clicked
//     switch (contentType) {
//       case 'description':
//         descriptionContent.style.display = 'block';
//         break;
//       case 'enquiry':
//         enquiryContent.style.display = 'block';
//         break;
//       case 'contact':
//         contactContent.style.display = 'block';
//         break;
//       default:
//         break;
//     }
//   }
  
//   // Event listeners for the nav links
//   const navLinks = document.querySelectorAll('.nav-link');
//   navLinks.forEach((link) => {
//     link.addEventListener('click', (event) => {
//       event.preventDefault();
  
//       // Remove 'active' class from all links
//       navLinks.forEach((navLink) => {
//         navLink.classList.remove('active');
//       });
  
//       // Add 'active' class to the clicked link
//       event.target.classList.add('active');
  
//       // Call the function to display corresponding content
//       const contentType = event.target.textContent.toLowerCase().replace(' ', '');
//       displayContent(contentType);
//     });
//   });
  

function displayContent(contentType) {
    const content = document.getElementById(contentType);
    
    // Hide all content initially
    const allContents = document.querySelectorAll('.card-body > div');
    allContents.forEach((element) => {
      element.style.display = 'none';
    });
    
    // Show selected content
    content.style.display = 'block';
  }
  
  // Event listeners for the nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
  
      // Remove 'active' class from all links
      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
      });
  
      // Add 'active' class to the clicked link
      event.target.classList.add('active');
  
      // Get the href value and extract the content type
      const hrefValue = event.target.getAttribute('href');
      const contentType = hrefValue.substring(1); // Remove the '#'
  
      // Call the function to display corresponding content
      displayContent(contentType);
    });
  });
  