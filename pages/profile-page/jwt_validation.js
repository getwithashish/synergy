

// Check if the user is signed in (JWT token is present in localStorage)
var jwtToken = localStorage.getItem("jwt");

console.log("jwt token is ",jwtToken);

// Check the validity of the token (you may have your own logic here)
var isValidToken = jwtToken !== null && jwtToken !== undefined;

// Redirect to index.html if the user is not signed in
if (!isValidToken) {
  console.log("User is not signed in. Redirecting to index.html.");
  // Redirect to index.html
  window.location.href = "/index.html";
}
