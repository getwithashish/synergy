// Function to validate full name
function validateFullName(fullName: string): boolean {
  // Allow letters, spaces, and optional hyphens or apostrophes
  const regex: RegExp = /^[a-zA-Z' -]+$/;
  return regex.test(fullName); // return true if fullName is valid, false otherwise
}

// Function to validate password
function validatePassword(password: string): boolean {
  const regex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

// Function to validate email
function validateEmail(email: string): boolean {
  const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); // return true if email is valid, false otherwise
}

// Example Usage:
const fullNameValid: boolean = validateFullName("John Doe");
const passwordValid: boolean = validatePassword("SecurePass123!");
const emailValid: boolean = validateEmail("john.doe@example.com");

console.log("Full Name Valid:", fullNameValid);
console.log("Password Valid:", passwordValid);
console.log("Email Valid:", emailValid);
