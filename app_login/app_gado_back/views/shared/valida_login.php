<?php 
   session_start();

   if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $username = $_POST['email'];
    $password = $_POST['password'];

    //verificar se usuário e senha estão corretos
    if(isset($_SESSION['users']) && array_key_exists($username,$_SESSION['users']) && $_SESSION['users'][$username] == $password){
        header('Location: workspage.html');
    }
    else{
        echo 'Usuário ou senha incorretos!';
    }
    
  
   }

?>