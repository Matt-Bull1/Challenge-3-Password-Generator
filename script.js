//Array for list of special characters
var specialCharacters = ["!", "'", "#", "$", "%", "&","(", ")", "*",
"+", ",", "-", ".", "/", ":", ";", "<", "=", ">"," ?", "@", "[", "\\",
"]", "^", "_", "{", "|", "}", "~"];

//Array for the list of numeric characters
var numberCharacters = ["0" , "1" , "2", "3", "4", "5", "6" , "7", "8", "9"];

//Array for lower case characters
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
"k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"]

//Array for upper case characters
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
"K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"]

//function to prompt user to set password parameters
function createPasswordConditions() {
  //variable for password length
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));

  //check if the variable is a number
  if (Number.isNaN(passwordLength)){
    alert("Password length must be a number");
    return null;
  }

  //check if password length is at least 8 characters but less than 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be greater than 8 and less than 128 characters");
    return null;
  }

  //variable to check if they want to include special characters
  var addSpecialCharacters = confirm("Click OK if you want to include special characters.");

  //variable to check if they want to include special characters numbers
  var addNumbers = confirm("CLick OK if you want to include numbers");

  //variable to check if they want to include lower case letters 
  var addLowerCaseLetters = confirm("Click OK if you want to include lower case characters");

  //variable to check if they want to include upper case letters
  var addUpperCaseLetters = confirm("Click OK if you want to include upper case characters");

  //Check if user has added at least on type of character
  if (specialCharacters === false && addNumbers === false &&
      lowerCaseCharacters === false && upperCaseCharacters === false){
      alert("Must select at least on character type");
      return null;
      }
  
  //Object to hold each user input
  var passwordChoices = {
    passwordLength: passwordLength,
    addSpecialCharacters: addSpecialCharacters,
    addNumbers: addNumbers,
    addLowerCaseLetters: addLowerCaseLetters,
    addUpperCaseLetters: addUpperCaseLetters,
  };

  return passwordChoices;
}
//grab random element from array
function grabRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement
}

//function to make password
function createPassword(){
  var choices = createPasswordConditions();

  //to store the password as its being created
  var createdPassword = [];

  var arrayOfCharacters = [];

  var chosenCharacters = [];

  //Add array of choices if the user wants them in the password
  //then adds a guaranteed character to the chosen characters
  if (choices.addSpecialCharacters) {
    arrayOfCharacters = arrayOfCharacters.concat(specialCharacters);
    chosenCharacters.push(grabRandom(specialCharacters));
  }

  if (choices.addNumbers) {
    arrayOfCharacters = arrayOfCharacters.concat(numberCharacters);
    chosenCharacters.push(grabRandom(numberCharacters));
  }

  if (choices.addLowerCaseLetters) {
    arrayOfCharacters = arrayOfCharacters.concat(lowerCaseCharacters);
    chosenCharacters.push(grabRandom(lowerCaseCharacters));
  }

  if (choices.addUpperCaseLetters) {
    arrayOfCharacters = arrayOfCharacters.concat(upperCaseCharacters);
    chosenCharacters.push(grabRandom(upperCaseCharacters));
  }

  for (var i = 0; i < choices.passwordLength; i++) {
    var randomCharacter = grabRandom(arrayOfCharacters);

    createdPassword.push(randomCharacter);
  }

  //add each of the chosen charcters to the array
  for (var i = 0; i < chosenCharacters.length; i++) {
    createdPassword[i] = chosenCharacters[i];
  }

  return createdPassword.join('');
}
  
  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
