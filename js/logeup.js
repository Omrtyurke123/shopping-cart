let usernameEle =document.querySelector(".username")
let emailEle =document.querySelector(".email")
let passwordEle =document.querySelector(".password")
let btnEle =document.querySelector(".btn")

btnEle.addEventListener("click",
function saveData(){
if(usernameEle.value.trim()==="" || emailEle.value.trim() ===""||passwordEle.value.trim()==""){
 alert("please write in inputs")
}else{
    localStorage.setItem("username",usernameEle.value.trim())
    localStorage.setItem("email",emailEle.value.trim())
    localStorage.setItem("password",passwordEle.value.trim())
    console.log(9999999999);
    setTimeout(() => {
        window.location = "index.html"
    }, 2000);
    console.log(9999999999);
}

})





