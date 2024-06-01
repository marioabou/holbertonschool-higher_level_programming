const ele = document.getElementById("toggle_header");
const hd = document.querySelector("header");

ele.addEventListener("click", function (){
    hd.classList.toggle("green");
    hd.classList.toggle("red");
});
