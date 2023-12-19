function validateFullName(fullName: string): boolean {
  // Allow letters, spaces, and optional hyphens or apostrophes
  const regex = /^[a-zA-Z' -]+$/;
  return regex.test(fullName); //return true if fullName is valid, false otherwise
}
function validatePassword(password: string): boolean {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password); //return true if password is valid, false otherwise
}
function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); // return true if email is valid, false otherwise
}