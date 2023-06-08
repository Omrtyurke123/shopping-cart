let getName = localStorage.getItem("username")
let navUser =document.querySelector(".nav-loge-in-up")
let navLoge =document.querySelector(".donot-loge-in-up")
if(getName=localStorage.key(1)){
    let getName = localStorage.getItem("username")
    navUser.style.display="flex"
    navUser.innerHTML=`welcom : ${getName}`
    navLoge.style.display="none"
}

/* start code ja for items prodact */
//add varibls
let homePage =document.querySelector(".home-page")
let btnCard=document.querySelector('.btn-add-card')
let contentProdcts=document.querySelector(".content-prodcts")
let shopping=document.querySelector(".shopping")
let lengthProdcts=document.querySelector('.length-prodcts')


let elementProdact=[
    {
        id:1,
        title:"custemer man",
        imgSrc:"/img/img1.png"
    },
    {
        id:2,
        title:"custemer men",
        imgSrc:"/img/img2.png"
    },
    {
        id:3,
        title:"custemer mens",
        imgSrc:"/img/img3.png"
    }
]
function addProdactJs(){
    let mapingObj=elementProdact.map((ele)=>{
        return `  <div class="item">
        <img src=${ele.imgSrc} alt="">
        <div class="text-info">
            <h2>${ele.title}</h2>
            <p>omarmohamed</p>
        </div>
        <div class="activet-info">
            <button class="btn-add-card" onclick=actionToCard(${ele.id}) > Add To Card</button>
            <button class="brn-icon-heart">
            <span class="material-symbols-outlined">
            favorite
            </span></button>
        </div>
    </div>`;
    })
    homePage.innerHTML=mapingObj
}
addProdactJs()

//********************* */
// btnCard.addEventListener("click" , actionToCard)
function actionToCard(){
if(localStorage.getItem("username")){
    let filele=elementProdact.find((ele)=>{contentProdcts.innerHTML+=`<p>${ele.title}</p>`})
    //console.log(elementProdact.find((ele)=>{ele.id===id}));
}else{
    window.location="/logeup.html"
}
}
shopping.addEventListener('click',funShopping|| noshow)  
// let show=   
function funShopping(){
    if((contentProdcts.style.opacity!="1")){
       
        contentProdcts.style.opacity="1"
       }else{contentProdcts.style.opacity=0}
      
    }
function prodctLength() {
    var filterEle=elementProdact.find((ele)=>{lengthProdcts.innerHTML+=ele.id})
// console.log(ele);
}
prodctLength()
