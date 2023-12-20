// Function to submit form
function submitForm() {
  // Get form data
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("inputPassword5").value;

  // Validate form data
  const isValidName = validateFullName(name);
  const isValidPassword = validatePassword(password);
  const isValidEmail = validateEmail(email);

  console.log(isValidName, isValidPassword, isValidEmail);

  if (isValidName && isValidPassword && isValidEmail) {
    // Check if all fields are valid
    // Prepare data object
    const data = {
      name: name,
      email: email,
      password: password,
    };

    console.log("inside authentication.js", data);

    // Clear previous validation feedback
    document.getElementById("nameInValidFeedback").innerHTML = "";
    document.getElementById("passwordInvalidFeedback").innerHTML = "";
    document.getElementById("emailInValidFeedback").innerHTML = "";

    // Remove is-invalid class
    document.getElementById("userName").classList.remove("is-invalid");
    document.getElementById("inputPassword5").classList.remove("is-invalid");
    document.getElementById("userEmail").classList.remove("is-invalid");

    // Call the external function to submit data
    submitData(data)
      .then((response) => {
        // Handle the response here
        const messageContainer = document.getElementById("messageContainer");

        if (response.success) {
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
  } else {
    // Display validation error messages
    if (!isValidName) {
      document.getElementById("nameInValidFeedback").innerHTML =
        '<p style="color: red;">Invalid name entered!</p>';
      document.getElementById("userName").classList.add("is-invalid");
    }

    if (!isValidPassword) {
      document.getElementById("passwordInvalidFeedback").innerHTML =
        '<span style="color: red;">Invalid password entered!</span>';
      document.getElementById("inputPassword5").classList.add("is-invalid");
    }

    if (!isValidEmail) {
      document.getElementById("emailInValidFeedback").innerHTML =
        '<p style="color: red;">Invalid email entered!</p>';
      document.getElementById("userEmail").classList.add("is-invalid");
    }
  }
}
