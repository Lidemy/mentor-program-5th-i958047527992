<?php
  // 登出、清掉 session，回首頁。
  session_start();
  unset($_SESSION['username']);
  header('Location: index.php');

?>