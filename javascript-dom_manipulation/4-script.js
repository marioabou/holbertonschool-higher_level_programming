const ele = document.getElementById("add_item");
const list = document.querySelector(".my_list");

ele.addEventListener("click", function (){
    var son = document.createElement("li");
    son.textContent = "Item";
    list.appendChild(son);
});
