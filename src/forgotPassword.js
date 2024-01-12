

// //validate function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); }


function resetpassword() {
  event.preventDefault();
  const forgot_pswd_email = document.getElementById("userEmail").value;

  // Validate form data
  const isValidUserEmail = validateEmail(forgot_pswd_email);

  if (isValidUserEmail) {
    // Check if all fields are valid
    // Prepare data object
    const data = {
      email: forgot_pswd_email,
    };

console.log(data);
    // Clear previous validation feedback if any
    document.getElementById("emailInValidFeedback").innerHTML = "";
    document.getElementById("userEmail").classList.remove("is-invalid");
  //to print msg
  const resetmessageContainer = document.getElementById("resetmessageContainer");
  resetmessageContainer.innerHTML =
            '<p style="color: green;">Reset link sent successfully!</p>';
  

    submitData(data)
      .then((response) => {
        // Handle the response here
        const resetmessageContainer = document.getElementById(
          "resetmessageContainer"
        );

        if (response.success) {
          // Show success message
          resetmessageContainer.innerHTML =
            '<p style="color: green;">Reset link sent successfully!</p>';
        } else {
          // Show failure message
          resetmessageContainer.innerHTML =
            '<p style="color: red;">Reset link sending failed. Please try again.</p>';
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error in submitData:", error);

        // Show error message
        const resetmessageContainer = document.getElementById(
          "resetmessageContainer"
        );
        resetmessageContainer.innerHTML =
          '<p style="color: red;">An error occurred. Please try again later.</p>';
      });
  }
  
  else {
    document.getElementById("emailInValidFeedback").innerHTML =
      '<p style="color: red;">Invalid email entered!</p>';
    document.getElementById("userEmail").classList.add("is-invalid");
  }
// }

}

//redirect page function on clicking signup button
function changepage(){
  event.preventDefault();
  window.location.href = "login.html";
}
///close form
function closeContainer() {
  var createAccountContainer = document.querySelector(".create-account-container");
  createAccountContainer.style.display = 'none';}










  
///////PASSWORD
const users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
  // Add more users as needed
];

function retrievePassword(email) {
  const user = users.find(user => user.email === email);

  if (user) {
    return user.password; // Return the password corresponding to the email
  } else {
    return null; // Return null if the email is not found
  }
}

// Example usage:
const userEmail = 'user1@example.com'; // Replace with the email you want to retrieve the password for
const password = retrievePassword(userEmail);

if (password) {
  console.log(`The password for ${userEmail} is: ${password}`);
} else {
  console.log(`No user found with email ${userEmail}`);
}









////SEND EMAIL
// Function to send an email with the retrieved password
function sendPasswordEmail(toEmail, password) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_email_password',
    },
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: toEmail,
    subject: 'Your Password Recovery',
    text: `Your password is: ${password}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}