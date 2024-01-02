function changePassword() {
  // Get old and new passwords from the form
  const oldPassword = document.getElementById("oldPassword").value;
  const newPassword = document.getElementById("newPassword").value;

  // Validate password before making the request
  if (!validatePassword()) {
    // Display an error message or take other actions
        showPassNotification("Invalid password. Please check the requirements.", "error");
    // Optionally display an error message or take other actions
    return;
  }

  console.log("Password validated");

  // Make an Axios request to change the password on the server
  axios
    .post("http://your-api-endpoint/change-password", {
      oldPassword: oldPassword,
      newPassword: newPassword,
    })
    .then((response) => {
      // Handle success (you can update UI, show success message, etc.)
      console.log(response.data);
      showPassNotification("Password changed successfully!");
    })
    .catch((error) => {
      // Handle error (you can update UI, show error message, etc.)
      console.error("Error changing password:", error);
      showPassNotification(
        "Error changing password. Please try again.",
        "error"
      );
    });
}

// Function to validate password
function validatePassword() {
  const passwordInput = document.getElementById("newPassword");
  const password = passwordInput.value;

  // Define the password requirements
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

  // Check if the password meets all requirements
  return (
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSpecialChar
  );
}

function showPassNotification(message, type = "success") {
  // const passnotification = document.getElementById("passnotification");
  // passnotification.textContent = message;
  // passnotification.className = `alert alert-${type} mt-3`;
  // passnotification.style.display = "block";

  const passnotification = document.getElementById("passnotification");
  passnotification.textContent = message;
  passnotification.style.display = "block";

  // Hide the notification after 3 seconds
  setTimeout(function () {
    passnotification.style.display = "none";
  }, 3000);
}
