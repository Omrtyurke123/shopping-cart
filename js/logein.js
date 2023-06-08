let usernameEle =document.querySelector(".username")
let passwordEle =document.querySelector(".password")
let btnEle =document.querySelector(".btn")

let getName = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")
let nameUser = document.querySelector(".nav-loge-in-up")

btnEle.addEventListener("click",saveData)

function saveData(){
    if(usernameEle.value.trim()==="" || passwordEle.value.trim()===""){
        alert("please write in inputs")
    }else{
     if(getName==usernameEle.value.trim() && getPassword==passwordEle.value.trim()){
        
        window.location="index.html"
     }  else(
        alert("username or password is no corect")
     )  
    }}

