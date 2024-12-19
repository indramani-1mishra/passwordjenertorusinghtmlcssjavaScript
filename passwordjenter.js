let lowerCase = 'abcdefghijklmnopqrstuvwxyz';

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let numbers = '0123456789';

let specialCharacters = '!@#$%^&*()_+=-{}[]|:;<>,.?/~`';
let allCharacters ='';
let rengeOfPassword;


let uppercasevalue= document.getElementById('upper');
let yesNoHandler;


//let text;
   uppercasevalue.addEventListener('click',(event)=>
    {  yesNoHandler=event.target.checked;
      
       if(yesNoHandler)
        {
          allCharacters+= upperCase;  
          console.log("upparcase includeed");
        }
        else
        {
            allCharacters=allCharacters.replace(upperCase,'');  
          console.log("upparcase removed");
        }
    });
    let lowercasevalue= document.getElementById('lower');
    lowercasevalue.addEventListener('click',(event)=>
    { yesNoHandler=event.target.checked;
        if(yesNoHandler)
        {
          allCharacters+= lowerCase;  
          console.log("lowercase includeed");
        }
        else
        {
            allCharacters=allCharacters.replace(lowerCase,'');  
          console.log("lowercase removed");
        }
    });
    let numbersvalue= document.getElementById('number');
    numbersvalue.addEventListener('click',(event)=>
    { yesNoHandler=event.target.checked;
        if(yesNoHandler)
        {
          allCharacters+= numbers;  
          console.log("numbers included");
        }
        else
        {
            allCharacters=allCharacters.replace(numbers,'');  
          console.log("numbers removed");
        }
    });
    let specialvalue= document.getElementById('special');
    specialvalue.addEventListener('click',(event)=>
    { yesNoHandler=event.target.checked;
        if(yesNoHandler)
        {
          allCharacters+= specialCharacters;  
          console.log("special characters included");
        }
        else
        {
            allCharacters=allCharacters.replace(specialCharacters,'');  
          console.log("special characters removed");
        }
    });
   
    function  generatePassword(rangeofpassword) {
        let password = '';

        for (let i = 0; i < rangeofpassword; i++) {
            password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        }
        return password;
    }
     
    let generateButton = document.getElementById('btng');
    generateButton.addEventListener('click', () => {
        let audio = new Audio('click.mp3');
    
        // Play the first audio (click sound)
        audio.play().then(() => {
            // Check if no characters are selected
            if (allCharacters === '') {
                let secaudio = new Audio('longerror.mp3');
                
                // Play the second audio (error sound)
                secaudio.play().then(() => {
                    alert('No character selected. Please select at least one option.');
                }).catch((error) => {
                    console.error('Error playing error audio:', error);
                });
            } else {
                // Generate password if characters are selected
                let password = generatePassword(rengeOfPassword);
                document.getElementById('display').value = password;
                console.log(password);
            }
        }).catch((error) => {
            console.error('Error playing click audio:', error);
        });
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
  let audio = new Audio('click.mp3');
  
  copyText.select();
  copyText.focus();
  document.execCommand("copy");
  copyText.blur();
  
  audio.play().then(()=>
  alert("Password copied to clipboard!")
  
  ).catch((error)=>
  console.error("Error copying password to clipboard:", error))
  
});

// try to fecth the value of checkbox
