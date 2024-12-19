let range= document.getElementById("range");
let rengeOfPassword;

function generatePassword(rangeofpassword) {
    let password = '';
     let characters='abcdefghijklmnopqrstuvwxyzABCDEFGH1234567890#$/?<>,!@';
     let length = rangeofpassword;
     for(let i=0; i<length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
     }
    return password;
}
//display the jenerted password into the input box
  let generatebutton = document.getElementById('btng');
  generatebutton.addEventListener('click', () => {
    let password = generatePassword(rengeOfPassword);
    document.getElementById('display').value = password;
  });

    

range.addEventListener('input', (event) => {
    rengeOfPassword = event.target.value;
    console.log("password length: " + rengeOfPassword);
    let generatePassword1= generatePassword(rengeOfPassword);
console.log("generate password: " + generatePassword1);
       

    }) 

// function for copy the password to the clipboard
let copyText = document.getElementById("display");

let copybtn= document.getElementById("copy");

copybtn.addEventListener("click", ()=> {
  copyText.select();
  copyText.focus();
  document.execCommand("copy");
  alert("Password copied to clipboard!"+copyText.value);
});
