<?php
  require_once('conn.php');
  require_once('utils.php');
  session_start();
  $item_per_page=5;
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
  <link rel="stylesheet" href="style.css">
  <title>Yiluan's Blog</title>
</head>
<body>
  <div class="navbar">
    <div class="navbar__left">
      <a href="index.php" class="index"><h2 class="navbar__logo">Yiluan's Blog</h2></a>
      <ul class="navbar__left-list">
        <a class="option" href="all_posts.php">文章列表</a>
        <a class="option" href="#">分類專區</a>
        <a class="option" href="#">關於我</a>
      </ul>
    </div>
    <div class="navbar__right">
      <ul class="navbar__right-list">
        <a class="option" href="admin.php">管理後台</a>
        <?php if(!isset($_SESSION['username'])) { ?>
        <a class="option" href="login.php">登入</a>
        <?php } else { ?>
        <a class="option" href="handle_logout.php">登出</a>
        <?php }?>
      </ul>
    </div>
  </div>
  <div class="wallpaper">
    <div class="wallpaper__welcome">
      <h2 class="wallpaper__welcome-title">存放心得之地</h2>
      <h3 class="wallpaper__welcome-subtitle">Welcome to my blog</h3>
    </div>
  </div>
  <div class="posts">
    <?php
      $fetchPostsSql = 
      "SELECT *
      FROM yiluan_w11_blog_posts
      WHERE is_deleted IS NULL
      ORDER BY id DESC";
      $stmt = $conn->prepare($fetchPostsSql);
      $stmt->execute();
      $result = $stmt->get_result();
      while ($row = $result->fetch_assoc()) {
    ?>
      <div class="posts__post">
        <div class="post-title">
          <span><?php echo transformXSS($row['title']); ?></span>
          <?php if(isset($_SESSION['username'])) { ?>
            <a href="post-edit.php?id=<?php echo $row['id']; ?>" class="edit btn">編輯</a>
          <?php } ?>
        </div>
        <div class="post-timestamp">
          <?php echo transformXSS($row['created_at']); ?>
        </div>
        <div class="post-content">
          <?php echo transformXSS($row['content']); ?>
        </div>
        <a href="post-view.php?id=<?php echo $row['id']; ?>" class="read-more">READ MORE</a>
      </div>
    <?php }  ?>
    
  </div>
  <div class="footer">
    Copyright © 2021 Yiluan's Blog All Rights Reserved.
  </div>
</body>
</html>