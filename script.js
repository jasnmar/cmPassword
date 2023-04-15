// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passwordLength = getPWLength();
  let characterSet = [];
  let pass = "";
  characterSet = getCharacterSet();
  console.log("Total character set is: " + characterSet);
  pass = makePassword(passwordLength, characterSet);
  return pass;

}

function makePassword(pwLength, cset) {
  let password = "";
  for (i=0; i < pwLength; i++){
    let index = Math.floor(Math.random() * cset.length);
    password = password + cset[index];
    console.log("Password: " + password);
  }
  return password;
}
function getCharacterSet() {
  console.log("Starting to get Character set");
  const errorVal = "";
  const lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const spchars = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  
  let cset = [];
  
  const useLCs = window.confirm("Would you like to use lower case characters?");
  if (useLCs){
    cset = cset.concat(lcLetters);
    console.log("Character Set Currently: " + cset);
  }
  
  const useUCs = window.confirm("Would you like to use upper case characters?");
  if (useUCs) {
    cset = cset.concat(ucLetters);
    console.log("Character Set Currently: " + cset);
  }

  const useNumbs = window.confirm("Would you like to include numbers?");
  if (useNumbs) {
    cset = cset.concat(numbs);
    console.log("Character Set Currently: " + cset);
  }

  const useSpecs = window.confirm("Would you like to include special characters?");
  if (useSpecs){
    cset = cset.concat(spchars);
    console.log("Character Set Currently: " + cset);
  }

  if (cset.length == 0) {
    window.alert("You must select at least 1 character set");
    return errorVal;
  }
  return cset;

}
function getPWLength() {

  const errorVal = "";

  const pwLengthStr = window.prompt("How many characters do you want in the password?");
  console.log("Not a number check: " + isNaN(pwLengthStr));
  if (isNaN(pwLengthStr)) {
    window.alert("Sorry, you didn't enter a number");
    return errorVal;
  }
  //console.log("Integer check: " + Number.isInteger(pwLengthStr));
  //if (!Number.isInteger(pwLengthStr)) {
  //  window.alert("Sorry, please enter an integer");
  //}
  const pwLength = pwLengthStr.valueOf();
  console.log("PW Length: " + pwLength);
  if (pwLength >= 8) {
    if (pwLength <= 128) {
      return pwLength;
  }} else {
    window.alert("Sorry, you password needs to be between 8 and 128 characters");
    return errorVal;
  }
  return errorVal;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
