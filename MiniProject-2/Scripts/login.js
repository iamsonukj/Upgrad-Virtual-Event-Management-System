function login(){

let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

if(email==="admin@upgrad.com" && pass==="12345")
{
localStorage.setItem("login","true");
window.location="events.html";
}
else
{
showAlert("Invalid Login","danger");
}

}
function showAlert(message,type){

document.getElementById("alertBox").innerHTML =

`<div class="alert alert-${type} alert-dismissible fade show" role="alert">

${message}

<button type="button" class="btn-close" data-bs-dismiss="alert"></button>

</div>`;

}