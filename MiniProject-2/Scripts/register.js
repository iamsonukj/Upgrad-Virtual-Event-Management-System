const params = new URLSearchParams(window.location.search);

document.getElementById("eventId").innerText="ID: "+params.get("id");
document.getElementById("eventName").innerText="Name: "+params.get("name");
document.getElementById("eventCategory").innerText="Category: "+params.get("category");
document.getElementById("eventDate").innerText="Date: "+params.get("date");
document.getElementById("eventTime").innerText="Time: "+params.get("time");

function registerEvent(){

let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");

if(fname.value=="" || lname.value=="" || email.value=="")
{
showAlert("Please fill all fields","warning");
return;
}

showAlert("You are successfully registered to this event!","success");
// Reset fields
fname.value="";
lname.value="";
email.value="";

}
function showAlert(message,type){

document.getElementById("alertBox").innerHTML =

`<div class="alert alert-${type} alert-dismissible fade show" role="alert">

${message}

<button type="button" class="btn-close" data-bs-dismiss="alert"></button>

</div>`;

}