* 網域名：[http://yilunchiu.tw/](http://yilunchiu.tw/)
* 第九週留言板：[http://yilunchiu.tw/week9/index.php](http://yilunchiu.tw/week9/index.php)
* 第十週留言板：[http://yilunchiu.tw/week10/index.php](http://yilunchiu.tw/week10/index.php)
* 第十一週留言板：[http://yilunchiu.tw/week11/hw1/index.php](http://yilunchiu.tw/week11/hw1/index.php)
* 第十一週部落格：[http://yilunchiu.tw/week11/hw2/index.php](http://yilunchiu.tw/week11/hw2/index.php)
* 第十二週留言板：[http://yilunchiu.tw/week12/hw1/](http://yilunchiu.tw/week12/hw1/)
* 第十二週 todo list：[http://yilunchiu.tw/week12/hw2/](http://yilunchiu.tw/week12/hw2/)

我是照著這兩篇文章寫的流程，來部屬網站：[部署 AWS EC2 主機 + LAMP server + phpMyAdmin](https://derek.coderbridge.io/2020/09/16/create-your-website/)、[上傳檔案到雲端主機 + 更改域名](https://derek.coderbridge.io/2020/09/17/create-your-website2/)。

過程還算順利，其中幾個卡住的點，就是再找其他文章看有沒有什麼解法。其中遇到印象比較深刻的，一個是複製貼上指令，一個是更改域名，還有一個是更新網頁的檔案。

在 CMD 連上 ssh 的介面，我用過往的貼上快捷鍵都沒有效果，找了幾篇英文討論文章之後，才發現原來只要滑鼠右鍵就可以了。

更改域名的部分，則是在 gandi 設定完連結的 AWS 機器以後，等了滿久才好了，網域本身很早就看得到 Apache2 Ubuntu Default Page，但是其他已經放上去的 php，卻還是顯示這個網域已經有人使用了的頁面，還沒更新到我放好的 php 上，只能先用 IPv4 來檢查自己網站有沒有正常運作。

最後是更新網頁檔案，目前的做法是，每次改好就把放在 AWS 的原檔刪掉，接著再用 git clone 來下載檔案到 AWS 上，這樣比較不好的地方是，要每次都要進行刪掉、重新下載，還有放 `conn.php` 的檔案，相對上比較花時間，未來找找有沒有更好的方法。

最後，還滿開心看到自己的網站放在網路上的感覺，有一種真的做到的成就感，期待接下來的課。