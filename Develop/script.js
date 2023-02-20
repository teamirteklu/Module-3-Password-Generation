// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var generateCriteria = document.querySelectorAll("#input[name=checkbox]");
var generateCriteria = document.querySelector("#criteria");
var passwordLength = document.querySelector("#passlen");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateCriteria.addEventListener("click", function () {
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('text for label after checkbox'));

container.appendChild(checkbox);
container.appendChild(label);

});

// generateCriteria.forEach(function(checkbox) {
//   checkbox.addEventListener('change', function() {
//     var checkedBoxes = [];

//     checkedBoxes = Array.from(generateCriteria).filter(i => i.checked).map(i => i.value);

//     console.log(checkedBoxes);
//   });
// });