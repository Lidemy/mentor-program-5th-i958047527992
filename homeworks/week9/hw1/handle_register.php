<?php
  require_once('conn.php');
  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  // 如果暱稱、帳密任一個沒填，用 get 傳錯誤訊息回 register.php 
  if (empty($nickname) || empty($username) || empty($password)) {
    header('Location: register.php?errorNo=1');
  }

  $Registersql = sprintf("INSERT INTO yiluan_w9_users (nickname, username, password) VALUES ('%s', '%s', '%s')", $nickname, $username, $password);
  $result = $conn->query($Registersql);

  if ($result === TRUE) {
    // 如果註冊成功，用 get 傳訊息回 index.php 
    header('Location: index.php?register=1');
  } else {
    // 如果帳密有重複或註冊失敗，用 get 傳錯誤訊息回 register.php 
    header('Location: register.php?errorNo=3');
  }


?>