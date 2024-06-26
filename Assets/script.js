// we need to have a password generator that consists of a combination of lower case, uppecase, numbers, and or special symbols
// need to ask or prompt the user for these different options

const generateButton = document.getElementById("generate");
const passwordBox = document.getElementById("password");

// Array of lower case Characters to be included in password
var lowercasedChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of upper case Characters to be included in password
var uppercasedChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Array of special case Characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numbers to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// This is to combine all character types into one array
var allCharacters =
  lowercasedChars + uppercasedChars + specialCharacters + numericCharacters;
console.log(allCharacters);

// Function for getting a random index from all the arrays
function getRandomIndex(arr) {
  console.log(arr);
  return Math.floor(Math.random() * arr.length);
}

var randomNumericChar = getRandomIndex(numericCharacters);
console.log(randomNumericChar);

// Function to build the password
function buildPassword() {
  console.log("building password...");
  let password = "";
  // prompt the user for password length
  let passwordLength = parseInt(
    prompt(
      "How long would you like your password to be? (It Must be between 8 and 128 characters)"
    )
  );

  // Code to check the password lenght input by the user if its less than 8 or more than 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your Password length must be between 8 and 128 characters.");
    console.log("Password length too short or too long");
    return;
  }

  // a random value is being generated from the lowercase character length, and from the 26 letters it will add a random value in the password
  var lowercasePrompt = confirm(
    "Would you like your password to have lowercase characters?"
  );
  // when the password is generated it will add a random value in the password, selected from the uppercase character length
  var uppercasePrompt = confirm(
    "Would you like your password to have uppercase characters?"
  );
  // when the password is generated it will add a random value in the password, selected from the numeric character length
  var numbersPrompt = confirm(
    "Would you like your password to have numeric characters?"
  );
  // when the password is generated it will add a random value in the password, selected from the special character length
  var specialCharsPrompt = confirm(
    "Would you like your password to have special characters?"
  );

  // This is to check if at least one character type is selected, if the user doesn't select any options and clicks no then an alert will pop up
  if (
    !lowercasePrompt &&
    !uppercasePrompt &&
    !numbersPrompt &&
    !specialCharsPrompt
  ) {
    alert("Cannot build password with no options!");
    return null;
  }

  let allCharacters = [];

  // This is to join/concatenate all the selected character types
  if (lowercasePrompt) allCharacters = allCharacters.concat(lowercasedChars);
  if (uppercasePrompt) allCharacters = allCharacters.concat(uppercasedChars);
  if (numbersPrompt) allCharacters = allCharacters.concat(numericCharacters);
  if (specialCharsPrompt)
    allCharacters = allCharacters.concat(specialCharacters);

  //This for loop generates the password randomly from all the selected character types
  for (let i = 0; i < passwordLength; i++) {
    password += allCharacters[getRandomIndex(allCharacters)];
  }

  // The password textcontent will be displayed in the box
  passwordBox.textContent = password;
  console.log(password);
}
// Event listener for the generate password button, once the user clicks the button all the password building prompts will appear
generateButton.addEventListener("click", buildPassword);
