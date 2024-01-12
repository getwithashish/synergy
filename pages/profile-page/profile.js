// profile.js

document.addEventListener("DOMContentLoaded", function () {
  // Fetch user information from the server using Axios
  fetchUserData();
});

function fetchUserData() {
  // Make an API request using Axios
  // Replace the URL with your actual API endpoint
  axios
    .get("http://localhost:3000/getUserData?email=ashish@gmail.com")
    .then((response) => {
      console.log(response)
      // Update HTML content with user information
      updateProfile(response.data);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

function updateProfile(user) {
  // Update HTML elements with user information
  document.getElementById("passengerName").innerText = user.name;
  document.getElementById("gender").innerText = user.gender;
  document.getElementById("dateOfBirth").innerText = user.dob;
  document.getElementById("isdMobile").innerText = user.mobile;
  document.getElementById("country").innerText = user.country;
  document.getElementById("email").innerText = user.email;
  document.getElementById("residentialAddress").innerText =
    user.residentialAddress;
  document.getElementById("officeAddress").innerText = user.officeAddress;
}


// from below functions editing user account details starts

function saveOfficeAddress() {
  // Get the new office address from the input field
  const newOfficeAddress = document.getElementById("newOfficeAddress").value;

  // Update the server with the new information (you should implement this function)
  updateServerWithNewOfficeAddress(newOfficeAddress);

  // Update the span tag on the page
  document.getElementById("officeAddress").innerText = newOfficeAddress;

  // Close the modal
  $("#editOfficeAddressModal").modal("hide");
}

// You need to implement this function to update the server with the new office address
function updateServerWithNewOfficeAddress(newOfficeAddress) {
  // Use Axios or fetch to send the updated data to the server
  // Example with Axios:
  // axios.post('/update-office-address', { newOfficeAddress })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}


function saveResidentialAddress() {
  // Get the new office address from the input field
  const newResidentialAddress = document.getElementById("newResidentialAddress").value;

  // Update the server with the new information (you should implement this function)
  updateServerWithNewResidentialAddress(newResidentialAddress);

  // Update the span tag on the page
  document.getElementById("residentialAddress").innerText =
    newResidentialAddress;

  // Close the modal
  $("#editResidentialAddressModal").modal("hide");
}

// You need to implement this function to update the server with the new office address
function updateServerWithNewResidentialAddress(newResidentialAddress) {
  // Use Axios or fetch to send the updated data to the server
  // Example with Axios:
  // axios.post('/update-office-address', { newOfficeAddress })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}

function validateEmail() {
  const emailInput = document.getElementById("newEmailAddress");
  const emailError = document.getElementById("emailError");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

  if (!isValidEmail) {
    emailError.textContent = "Invalid email address";
  } else {
    emailError.textContent = "";
  }
}


function saveEmailAddress() {

  const emailError = document.getElementById("emailError").textContent;
  
    if (emailError) {
        // Display an alert or handle the invalid case
        console.log("Invalid email. Please correct before saving.");
        return;
    }
  // Get the new office address from the input field
  const newEmailAddress = document.getElementById("newEmailAddress").value;

  // Update the server with the new information (you should implement this function)
  updateServerWithNewEmailAddress(newEmailAddress);

  // Update the span tag on the page
  document.getElementById("email").innerText = newEmailAddress;

  // Close the modal
  $("#editEmailAddressModal").modal("hide");
}

// You need to implement this function to update the server with the new office address
function updateServerWithNewEmailAddress(newEmailAddress) {
  // Use Axios or fetch to send the updated data to the server
  // Example with Axios:
  // axios.post('/update-office-address', { newOfficeAddress })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}



function saveCountryAddress() {
  // Get the new office address from the input field
  const newCountryAddress = document.getElementById("newCountryAddress").value;

  // Update the server with the new information (you should implement this function)
  updateServerWithNewCountryAddress(newCountryAddress);

  // Update the span tag on the page
  document.getElementById("country").innerText = newCountryAddress;

  // Close the modal
  $("#editCountryModal").modal("hide");
}

// You need to implement this function to update the server with the new office address
function updateServerWithNewCountryAddress(newCountryAddress) {
  // Use Axios or fetch to send the updated data to the server
  // Example with Axios:
  // axios.post('/update-office-address', { newOfficeAddress })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}



function saveMobileAddress() {
  // Get the new office address from the input field
  const newMobileAddress = document.getElementById("newMobileAddress").value;

  // Update the server with the new information (you should implement this function)
  updateServerWithNewMobileAddress(newMobileAddress);

  // Update the span tag on the page
  document.getElementById("isdMobile").innerText = newMobileAddress;

  // Close the modal
  $("#editMobileModal").modal("hide");
}

// You need to implement this function to update the server with the new office address
function updateServerWithNewMobileAddress(newMobileAddress) {
  // Use Axios or fetch to send the updated data to the server
  // Example with Axios:
  // axios.post('/update-office-address', { newOfficeAddress })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}


function saveDOBAddress() {
  // Get the new office address from the input field
  const newDOBAddress = document.getElementById("newDOBAddress").value;

  // Update the server with the new information (you should implement this function)
  updateServerWithNewDOBAddress(newDOBAddress);

  // Update the span tag on the page
  document.getElementById("dateOfBirth").innerText = newDOBAddress;

  // Close the modal
  $("#editDOBModal").modal("hide");
}

// You need to implement this function to update the server with the new office address
function updateServerWithNewDOBAddress(newDOBAddress) {
  // Use Axios or fetch to send the updated data to the server
  // Example with Axios:
  // axios.post('/update-office-address', { newOfficeAddress })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}



function saveGenderAddress() {
  // Get the new office address from the input field
  const newGenderAddress = document.getElementById("newGenderAddress").value;

  // Update the server with the new information (you should implement this function)
  updateServerWithNewGenderAddress(newGenderAddress);

  // Update the span tag on the page
  document.getElementById("gender").innerText = newGenderAddress;

  // Close the modal
  $("#editGenderModal").modal("hide");
}

// You need to implement this function to update the server with the new office address
function updateServerWithNewGenderAddress(newGenderAddress) {
  // Use Axios or fetch to send the updated data to the server
  // Example with Axios:
  // axios.post('/update-office-address', { newOfficeAddress })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}

function validateFullName() {
  const fullNameInput = document.getElementById("newPassengerName");
  const fullNameError = document.getElementById("fullNameError");

  // Add your full name validation logic here
  // Example: Check for minimum length
  const isValidLength = fullNameInput.value.trim().length >= 3;

  // Check if the full name contains numbers
  const containsNumbers = /\d/.test(fullNameInput.value);

    if (!isValidLength) {
      fullNameError.textContent =
        "Full name must be at least 3 characters long";
    } else if (containsNumbers) {
      fullNameError.textContent = "Full name should not contain numbers";
    } else {
      fullNameError.textContent = "";
    }
}


function savePassengerName() {

   const fullNameError = document.getElementById("fullNameError").textContent;
   if (fullNameError) {
     // Display an alert or handle the invalid case
     console.log("Invalid full name. Please correct before saving.");
     return;
   }
  // Get the new office address from the input field
  const newPassengerName = document.getElementById("newPassengerName").value;

  // Update the server with the new information (you should implement this function)
  updateServerWithNewPassengerName(newPassengerName);

  // Update the span tag on the page
  document.getElementById("passengerName").innerText = newPassengerName;

  // Close the modal
  $("#editPassengerNameModal").modal("hide");
}

// You need to implement this function to update the server with the new office address
function updateServerWithNewPassengerName(newPassengerName) {
  // Use Axios or fetch to send the updated data to the server
  // Example with Axios:
  // axios.post('/update-office-address', { newOfficeAddress })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}


// when edit icon is pressed we get the content displayed in the span in input box
    function prepareModalContent(spanId, newId) {
      // Get the content from the span
      var spanContent = document.getElementById(spanId).textContent.trim();

      console.log("span content is")

      // Set the content in the modal input field
      document.getElementById(newId).value = spanContent;
    }