const passwordbox = document.getElementById("passwordbox");
let length = 12;

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*(){}[]\|?/";

var allchars = uppercase + lowercase + numbers + symbols;

function generatepassword(){

    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordbox.value = password;
}
