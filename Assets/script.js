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

  // when the password is generated it will add a random value in the password, selected from the special character length
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


  }



// Function to prompt user for password

if (!lowercasePrompt && !uppercasecasePrompt && !numbersPrompt && !specialCharsPrompt) {
    console.log(lowercasePrompt, uppercasecasePrompt, numbersPrompt, specialCharsPrompt)
    window.alert("cannot build password without atleast 1 of the 4 options")
    return null
}

var result = [lowercasedChars, uppercasedChars, specialCharacters, numericCharacters]

    return result.join(" ")


generateButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log(evt);
  passwordLength();
});


