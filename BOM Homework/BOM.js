// Homework 1

const button = document.getElementById("exercise1");
const div = document.querySelector(".exercise1");
const exerciseOne = () => {
    const state = {current: "string"}
    window.history.pushState(state, "New URL","?The url has changed");
    div.innerHTML = "This had to be displayed."
    console.log(window.location);
}
button.addEventListener("click", exerciseOne);

// Homework 2

const radioEx2 = document.getElementsByClassName("ex2")
document.cookie = radioEx2[0].value;
let cookies = document.cookie;

const preselectedButton = () => {
    for(i=0; i<radioEx2.length; i++){
        if(radioEx2[i].value===cookies){
            radioEx2[i].checked = true;
        }
    }
}

const preserveInCookie = () => {
    if(radioEx2[0].checked === true){
        document.cookie = radioEx2[0].value;
    }else if(radioEx2[1].checked === true){
        document.cookie = radioEx2[1].value;
    }
}
window.addEventListener("load",preselectedButton);
window.addEventListener("click", preserveInCookie);

//Homework 3

const radioEx3 = document.getElementsByClassName("ex3");

const addInLocalStorage = () => {
    for(i=0; i<radioEx3.length; i++){
        if(radioEx3[i].checked === true){
            localStorage.setItem("preference", radioEx3[i].value);
        }
    }
}

const preselectLocalStorage = () =>{
    for(i=0; i<radioEx3.length; i++){
        if(radioEx3[i].value === localStorage.getItem("preference")){
            radioEx3[i].checked = true;
        }
    }
}

window.addEventListener("load", preselectLocalStorage);
window.addEventListener("click", addInLocalStorage);

//Homework 4

const radioEx4 = document.getElementsByClassName("ex4");

const addInSessionStorage = () => {
    for(i=0; i<radioEx3.length; i++){
        if(radioEx4[i].checked === true){
            sessionStorage.setItem("preference", radioEx4[i].value);
        }
    }
}

const preselectSessionStorage = () =>{
    for(i=0; i<radioEx4.length; i++){
        if(radioEx4[i].value === sessionStorage.getItem("preference")){
            radioEx4[i].checked = true;
        }
    }
}

window.addEventListener("load", preselectSessionStorage);
window.addEventListener("click", addInSessionStorage);


