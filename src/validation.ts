// validation.ts
function validateUsername(username: string): boolean {
  const regex = /^[a-zA-Z0-9_-]{4,20}$/;
  return regex.test(username);
}

// It uses a regular expression (regex) to check if the username consists of alphanumeric 
// characters, underscores, or hyphens, and has a length between 4 and 20 characters.

function validatePassword(password: string): boolean {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

// It uses a regular expression (regex) to check if the password meets the following criteria:
// At least one lowercase letter ((?=.*[a-z]))
// At least one uppercase letter ((?=.*[A-Z]))
// At least one digit ((?=.*\d))
// Overall length is at least 8 characters ([a-zA-Z\d]{8,})

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ^: Asserts the start of the string.
// [^\s@]+: Matches one or more characters that are not whitespace (\s) or the at symbol (@).
// @: Matches the at symbol directly.
// [^\s@]+: Matches one or more characters that are not whitespace (\s) or the at symbol (@).
// \.: Matches a literal dot (period).
// [^\s@]+$: Matches one or more characters that are not whitespace (\s) or the at symbol (@) until the end of the string ($).

let result : boolean = validateUsername("arjunnnnnnn");

if(result==true) {
  console.log("valid username");
}
else{
  console.log("invalid password")
}

// Example usage:
let email: string = "exampleemail.fghnj";

if (validateEmail(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}


// import validator from "validator";

// function validateEmail(email: string): boolean {
//   return validator.isEmail(email);
// }

// // Example usage:
// let email: string = "example@email.fghnj";
// if (validateEmail(email)) {
//   console.log("Valid email address");
// } else {
//   console.log("Invalid email address");
// }

