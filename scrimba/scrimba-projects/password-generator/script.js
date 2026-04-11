const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/",];
const pw1 = document.querySelector(".pw1");
const pw2 = document.querySelector(".pw2");
const btn = document.getElementById("btn");

function generatePassword(length = 15) {
    let pw = "";
    for (let i = 0; i < length; i++) {
        let rnd = Math.floor(Math.random() * characters.length)
        pw += characters[rnd];
    };
    return pw;
};


btn.addEventListener("click", () => {
    pw1.textContent = generatePassword(15);
    pw2.textContent = generatePassword(15);
});