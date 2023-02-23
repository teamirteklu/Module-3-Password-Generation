// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generateSubmit = document.querySelector("#button");
var passwordLength = document.querySelector("#passlen");

const criteria = ["Lowercase", "Uppercase", "Numbers", "Special Characters"];
// Write password to the #password input


function writePassword() {
var checkboxes = document.getElementsByName("criteria");
var passwordLength = parseInt(document.getElementsByName("passlen")[0].value);


var password = "";
var randomChar = "";

if(checkboxes[0].checked == true){
  randomChar += "abcdefghijklmnopqrstuvwxyz";
}

if(checkboxes[1].checked == true){
  randomChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if(checkboxes[2].checked == true){
  randomChar += "1234567890";
}

if(checkboxes[3].checked == true){
  randomChar += " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\ ";
}

for (var i = 0; i <= (passwordLength - 1); i++) {
  var randomNum = Math.floor(Math.random() * randomChar.length);
  password += randomChar.substring(randomNum, randomNum +1);
 }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function writeCriteria() {
  criteria.forEach((element) => {

    const id = `element: ${element}`;

  const label = document.createElement('label');
  label.setAttribute('for', id);

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "criteria";
  checkbox.value = element;
  checkbox.id = id;

  
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(element));

  document.querySelector("#generate")
  

  document.querySelector("#criteria").appendChild(label);
 });

 const passLabel = document.createElement('label');
 passLabel.setAttribute('for', "passlen");

  var passLength = document.createElement('input');

  passLength.type = "number";
  passLength.name = "passlen"
  passLength.value = "";
  passLength.id = "passlen";
  passLength.min = "8";
  passLength.max = "128";

  passLabel.appendChild(passLength);
  passLabel.appendChild(document.createTextNode("Password Length (8-128)"));

  document.querySelector('#passlen').appendChild(passLength);
  document.querySelector('#passlen').appendChild(passLabel);

  var button = document.createElement('input');
  button.type = "submit";
  button.name = "button";
  button.value = "submitCriteria";
  button.id = "button";

  document.querySelector("#button").appendChild(button);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writeCriteria);
generateSubmit.addEventListener("click", writePassword);
