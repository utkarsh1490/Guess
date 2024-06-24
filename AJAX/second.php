<?php

$conn = mysqli_connect('127.0.0.1','root','Beta090$','pglife');

if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $call=$_POST['phone_no'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $college=$_POST['college'];
    $gender=$_POST['gender'];

    $sql="INSERT INTO users(name,phone_no,gender,email,password,college_name) VALUES('$name','$call','$gender','$email','$password','$college')";

    $result=mysqli_query($conn,$sql);

    if($result){
        echo"Registration Successfull";
    }
    else{
        echo"Registration Failed";
    }
}

mysqli_close($conn);

?>