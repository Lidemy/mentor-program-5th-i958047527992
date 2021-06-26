<?php
  require_once('conn.php');
  
  // 如果暱稱、帳密任一個沒填，用 get 傳錯誤訊息回 register.php 
  if (empty($_POST['nickname']) || empty($_POST['username']) || empty($_POST['password'])) {
    header('Location: register.php?errorNo=1');
    die('資料不全');
  }
  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];

  $Registersql = sprintf("INSERT INTO yiluan_w9_users (nickname, username, password) VALUES ('%s', '%s', '%s')", $nickname, $username, $password);
  $result = $conn->query($Registersql);

  if ($result === TRUE) {
    // 如果註冊成功，用 get 傳訊息回 index.php 
    header('Location: index.php?register=1');
  } else if (!$result) {  
    $code = $conn->errno;  
    if ($code === 1062) {    
      // 如果帳密有重複，用 get 傳錯誤訊息回 register.php 
      header('Location: register.php?errorNo=3');
    }  
    die($conn->error);
 }



?>