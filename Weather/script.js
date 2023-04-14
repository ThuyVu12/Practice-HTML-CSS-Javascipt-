function message() {
    alert("Loading weather report...");
}

function remove(cookie) {
    document.getElementById("cookie").remove();
}



function change() {
    let z = document.querySelector(".temperature").value;
    let y = document.querySelectorAll(".num").innerText;
    console.log ("code is running")
    if(z == "C"){
        y = y;
    } else {
        y=y*9/5+32;
    }
}