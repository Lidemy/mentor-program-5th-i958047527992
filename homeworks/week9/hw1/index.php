<?php
  require_once('conn.php');
  require_once('utils.php');
  session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- 網站最上頭的警告訊息 -->
  <header class='warning'>
    <strong>
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
    </strong>
  </header>
  <!-- 留言板 -->
  <main class="board">
    <h1 class="title">
    Comments
    </h1>
    <form action="board_add_comment.php" class="new-comment" method="post">
      <!-- 如果登入，顯示「你好，<暱稱>」的訊息，顯示「登出」的按鈕。在留言欄底下會出現提交按鈕。
      否則就顯示「登入」和「註冊」，並且把提交按鈕隱藏。 -->
      <div class="new-comment__nickname-area">
        <?php 
          $username = NULL;
          if (isset($_SESSION['username'])) {
            $user = GetUserFromUsername($_SESSION['username']);
            $nickname = $user['nickname'];
            echo '<a href="handle_logout.php" class="btn login-logout">登出</a>';
            echo sprintf("<h3>你好，%s</h3>",$nickname);
        ?>


        <?php } else {?>
          <a href="login.php" class="btn login-btn">登入</a>
          <a href="register.php" class="btn register-btn">註冊</a>
        <?php
            if (!empty($_GET['errorNo'])){
              if ($_GET['errorNo'] === '1') {
                echo "<h3 class='errorMessage'>留言未填寫，請再輸入一次。</h3>";
              } else if ($_GET['errorNo'] === '3') {
                echo "<h3 class='errorMessage'>Something wrong.</h3>";
              }
            }
            if (!empty($_GET['register']) and $_GET['register'] === '1') {
              echo "<h3 class='errorMessage'>註冊成功!</h3>";
            }
          }
        ?>
      </div>
      <textarea class="new-comment__text" name="comment"rows="6"></textarea>
      <?php if (isset($_SESSION['username'])) { ?>
        <input class="new-comment__submit-btn" type="submit">
      <?php } else {
        echo "<h3>登入後才能發布評論</h3>";
      }?>
        
    </form>
    <div class="hr">
    </div>
    <!-- 抓出所有在資料庫的留言並顯示 -->
    <?php 
      $fetchCommentssql = sprintf("SELECT * FROM yiluan_w9_comments ORDER BY created_at DESC");
      $result = $conn->query($fetchCommentssql);
      while ($row = $result->fetch_assoc()) {
    ?>
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__part">
          <div class="card__user">
            <span class="card__nickname"><?php echo $row['nickname'];?></span>
            <span class="card__time"><?php echo $row['created_at'];?></span>
          </div>
          <div class="card__comment"><?php echo $row['content'];?></div>
        </div>
      </div>
    <?php }  ?>
  </main>
</body>
</html>