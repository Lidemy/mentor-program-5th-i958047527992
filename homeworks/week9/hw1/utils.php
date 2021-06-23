<?php
  require_once('conn.php');
  
  function getUserFromUsername($username) {
    global $conn;
    $fetchAccountssql = sprintf("SELECT * FROM yiluan_w9_users WHERE username='%s'", $username);
    $result = $conn->query($fetchAccountssql);
    $row = $result->fetch_assoc();
    return $row;
  } 
?>