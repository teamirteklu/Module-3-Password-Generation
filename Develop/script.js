// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// var generateCriteria = document.querySelectorAll("#input[name=checkbox]");
// var generateCriteria = document.querySelector("#criteria");
// var passwordLength = document.querySelector("#passlen");

const criteria = ["Lowercase", "Uppercase", "Numbers", "Special Characters"];
// Write password to the #password input
function writePassword() {

var checkboxes = document.getElementById("criteria")


  criteria.forEach((checkbox) => {
    console.log(checkbox);

    if (criteria[] = ischecked) {
      console.log("yes");
    }
  });
  



  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
}

function writeCriteria() {
  

  criteria.forEach((element) => {

    const id = `element: ${element}`;

    

  const label = document.createElement('label');
  label.setAttribute('for', id);

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = element;
  checkbox.id = id;

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(element));

  document.querySelector("#generate")
  

  document.querySelector("#criteria").appendChild(label);

 });
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writeCriteria);

