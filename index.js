const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("firstPassword")
let secondPassword = document.getElementById("secondPassword")

function generatePassword(){
    let userInput = document.getElementById("userinput").value;
    let firstRandomPassword = 0;
    let secondRandomPassword = 0;
    
    for(let i = 1; i < userInput; i++){
        let random = Math.floor( Math.random() * characters.length )
        firstRandomPassword += characters[random]
        firstPassword.textContent = firstRandomPassword
    }
    

    for(let i = 1; i < userInput; i++){
        let random = Math.floor( Math.random() * characters.length )
        secondPassword.textContent += characters[random]
        secondRandomPassword += characters[random]
        secondPassword.textContent = secondRandomPassword
    }

}

function copy(clicked){
    if(clicked === "firstPassword"){
        let passwordcopy1 = firstPassword.innerText;
        
        navigator.clipboard.writeText(passwordcopy1).then(() => {
            alert("Copied to clipboard " + passwordcopy1);
        });
    }else{
        let passwordcopy2 = secondPassword.innerText;
        
        navigator.clipboard.writeText(passwordcopy2).then(() => {
            alert("Copied to clipboard " + passwordcopy2);
        });
    }

}