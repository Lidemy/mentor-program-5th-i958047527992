<?php
  require_once('conn.php');
  // 用帳號從資料庫取得整筆用戶資料 
  function GetUserFromUsername($username) {
    global $conn;
    $fetchAccountssql = sprintf("SELECT * FROM yiluan_w9_users WHERE username='%s'", $username);
    $result = $conn->query($fetchAccountssql);
    $row = $result->fetch_assoc();
    return $row;
  } 
?>