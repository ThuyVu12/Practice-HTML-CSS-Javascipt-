console.log("page loaded...");

function change(profilename) {
    document.getElementById(profilename).innerText = "Thuy Vu";
}

function remove() {
    console.log("Function remove is running");
    document.querySelector(".card-list-item").remove();
    document.querySelector(".badge").innerHTML--;
}

function add() {
    console.log("Function add is running");
    document.querySelector(".badge1").innerHTML++;
}