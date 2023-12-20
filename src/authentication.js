// Function to submit form
function submit_signup_Form() {
  // Get form data
  const sign_up_name = document.getElementById("signupuserName").value;
  const sign_up_email = document.getElementById("signupuserEmail").value;
  const sign_up_password = document.getElementById("signupinputPassword5").value;

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
    document.getElementById("signupinputPassword5").classList.remove("is-invalid");
    document.getElementById("signupuserEmail").classList.remove("is-invalid");

    // Call the external function to submit data
    submitData(signupdata)
      .then((response) => {
        // Handle the response here
        const signupmessageContainer = document.getElementById(
          "signupmessageContainer"
        );

        if (response.success) {
          // Show success message
          signupmessageContainer.innerHTML =
            '<p style="color: green;">Registration successful!</p>';
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
