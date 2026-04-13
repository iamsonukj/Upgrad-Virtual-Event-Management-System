function submitQuery(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let desc=document.getElementById("desc").value;

if(name=="" || email=="" || desc=="")
{
showAlert("Please fill all fields","warning");
return;
}

showAlert("Query submitted successfully","success");

// Reset form
document.getElementById("contactForm").reset();

}
function showAlert(message,type){

document.getElementById("alertBox").innerHTML =

`<div class="alert alert-${type} alert-dismissible fade show" role="alert">

${message}

<button type="button" class="btn-close" data-bs-dismiss="alert"></button>

</div>`;

}

