<?php
  require_once('conn.php');
  require_once('utils.php');
  session_start();
  $user = GetUserFromUsername($_SESSION['username']);
  $nickname = $user['nickname'];
  $comment = $_POST['comment'];
  if (empty($nickname) || empty($comment)) {
    header('Location: register.php?errorNo=1');
  }

  $PostComment = sprintf("INSERT INTO yiluan_w9_comments (nickname, content) VALUES ('%s', '%s')", $nickname, $comment);
  $result = $conn->query($PostComment);

  if ($result === TRUE) {
    header('Location: index.php');
  } else {
    header('Location: index.php?errorNo=3');
  }


?>