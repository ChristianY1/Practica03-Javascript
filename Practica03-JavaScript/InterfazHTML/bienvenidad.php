<?php
$db_servername = "127.0.0.1";
$db_username = "root";
$db_password = "";
$db_name = "hipermedial";

$conn = new mysqli($db_servername,$db_username,$db_password,$db_name);
$conn->set_charset("utf8");

if ($conn->connect_error) {
    die("connection failed".$conn->connect_error);
}else{
    echo "<p>Bienvenido, pasaste las validaciones!</p>";
}
?>