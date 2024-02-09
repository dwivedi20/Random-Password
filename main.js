const passwordbox=document.getElementById("Password");
const length= 12;
const upperCase="ABCDEFGHIJLKMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="@#$%^&*()_+></-={}[] ~"
const allchars=upperCase+lowerCase+number+symbol;


function createPassword(){
    let Password="";
    Password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    Password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    Password+=number[Math.floor(Math.random()*number.length)];
    Password+=symbol[Math.floor(Math.random()*symbol.length)]

    while(length  >Password.length){
  Password+=allchars[Math.floor(Math.random()*allchars.length)]
    }
    passwordbox.value=Password;


}
function copyPassword(){
    passwordbox.select();
    document.execCommand("copy")
}
// let btn=document.querySelector("#btn")
// btn.addEventListener("click", createPassword());

