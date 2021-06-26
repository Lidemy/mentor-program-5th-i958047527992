<?php
  require_once('conn.php');
  // require_once('utils.php');
  session_start();
  $username = $_POST['username'];
  $password = $_POST['password'];
  if (empty($username) || empty($password)) {
    header('Location: login.php?errorNo=1');
    die("帳密未填寫");
  }

  $fetchAccountsSql = sprintf("SELECT * FROM yiluan_w9_users WHERE username='%s' and password='%s'", $username, $password);
  $result = $conn->query($fetchAccountsSql);
  if ($result->num_rows < 1) {
    header('Location: login.php?errorNo=2');
  } else {
    $_SESSION['username'] = $username;
    header('Location: index.php');
  }

?>