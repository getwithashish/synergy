// Submit Signup Form
function submitSignupForm() {
  // Get form data
  const sign_up_name = document.getElementById("signupuserName").value;
  const sign_up_email = document.getElementById("signupuserEmail").value;
  const sign_up_password = document.getElementById(
    "signupinputPassword5"
  ).value;

  // Validate form data
  const isValidSignUpName = validateFullName(sign_up_name);
  const isValidSignUpPassword = validatePassword(sign_up_password);
  const isValidSignUpEmail = validateEmail(sign_up_email);

  console.log(isValidSignUpName, isValidSignUpPassword, isValidSignUpEmail);

  if (isValidSignUpName && isValidSignUpPassword && isValidSignUpEmail) {
    // Check if all fields are valid
    // Prepare data object
    const signupdata = {
      name: sign_up_name,
      email: sign_up_email,
      password: sign_up_password,
    };

    console.log("inside authentication.js", signupdata);

    // Clear previous validation feedback
    document.getElementById("signupnameInValidFeedback").innerHTML = "";
    document.getElementById("signuppasswordInvalidFeedback").innerHTML = "";
    document.getElementById("signupemailInValidFeedback").innerHTML = "";

    // Remove is-invalid class
    document.getElementById("signupuserName").classList.remove("is-invalid");
    document
      .getElementById("signupinputPassword5")
      .classList.remove("is-invalid");
    document.getElementById("signupuserEmail").classList.remove("is-invalid");

    signup(signupdata)
    .then((response) => {
      // Handle the response here
      const signupmessageContainer = document.getElementById(
        "signupmessageContainer"
      );

      if (response.status == "Success") {
        // Show success message
        signupmessageContainer.innerHTML =
          '<p style="color: green;">Registration successful!</p>';
          closesignupForm();
      } else {
        // Show failure message
        signupmessageContainer.innerHTML =
          '<p style="color: red;">Registration failed. Please try again.</p>';
      }
    })
    .catch((error) => {
      // Handle error
      console.error("Error in submitData:", error);

      // Show error message
      const signupmessageContainer = document.getElementById(
        "signupmessageContainer"
      );
      signupmessageContainer.innerHTML =
        '<p style="color: red;">An error occurred. Please try again later.</p>';
    });

    
  } else {
    // Display validation error messages
    if (!isValidSignUpName) {
      document.getElementById("signupnameInValidFeedback").innerHTML =
        '<p style="color: red;">Invalid name entered!</p>';
      document.getElementById("signupuserName").classList.add("is-invalid");
    }

    if (!isValidSignUpPassword) {
      document.getElementById("signuppasswordInvalidFeedback").innerHTML =
        '<span style="color: red;">Invalid password entered!</span>';
      document
        .getElementById("signupinputPassword5")
        .classList.add("is-invalid");
    }

    if (!isValidSignUpEmail) {
      document.getElementById("signupemailInValidFeedback").innerHTML =
        '<p style="color: red;">Invalid email entered!</p>';
      document.getElementById("signupuserEmail").classList.add("is-invalid");
    }
  }
}

// Function to submit form
function submitLoginForm() {
  // Get form data
  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPassword").value;

  // Validate form data
  const isValidPassword = validatePassword(password);
  const isValidEmail = validateEmail(email);

  console.log(isValidPassword, isValidEmail);

  if (isValidPassword && isValidEmail) {
    // Check if all fields are valid
    // Prepare data object
    const loginData = {
      email: email,
      password: password,
    };

    console.log("inside authenticate_login.js", loginData);

    // Clear previous validation feedback
    document.getElementById("passwordInvalidFeedback").innerHTML = "";
    document.getElementById("emailInValidFeedback").innerHTML = "";

    // Remove is-invalid class
    document.getElementById("userPassword").classList.remove("is-invalid");
    document.getElementById("userEmail").classList.remove("is-invalid");

    signin(loginData)
    .then((response) => {
      // Handle the response here
      const messageContainer = document.getElementById("loginmessageContainer");

      if (response.status == "Success") {
        // Show success message
        messageContainer.innerHTML =
          '<p style="color: green;">Registration successful!</p>';
      } else {
        // Show failure message
        messageContainer.innerHTML =
          '<p style="color: red;">Registration failed. Please try again.</p>';
      }
    })
    .catch((error) => {
      // Handle error
      console.error("Error in submitData:", error);

      // Show error message
      const messageContainer = document.getElementById("messageContainer");
      messageContainer.innerHTML =
        '<p style="color: red;">An error occurred. Please try again later.</p>';
    });

    // Call the external function to submit data
    // submitData(data)
    //   .then((response) => {
    //     // Handle the response here
    //     const messageContainer = document.getElementById("messageContainer");

    //     if (response.success) {
    //       // Show success message
    //       messageContainer.innerHTML =
    //         '<p style="color: green;">Registration successful!</p>';
    //     } else {
    //       // Show failure message
    //       messageContainer.innerHTML =
    //         '<p style="color: red;">Registration failed. Please try again.</p>';
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     console.error("Error in submitData:", error);

    //     // Show error message
    //     const messageContainer = document.getElementById("messageContainer");
    //     messageContainer.innerHTML =
    //       '<p style="color: red;">An error occurred. Please try again later.</p>';
    //   });
  } else {
    // Display validation error messages

    if (!isValidPassword) {
      document.getElementById("passwordInvalidFeedback").innerHTML =
        '<span style="color: red;">Invalid password entered!</span>';
      document.getElementById("userPassword").classList.add("is-invalid");
    }

    if (!isValidEmail) {
      document.getElementById("emailInValidFeedback").innerHTML =
        '<p style="color: red;">Invalid email entered!</p>';
      document.getElementById("userEmail").classList.add("is-invalid");
    }
  }
}

function toggleLoginForm() {
  var loginContainer = document.querySelector(".login-container");
  var signupContainer = document.querySelector(".signup-container");

  if (loginContainer.style.display === "block") {
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
  } else {
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
  }
}

function closeLoginForm() {
  var loginContainer = document.querySelector(".login-container");

  loginContainer.style.display = "none";
}

function closesignupForm() {
  var signupContainer = document.querySelector(".signup-container");

  signupContainer.style.display = "none";
}




/////////POST FOR CREATE ACCOUNT

function submitCreateAccountData(signupdata) {
  return fetch('URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupdata),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
    
  })
  .then((signupdata) => {
    console.log(signupdata);
    // Check if the response contains a token field
    if (signupdata.token) {
      // parse jwt token
      const parsedToken = parseJwt(signupdata.token);
      for (const key in parsedToken) {
        if (parsedToken.hasOwnProperty(key)) {
          localStorage.setItem(key, parsedToken[key]);
        }
      }
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    throw new Error('Failed to send data to the server');
  });
}





/////POST FOR  LOGIN
function submitLoginData(data) {
  return fetch('URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // console.log(data);
    return response.json();
    
  })
  .then((data) => {
    console.log(data);
    // Check if the response contains a token field
    if (data.token) {
      // parse the token
      const parsedToken = parseJwt(data.token);

// Store the payload in local storage as key-value pairs
for (const key in parsedToken) {
  if (parsedToken.hasOwnProperty(key)) {
    localStorage.setItem(key, parsedToken[key]);
  }
}
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    throw new Error('Failed to send data to the server');
  });
}




//function to parse jwt

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
}