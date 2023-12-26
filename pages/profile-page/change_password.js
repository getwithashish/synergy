// Handle form submission
document
  .getElementById("changePasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get old and new passwords from the form
    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;

    // Perform validation and send a request to the server to change the password
    // This is a placeholder, and you need to replace it with your server-side logic
    // For example, you can use fetch or XMLHttpRequest to send a request to your server
    // and handle the response accordingly.
    // For security reasons, always perform password change operations on the server side.

    // Simulating a server request (replace this with your actual logic)
    setTimeout(() => {
      alert("Password changed successfully!");
      $("#changePasswordModal").modal("hide"); // Close the modal
    }, 1000);
  });
