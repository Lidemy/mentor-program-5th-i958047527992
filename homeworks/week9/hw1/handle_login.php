<?php
  require_once('conn.php');
  // require_once('utils.php');
  session_start();
  $username = $_POST['username'];
  $password = $_POST['password'];
  // 如果帳密任一個沒填，用 get 傳錯誤訊息回 login.php 
  if (empty($username) || empty($password)) {
    header('Location: login.php?errorNo=1');
  }

  $fetchAccountssql = sprintf("SELECT * FROM yiluan_w9_users WHERE username='%s' and password='%s'", $username, $password);
  $result = $conn->query($fetchAccountssql);
  // 如果資料庫沒有這個帳密，用 get 傳錯誤訊息回 login.php 
  if ($result->num_rows < 1) {
    header('Location: login.php?errorNo=2');
  } else {
    $_SESSION['username'] = $username;
    header('Location: index.php');
  }

?>