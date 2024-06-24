//              JS FOR BULB ON - OFF
// button = document.querySelector("button")
// button.textContent = "Bulb On"
// button.addEventListener('click',bulbOn);
// image = document.createElement("img");
// image.setAttribute("src","bulb_off.jpg");
// image.setAttribute("class","img");
// body.append(image);
// function bulbOn(){
//     if(button.textContent == "Bulb On"){
//         image.setAttribute("src","lighted_bulb.jpg")
//         button.textContent = "Bulb Off"
//     }
//     else{
//         image.setAttribute("src","bulb_off.jpg")
//         button.textContent = "Bulb On"
//     }
// }


//              JS FOR CRUD APP
// button = document.querySelector("button");
// button.addEventListener('click',Msg);
// list = document.createElement("ol");
// list.setAttribute("id","list");
// body.append(list);
// function Msg(){
//     if(list.firstElementChild == null){
//         heading = document.createElement("h1")
//         heading.textContent = "Course Name"
//         heading.setAttribute("id","format");    
//         body.append(heading);
//     }
//     item = document.createElement("li");
//     input = document.querySelector("input")
//     item.textContent = input.value;
//     list.appendChild(item);
//     input.value = '';
// }
// removeBtn.addEventListener('click',removeItem);
// function removeItem(){
//     list.lastElementChild.remove();
//     if(list.firstElementChild == null){
//         heading.remove();
//     }
// }

// function loadUsers(){
//     let xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById("output").innerHTML = this.responseText;
//         }
//     }
//     xmlHttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
//     xmlHttp.send();
//     console.log(xmlHttp.readyState);
// }

"use strict";

let httpRequest = new XMLHttpRequest();

let el = document.getElementById("abc");
el.onclick = function(){
    el.innerHTML = "This is some new content";
    el.style.color = "red";

    httpRequest.onreadystatechange = postAjaxFunction;
    httpRequest.open('GET','updated_database.php');
    httpRequest.send('email=aditya@internshala.com&id=4');
}

function postAjaxFunction(){
    alert("Before")
    if(httpRequest.readyState === XMLHttpRequest.DONE){
        alert("Middle")
        if(httpRequest.status === 200){
            alert("After")
            var response = JSON.parse(httpRequest.responseText);
            alert("2")
            alert("response : "+response)
            alert(response.name+" - "+response.message);
        }else{
            alert("Something went wrong");
        }
    }
}