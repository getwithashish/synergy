// profile.js

document.addEventListener("DOMContentLoaded", function () {
  // Fetch user information from the server using Axios
  fetchUserData();
});

function fetchUserData() {
  // Make an API request using Axios
  // Replace the URL with your actual API endpoint
  axios
    .get("https://your-api-endpoint.com/user")
    .then((response) => {
      // Update HTML content with user information
      updateProfile(response.data);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

function updateProfile(user) {
  // Update HTML elements with user information
  document.getElementById("passengerName").innerText = user.passengerName;
  document.getElementById("gender").innerText = user.gender;
  document.getElementById("dateOfBirth").innerText = user.dateOfBirth;
  document.getElementById("isdMobile").innerText = user.isdMobile;
  document.getElementById("country").innerText = user.country;
  document.getElementById("email").innerText = user.email;
  document.getElementById("residentialAddress").innerText =
    user.residentialAddress;
  document.getElementById("officeAddress").innerText = user.officeAddress;
}
