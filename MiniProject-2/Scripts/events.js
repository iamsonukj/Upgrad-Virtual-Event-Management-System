if(localStorage.getItem("login") !== "true"){

document.body.innerHTML = `

<div class="container mt-5">

<div class="alert alert-warning text-center" role="alert">

<strong>Please login first!</strong><br>
Redirecting to login page...

</div>

</div>

`;

setTimeout(function(){
window.location.href="login.html";
},2000);

}

let events = JSON.parse(localStorage.getItem("events")) || [];

function addEvent(){

let id=document.getElementById("eventId").value;
let name=document.getElementById("eventName").value;
let category=document.getElementById("category").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;
let url=document.getElementById("url").value;

if (!id || !name || !category || !date || !time || !url) {
    showAlert("Please fill all fields","warning");
    return;
}

let event = { id,name,category,date,time,url };

events.push(event);

localStorage.setItem("events",JSON.stringify(events));

displayEvents(events);

showAlert("Event added successfully","success");

}

function displayEvents(list){

let container = document.getElementById("eventContainer");

container.innerHTML = "";

list.forEach((e,index)=>{

container.innerHTML += `
<div class="col-md-4 mt-3">

<div class="card p-3">

<h5>${e.name}</h5>

<p><b>ID:</b> ${e.id}</p>

<p><b>Category:</b> ${e.category}</p>

<p><b>Date:</b> ${e.date}</p>

<p><b>Time:</b> ${e.time}</p>

<a href="${e.url}" class="btn btn-primary w-100">
Join Event
</a>

<button onclick="deleteEvent(${index})"
class="btn btn-danger w-100 mt-2">
Delete
</button>

</div>

</div>
`;

});

}
function searchEvent(){

let name=document.getElementById("searchName").value.toLowerCase();
let category=document.getElementById("searchCategory").value.toLowerCase();

let filtered=events.filter(e =>
e.name.toLowerCase().includes(name) &&
e.category.toLowerCase().includes(category)
);

displayEvents(filtered);

}
function deleteEvent(index){

events.splice(index,1);

localStorage.setItem("events",JSON.stringify(events));

displayEvents(events);
showAlert("Event deleted successfully","danger");
}

function searchEvent(){

let name=document.getElementById("searchName").value.toLowerCase();
let category=document.getElementById("searchCategory").value.toLowerCase();

let filtered=events.filter(e=>

e.name.toLowerCase().includes(name) &&
e.category.toLowerCase().includes(category)

);

displayEvents(filtered);

}

displayEvents(events);

function logout(){

localStorage.removeItem("login");

window.location.href="login.html";

}
function showAlert(message,type){

document.getElementById("alertBox").innerHTML =

`<div class="alert alert-${type} alert-dismissible fade show" role="alert">

${message}

<button type="button" class="btn-close" data-bs-dismiss="alert"></button>

</div>`;

}