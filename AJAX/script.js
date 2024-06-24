button = document.getElementById("submit");

button.addEventListener('click',change);
function change(){
    xhr = new XMLHttpRequest();
    xhr.open('GET','second.php',true)
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            alert("Successfull");
        }
        else if(xhr.status == 409){
            document.getElementById('text').innerHTML = "This email is already registered"
        }
        else{
            alert("Unsuccessfull attempt")
        }
    }
}