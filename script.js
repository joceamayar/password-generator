// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// This is a list of available characters that we can use in the password
let charactersToChooseFrom = [];

function generatePassword() {
  if (confirm("Do you want your password to contain lowercase letters?")) {
    charactersToChooseFrom = [...charactersToChooseFrom, ...lowerAlphabet];
  }

  if (confirm("Do you want your password to contain uppercase letters?")) {
    charactersToChooseFrom = [...charactersToChooseFrom, ...upperAlphabet];
  }

  if (confirm("Do you want your password to contain numbers?")) {
    charactersToChooseFrom = [...charactersToChooseFrom, ...numbers];
  }

  let password = "";

  let passwordLength = prompt("How long do you want the password")

  for (let i = 0; i < passwordLength; i++) {

    // Get a random number that is between 0 and the length of charactersToChooseFrom
    let randomPositionInsideCharacterList = Math.floor(Math.random() * charactersToChooseFrom.length);
    console.log(`Got random number: ${randomPositionInsideCharacterList}`);

    // Get the value of the character - in the position that was randomly generated
    let valueOfRandomPosition = charactersToChooseFrom[randomPositionInsideCharacterList];
    console.log(`Value at position ${randomPositionInsideCharacterList}: ${valueOfRandomPosition}`);

    // add the new value to the end of the current password (string)
    password += valueOfRandomPosition;
    console.log("Current password: " + password);
    console.log("");
    console.log("");
  }

  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
