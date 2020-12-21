// Assignment code here
var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';

var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var numberChar = '1234567890';

var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var passwordLength;

var uppercaseCheck;
var numberCheck;
var specialCheck;

// function to determine lenght of password
function determineLength() {
  passwordLength = prompt("How many characters does the password need to be (between 8 and 128 characters)");

    if(passwordLength<8 ) {
      alert("Password length must be a number between 8-128 characters");
       determineLength();
    }else if(passwordLength>128) {
      alert ("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
      alert("The next three screens will ask you if you want included in your password. \nIF you choose 'No' for all, your password will only contain lowercase letters");
       return passwordLength;
    }
}


// function to determine uppercase characters
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to use Uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck =  uppercaseCheck.toLowerCase();

    if(uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();
    }else if (uppercaseCheck === "yes" || uppercaseCheck === "y"){
      uppercaseCheck = true;
      return uppercaseCheck;
    }else if (uppercaseCheck === "no" || uppercaseCheck === "n"){
      return uppercaseCheck = false;
    }else {
      alert("Please  answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

// function to determine number characters
function determineNumbers(){
  numberCheck = prompt("Do you want to use Numbers in your password? \n(Yes or No)");
    numberCheck =  numberCheck.toLowerCase();

    if(numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();
    }else if (numberCheck === "yes" || numberCheck === "y"){
      numberCheck = true;
      return numberCheck;
    }else if (numberCheck === "no" || numberCheck=== "n"){
      return numberCheck = false;
    }else {
      alert("Please  answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

// function to determine Special Characters
function determineSpecial(){
  specialCheck = prompt("Do you want to use Special Characters in your password? \n(Yes or No)");
   specialCheck =  specialCheck.toLowerCase();

    if(specialCheck === null ||specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();
    }else if (specialCheck === "yes" || specialCheck === "y"){
      specialCheck = true;
      return specialCheck;
    }else if (specialCheck === "no" || specialCheck === "n"){
      return specialCheck = false;
    }else {
      alert("Please  answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

// function to use all the inputs to make a password
function generatePassword(){
  determineLength();
  console.log(passwordLength);

  determineUppercase();
  console.log(uppercaseCheck);

  determineNumbers();
  console.log(numberCheck);

  determineSpecial();
  console.log(specialCheck);
  

var characters = lowercaseChar;
var password = ""
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;
}else if (uppercaseCheck && numberCheck){
  characters += uppercaseCheck + specialCheck;
}else if(numberCheck && specialCheck){
  characters += numberCheck + specialCheck;
}else if (uppercaseCheck && specialCheck){
  characters += uppercaseCheck + specialCheck;
}else if (uppercaseCheck){
  characters += uppercaseCheck;
}else if(numberCheck){
  characters += numberCheck;
}else if(specialCheck){
  characters += specialCheck;
}else {
  characters === lowercaseChar;
}
  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password1 = "";
  var password1 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password1;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
