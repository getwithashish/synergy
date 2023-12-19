// Define the data type
interface MyFormData {
  name: string;
  email: string;
  password: string;
}

// Function to validate full name
function validateFullName(fullName: string): boolean {
  // Allow letters, spaces, and optional hyphens or apostrophes
  const regex = /^[a-zA-Z' -]+$/;
  return regex.test(fullName);
}

// Function to validate password
function validatePassword(password: string): boolean {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

// Function to validate email
function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to submit form
function submitForm(): void {
  // Get form data
  const name: string = (document.getElementById("userName") as HTMLInputElement)
    .value;
  const email: string = (
    document.getElementById("userEmail") as HTMLInputElement
  ).value;
  const password: string = (
    document.getElementById("inputPassword5") as HTMLInputElement
  ).value;

  // Validate form data
  const isValidName: boolean = validateFullName(name);
  const isValidPassword: boolean = validatePassword(password);
  const isValidEmail: boolean = validateEmail(email);

  console.log(isValidName, isValidPassword, isValidEmail);

  if (isValidName && isValidPassword && isValidEmail) {
    // Check if all fields are valid
    // Prepare data object
    const data: MyFormData = {
      name: name,
      email: email,
      password: password,
    };

    console.log("inside authentication.ts", data);

    // Clear previous validation feedback
    document.getElementById("nameInValidFeedback")!.innerHTML = "";
    document.getElementById("passwordInvalidFeedback")!.innerHTML = "";
    document.getElementById("emailInValidFeedback")!.innerHTML = "";

    // Remove is-invalid class
    document.getElementById("userName")!.classList.remove("is-invalid");
    document.getElementById("inputPassword5")!.classList.remove("is-invalid");
    document.getElementById("userEmail")!.classList.remove("is-invalid");

    // Call the external function to submit data
    submitData(data)
      .then((response) => {
        // Handle the response here
        const messageContainer: HTMLElement | null =
          document.getElementById("messageContainer");

        if (response.success) {
          // Show success message
          messageContainer!.innerHTML =
            '<p style="color: green;">Registration successful!</p>';
        } else {
          // Show failure message
          messageContainer!.innerHTML =
            '<p style="color: red;">Registration failed. Please try again.</p>';
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error in submitData:", error);

        // Show error message
        const messageContainer: HTMLElement | null =
          document.getElementById("messageContainer");
        messageContainer!.innerHTML =
          '<p style="color: red;">An error occurred. Please try again later.</p>';
      });
  } else {
    // Display validation error messages
    if (!isValidName) {
      document.getElementById("nameInValidFeedback")!.innerHTML =
        '<p style="color: red;">Invalid name entered!</p>';
      document.getElementById("userName")!.classList.add("is-invalid");
    }

    if (!isValidPassword) {
      document.getElementById("passwordInvalidFeedback")!.innerHTML =
        '<span style="color: red;">Invalid password entered!</span>';
      document.getElementById("inputPassword5")!.classList.add("is-invalid");
    }

    if (!isValidEmail) {
      document.getElementById("emailInValidFeedback")!.innerHTML =
        '<p style="color: red;">Invalid email entered!</p>';
      document.getElementById("userEmail")!.classList.add("is-invalid");
    }
  }
}

// Assume that there is a function named submitData with the following signature
// function submitData(data: MyFormData): Promise<{ success: boolean }>;

// You can include the submitData function definition here
