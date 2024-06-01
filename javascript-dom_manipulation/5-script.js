const ele = document.getElementById("update_header");
const hd = document.querySelector("header");

ele.addEventListener("click", function (){
    hd.textContent = "New Header!!!";
});
