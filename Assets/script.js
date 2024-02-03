// we need to have a password generator that consists of a combo of lower case, uppecase, numbers, and or special symbols
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

var allCharacters =
  lowercasedChars + uppercasedChars + specialCharacters + numericCharacters;
console.log(allCharacters)

// // Function for getting a random index of array
function getRandomIndex(arr = []) {
var randonIndex = Math.floor(Math.random() * arr.length);
console.log(arr[randonIndex])
    console.log(arr);
return arr[randonIndex]
}

// var randomNumericChar =  getRandomIndex(numericCharacters);
// console.log(randomNumericChar);

function buildPassword() {
  console.log("building password...");
  var passwordLength = window.prompt("How long would you like your password? (Must be between 8 and 128 characters)")
  var lowercasePrompt = window.confirm(
    "Would you like your password to have lowercase characters?"
  );
  var uppercasePrompt = window.confirm(
    "Would you like your password to have uppercase characters?"
  );
  var numbersPrompt = window.confirm(
    "Would you like your password to have number characters?"
  );
  var specialCharsPrompt = window.confirm(
    "Would you like your password to have special characters?"
  );

 
 // If the user doesn't select any opyions and clicks no 
    if (!lowercasePrompt && !uppercasePrompt && !numbersPrompt && !specialCharsPrompt) {
        window.alert("Cannot build password with no options!")
        return null 
        
    }

  // a random value is being generated from the upper case character length, and from the 26 letters it will add a random value in the password
  if (lowercasedChars) {
    characters += lowercasedChars.join("");
    password +=
      uppercasedChars[Math.floor(Math.random() * uppercasedChars.length)];
  }

  // when the password is generated t will add a random value in the password, selected from the lower case character length
  if (uppercasedChars) {
    characters += uppercasedChars.join("");
    password +=
      lowercasedChars[Math.floor(Math.random() * lowercasedChars.length)];
  }

  // when the password is generated t will add a random value in the password, selected from the special character length
  if (specialCharacters) {
    characters += specialCharacters.join("");
    password +=
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  // when the password is generated t will add a random value in the password, selected from the numeric character length
  if (numericCharacters) {
    characters += numericCharacters.join("");
    password +=
      numericCharacters[Math.floor(Math.random() * numericCharacters.length)];

    // When 10 is greater than the length of the generated password, we will add any random character
    while (length > password.length) {
      // it will continue to add a random character unless the password length is 10
      password +=
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordBox.value = password; // the password will be displayed in the input box
  }


    
passwordLength= Number.parseInt(passwordLength)

  var passwordOptions = {
    passwordLength,
    lowercasePrompt,
    uppercasePrompt,
    specialCharsPrompt,
    numbersPrompt,
  };
  return passwordOptions;
}



function generatePassword(passwordOptions) {
//   // variable if the password is empty
  var {
    passwordLength,
    lowercasedChars,
    uppercasedChars,
    specialCharacters,
    numericCharacters,
  } = passwordOptions;
  var password = "";
  var characters = "";

 


// Function to prompt user for password

if (!lowercasePrompt && !uppercasecasePrompt && !numbersPrompt && !specialCharsPrompt) {
    console.log(lowercasePrompt, uppercasecasePrompt, numbersPrompt, specialCharsPrompt)
    window.alert("cannot build password without atleast 1 of the 4 options")
    return null
}

var result = [lowercasedChars, uppercasedChars, specialCharacters, numericCharacters]

    return result.join(" ")
}

generateButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log(evt);
  getRandomIndex();
});

// // Function to get random number from the number characters

// Function getRandomNumber (length) {
//     return Math.floor(math.random().length);
// }
