<?php 
   session_start();
  

   if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $username = $_POST['email'];
    $password = $_POST['password'];
    $id = rand(0,100);

    //verificar se usuário já existe
    if(isset($_SESSION['users']) && array_key_exists($username,$_SESSION['users'])){
        die ('username already taken');
    }
    else{
        //cadastrar usuário no array
        $_SESSION['users'][] = [$username => $password,'id' => $id];
        header("Location: login.php");
    }

  
   }


?>