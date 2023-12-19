// Define the data type
interface FormData {
  name: string;
  email: string;
  password: string;
}

// Function to submit form
function submitForm() {
  // Get form data
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  // Prepare data object
  const data: FormData = {
    name: name,
    email: email,
    password: password,
  };

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
}