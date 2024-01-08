// function validateFullName(fullName) {
//     // Allow letters, spaces, and optional hyphens or apostrophes
//     const regex =  /^[a-zA-Z' -]+$/;
//     return regex.test(fullName); // return true if fullName is valid, false otherwise
//   }
  
  
  
//   function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email); // return true if email is valid, false otherwise
//   }
  
//   function validateMobNumber(number){
//     const regex = /^\d{10}$/;
//     return regex.test(number);
//   }
  
  
  
//   function validateAge(age){
//     const agePattern = /^(0?[1-9]|[1-9][0-9])$/;
//     return agePattern.test(age);
//   }
  
  ///
  function submitBookingForm() {
    event.preventDefault();
      // Get form data
      // const booking_name = document.getElementById("firstName").value;
      // const booking_age= document.getElementById("age").value;
      // const booking_mobnumber = document.getElementById("number").value;
      // const booking_email= document.getElementById("email").value;
      // const booking_nation= document.getElementById("nationality").value;
      // const booking_id= document.getElementById("id").value;
      // const booking_class= document.getElementById("class").value;
      // const booking_quota= document.getElementById("quota").value;
      // const booking_berth= document.getElementById("berth").value;
      // const booking_meal= document.getElementById("meal").value;
      // const booking_coach= document.getElementById("coach").value;
      // const booking_reservation= document.getElementById("reservation").value;


   
      
    
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
      
































      // function validateFullName(fullName) {
      //   // Allow letters, spaces, and optional hyphens or apostrophes
      //   const regex =  /^[a-zA-Z' -]+$/;
      //   return regex.test(fullName); // return true if fullName is valid, false otherwise
      // }
      
      
      
      // function validateEmail(email) {
      //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //   return regex.test(email); // return true if email is valid, false otherwise
      // }
      
      // function validateMobNumber(number){
      //   const regex = /^\d{10}$/;
      //   return regex.test(number);
      // }
      
      
      
      // function validateAge(age){
      //   const agePattern = /^(0?[1-9]|[1-9][0-9])$/;
      //   return agePattern.test(age);
      // }
      
      // ///
      // function submitBookingForm() {
      //   event.preventDefault();
      //     // Get form data
      //     const booking_name = document.getElementById("firstName").value;
      //     const booking_age= document.getElementById("age").value;
      //     const booking_mobnumber = document.getElementById("number").value;
      //     const booking_email= document.getElementById("email").value;
      //     const booking_nation= document.getElementById("nationality").value;
      //     const booking_id= document.getElementById("id").value;
      //     const booking_class= document.getElementById("class").value;
      //     const booking_quota= document.getElementById("quota").value;
      //     const booking_berth= document.getElementById("berth").value;
      //     const booking_meal= document.getElementById("meal").value;
      //     const booking_coach= document.getElementById("coach").value;
      //     const booking_reservation= document.getElementById("reservation").value;

    
    
      
      //   // Validate form data
      //    const isValidBookingName = validatename(booking_name);
      //    const isValidBookingAge = validateAge(booking_age);
      //    const isValidBookingMobnumber = validateMobNumber(booking_mobnumber);
      //    const isValidBookingEmail = validateEmail(booking_email);
      
      //    console.log(isValidBookingName, isValidBookingAge, isValidBookingMobnumber,isValidBookingEmail);
         
      //  if (isValidBookingName||isValidBookingAge||isValidBookingMobnumber||isValidBookingEmail) {
      //    // Check if all fields are valid
      //     // Prepare data object
      //     const bookingdata = {
      //       Name:booking_name,
      //       age: booking_age,
      //       number:booking_mobnumber,
      //       email:booking_email
      //     }
      
      //     console.log( bookingdata);
      // // //remove content
      //     document.getElementById("firstNameInValidFeedback").innerHTML = null;
      //     document.getElementById("ageInvalidFeedback").innerHTML = "";
      //     document.getElementById("emailInValidFeedback").innerHTML = "";
      //     document.getElementById("mobileNumberInValidFeedback").innerHTML = "";
      //     document.getElementById("nationalityInValidFeedback").innerHTML = ""
      
      
      //     // // // Remove is-invalid class
      //     document.getElementById("firstName").classList.remove("is-invalid");
      //     document.getElementById("age").classList.remove("is-invalid");
      //     document.getElementById("email").classList.remove("is-invalid");
      //     document.getElementById("number").classList.remove("is-invalid");
      //     document.getElementById("nationality").classList.remove("is-invalid");
    
      
      //         // Call the external function to submit data
      //         // submitData(bookingdata)
      //         // .then((response) => {
      //         //  // Handle the response here
      //         //   const signupmessageContainer = document.getElementById(
      //         //     "signupmessageContainer"
      //         //   );
        
      //         //   if (response.success) {
      //            // Show success message
      //         //     signupmessageContainer.innerHTML =
      //         //       '<p style="color: green;">Booking successful!</p>';
      //         //   } else {
      //            // Show failure message
      //         //     signupmessageContainer.innerHTML =
      //         //       '<p style="color: red;">Booking failed. Please try again.</p>';
      //         //   }
      //         // })
      //         // .catch((error) => {
      //         //  // Handle error
      //         //   console.error("Error in submitData:", error);
        
      //           //Show error message
      //     //       const signupmessageContainer = document.getElementById(
      //     //         "signupmessageContainer"
      //     //       );
      //     //       signupmessageContainer.innerHTML =
      //     //         '<p style="color: red;">An error occurred. Please try again later.</p>';
      //     //     });
      //     // } else {
      //       // Display validation error messages
      //       if (!isValidBookingName) {
      //         document.getElementById("firstNameInValidFeedback").innerHTML ='<p style="color: red;">Invalid name entered!</p>';
      //         document.getElementById("firstName").classList.add("is-invalid");
      //       }
        
      //       if (!isValidBookingAge) {
      //         document.getElementById("ageInvalidFeedback").innerHTML =
      //           '<span style="color: red;">Invalid age entered!</span>';
      //         document
      //           .getElementById("age")
      //           .classList.add("is-invalid");
      //       }
        
      //       if (!isValidBookingEmail) {
      //         document.getElementById("emailInValidFeedback").innerHTML ='<p style="color: red;">Invalid email entered!</p>';
      //         document.getElementById("email").classList.add("is-invalid");
      //       }
      //       if (!isValidBookingMobnumber) {
      //         document.getElementById("mobileNumberInValidFeedback").innerHTML ='<p style="color: red;">Invalid Mobile number entered!</p>';
      //         document.getElementById("number").classList.add("is-invalid");
      //       }
            
    
      //   }
          
    
           
    
      //     }
        
   