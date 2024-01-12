
  function submitBookingForm() {
    event.preventDefault();
   
      
    
    validateForm(); 
    validateAndSubmit();
    validateGender();
    validateName() ;
   
    validateMobileNumber();
    validateEmail();
    validateAge();
    // Validate form data
  
  
      console.log( bookingdata);
 

    }
      

  

      
    
///SELECT FIELD VALIDATION

    function validateForm() {
        var selects = document.querySelectorAll('select[required]');
    
        selects.forEach(function(select) {
            var feedbackClass = select.id + 'InValidFeedback';
            var feedbackElements = document.getElementsByClassName(feedbackClass);
            select.classList.remove('is-invalid');
    
            if (select.value === '' || select.value === null || select.value === undefined) {
                for (var i = 0; i < feedbackElements.length; i++) {
                    feedbackElements[i].textContent = 'Please select an option.';
                }
                select.classList.add('is-invalid');}})}
    


                //FILE UPLOAD

    function validateAndSubmit() {
      const fileInput = document.getElementById('fileUpload');
      const invalidFeedback = document.getElementById('fileInValidFeedback');
    
      if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        invalidFeedback.style.display = 'block'; // Show error message
      } else {
        invalidFeedback.style.display = 'none'; // Hide error message if a file is selected
       
      }
    }

    //GENDER
    function validateGender() {
      const genderInputs = document.getElementsByName('gender');
      const invalidFeedback = document.getElementById('genderInvalidFeedback');
      let genderSelected = false;
    
      for (const input of genderInputs) {
        if (input.checked) {
          genderSelected = true;
          break;
        }
      }
    
      if (!genderSelected) {
        invalidFeedback.style.display = 'block'; // Show error message
      } else {
        invalidFeedback.style.display = 'none'; // Hide error message if a gender is selected
        // Gender is valid, proceed with your logic
        // For example, you might perform further actions based on the selection
        console.log('Gender is selected');
     
      }
      return genderInputs;

    }

   
   


      function validateName() {
        const nameInput = document.getElementById('firstName');
        const nameInvalidFeedback = document.getElementById('firstNameInvalidFeedback');
      
        let name = nameInput.value.trim();
      
        // Capitalize the first letter
        name = name.charAt(0).toUpperCase() + name.slice(1);
      
        if (!name) {
          nameInput.classList.add('is-invalid');
          nameInvalidFeedback.style.display = 'block';
        } else {
          nameInput.classList.remove('is-invalid');
          nameInvalidFeedback.style.display = 'none';
          console.log('Name is valid:', name);
        }
      }
      function validateMobileNumber() {
        const numberInput = document.getElementById('number');
        const mobileNumberInvalidFeedback = document.getElementById('mobileNumberInValidFeedback');
        const mobileNumberRegex = /^[0-9]{10}$/;
      
        if (!numberInput.value.match(mobileNumberRegex)) {
          numberInput.classList.add('is-invalid');
          mobileNumberInvalidFeedback.style.display = 'block';
        } else {
          numberInput.classList.remove('is-invalid');
          mobileNumberInvalidFeedback.style.display = 'none';
         
          console.log('Mobile number is valid');
        }
      }
      

      function validateEmail() {
        const emailInput = document.getElementById('email');
        const emailInvalidFeedback = document.getElementById('emailInvalidFeedback');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (!emailInput.value.match(emailRegex)) {
          emailInput.classList.add('is-invalid');
          emailInvalidFeedback.style.display = 'block';
        } else {
          emailInput.classList.remove('is-invalid');
          emailInvalidFeedback.style.display = 'none';
          console.log('Email is valid');
        }
      }

      

      function validateAge() {
        const ageInput = document.getElementById('age');
        const ageInvalidFeedback = document.getElementById('ageInvalidFeedback');
        const enteredAge = ageInput.value.trim();
      
        if (enteredAge === '' || isNaN(enteredAge) || enteredAge <= 0 || enteredAge > 150) {
          ageInput.classList.add('is-invalid');
          ageInvalidFeedback.style.display = 'block';
        } else {
          ageInput.classList.remove('is-invalid');
          ageInvalidFeedback.style.display = 'none';
          
          console.log('Age is valid');
        }
      }
      































