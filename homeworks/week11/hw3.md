## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
* 雜湊：
  * 原本輸入的文字，經由雜湊的演算法之後，會跑出一個固定長度的輸出。
  * 不同演算法算出來的長度與結果會不同。
  * 原本的輸入只要有一點點改變，就會產生不同的結果。
  * 只要輸入相同，輸出也會相同。
  * 不同的輸入，有極低的機率會產生同樣的結果，但即使別人拿到結果，也難以判斷是哪一個輸出。
  * 更安全的做法，是在原本的輸入加點額外的字串(salt)，這樣即使別人破解了，也沒有辦法得到真正的密碼。
  * 因為資料庫存雜湊值的緣故，所以忘記密碼的解法，是要請使用者重新申請一組新的密碼。
* 加密：
  * 用要加密的文字與鑰匙，作為加密演算法的輸入，得到輸出的密文。
  * 依照鑰匙的數量分為兩種類型的加密：
    * 對稱式加密：
      * 一把密鑰，只要傳送訊息的人用這把鑰匙加密，連同密碼傳給收訊息的人，就能請他用這把鑰匙解密。
      * 缺點是只要知道這組密鑰，就能解開所有的訊息。傳遞鑰匙的過程也可能被人攔截。
    * 非對稱式加密：
      * 有兩把鑰匙，一組公開在網路上(公鑰)，一組則自己保存不外傳(私鑰)。
      * 當別人鑰傳訊息給你，就請他用公鑰加密傳給你，而你就能用自己的私鑰解密，看到訊息是什麼。

參考資料：[1](https://ithelp.ithome.com.tw/articles/10193241)、[2](https://ithelp.ithome.com.tw/articles/10193762)、[3](https://medium.com/starbugs/what-are-encoding-encrypt-and-hashing-4b03d40e7b0c)

## `include`、`require`、`include_once`、`require_once` 的差別
* `include`：
  * 提取特定檔案，並載入其全部內容。
  * 但如果給定的路徑，找不到該檔案時，`include`會**繼續跑程式**而不會停止。
* `require`：
  * 提取特定檔案，並載入其全部內容。
  * 但如果給定的路徑，找不到該檔案時，`require`會**停止程式**繼續運作。
* `include_once`：
  * 提取特定檔案，並載入其全部內容。
  * 但如果給定的路徑，找不到該檔案時，`include_once`會**繼續跑程式**而不會停止。
  * 另外這個 function 會檢查是否在程式碼中的其他部分已經有引用同一份檔案，如果沒有就會引用該份檔案，如果有，就不會引用，以防止再次定義 function、variable 的錯誤產生。
* `require_once`：
  * 提取特定檔案，並載入其全部內容。
  * 但如果給定的路徑，找不到該檔案時，`require_once`會**停止程式**繼續運作。
  * 另外這個 function 會檢查是否在程式碼中的其他部分已經有引用同一份檔案，如果沒有就會引用該份檔案，如果有，就不會引用，以防止再次定義 function、variable 的錯誤產生。

參考資料：[1](https://registerboy.pixnet.net/blog/post/24261631)、[2](https://www.tutorialspoint.com/explain-include-require-include-once-and-require-once-functions-in-php)、[3](https://www.php.net/manual/en/function.include.php)

## 請說明 SQL Injection 的攻擊原理以及防範方法
由於我們與資料庫的互動，會經由 SQL 的語法來進行操作，而在網站上的任何輸入，會牽涉到資料庫的部分，就有可能會遇到 SQL Injection 的問題。
在原本設定 SQL 的語法，是沒有防範到這類攻擊，而通常遇到的手法會有三種：
* 略過身分檢查：在輸入帳密的地方，如果沒有處理的話，攻擊者可以用類似 `'OR 1=1 --` 的字串來取得權限或身分，開頭的引號是要關閉 username 的字串，後續的 OR 則是把整個 query 變成可以直接登入資料庫的語法。
* 注入 sub-query：在後面加上其他語法，比如說 `UNION SELECT ...` 來取得全部的帳號密碼，或是整個資料庫的內容等等。
* 入侵 Stored Procedures：把別人將常用的指令，用程式儲存起來的檔案，藉由呼叫他們、使用不同參數來對資料庫進行攻擊。

### 防範方法
把原本的 SQL statement 改為 Prepared Statement。
我們原先會直接寫好 SQL statement 連同參數直接傳給資料庫，但在 Prepared Statement，我們則會先用把原本的 SQL statement 經由 prepare 函數處理過後，再嵌上參數，再傳給資料庫執行，如此一來可避免 SQL Injection 的發生。

參考資料：[1](https://ithelp.ithome.com.tw/articles/10189201)、[2](https://gordonfang-85054.medium.com/%E8%B3%87%E5%AE%89%E6%BB%B2%E9%80%8F%E6%94%BB%E9%98%B2%E7%AD%86%E8%A8%98-1-c9a6b8ada5fa)、[3](https://weikaiwei.com/web/what-is-prepared-statement/)、[4](https://pjchender.blogspot.com/2015/08/php-data-objects-pdo-2-preparedsql.html)、[5](http://mirlab.org/jang/books/asp/sqlInjection.asp?title=18-5%20%B8%EA%AE%C6%C1%F4%BDX%A1%5DSQL%20Injection%A1%5E)

##  請說明 XSS 的攻擊原理以及防範方法
因為 html 裡面用 `<script></script>` 的標籤裡面，可以讓瀏覽器運行 JavaScript，因此就有 XSS (Cross-Site Scripting) 這種在網站的 input 寫進 JavaScript 的程式，進而竊取使用者的 cookie 或跳轉到惡意釣魚網站的用法。以下以三種類型的 XSS 攻擊進行說明：
* Stored XSS (儲存型)：在課程影片中，胡立示範的就是這種類型。在留言版或論壇的文章裡面，寫進 JavaScript 的程式碼，並存到資料庫內，進而讓所有會看到該篇文章的瀏覽器，自動運行所含的程式，我們系上的期中意見調查，也遇過這種事情，還是在教授跟大家分享所有人寫的反饋的時候發生的。
* Reflected XSS (反射型)：常見於用 `GET` 傳遞資料的網站，可以在參數裡面放進 JavaScript，進而讓被害者的資訊被盜用，但這種比較容易從網址列看出端倪，釣魚網站常用這種方式，誘導別人點進連結。
* DOM-Based XSS：頁面上的 JavaScript 操作，若有牽涉到 `.html()` 或 `.innerHTML()` 就有被注入 JavaScript 程式的可能，但這種通常要與前兩者的攻擊類型互相搭配，才能使得網頁生成有效的 DOM 物件，例如嵌入一個會傳送使用者 cookie 的隱藏圖片。

### 防範方法
* Stored 和 Reflected 的類型，要在後端進行處理，使用者輸入的內容都要檢查，把輸入的字串轉換成跳脫字元，像是 php 的 `htmlspecialchars` 就會把原本的輸入輸出成純文字，而非程式碼。
* DOM-Based 類型則是要在原本網頁的 JavaScript 的使用上，盡量把 `.html()` 和 `.innerHTML()` 換成 `.innerText()`。

參考資料：[1](https://yakimhsu.com/project/project_w12_Info_Security-XSS_SQL.html)、[2](https://forum.gamer.com.tw/Co.php?bsn=60292&sn=11267)、[3](https://medium.com/starbugs/%E8%BA%AB%E7%82%BA-web-%E5%B7%A5%E7%A8%8B%E5%B8%AB-%E4%BD%A0%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%B9%BE%E5%80%8B-web-%E8%B3%87%E8%A8%8A%E5%AE%89%E5%85%A8%E8%AD%B0%E9%A1%8C-29b8a4af6e13)

## 請說明 CSRF 的攻擊原理以及防範方法
Cross Site Request Forgery，當使用者與一個網站建立起身分認證的 cookie 或 session 之後，有心人士可以藉由不同的手法，比如點擊圖片或按鈕來發送 request，來誘使使用者用身分認證去對該網站進行操作，而且過程中使用者還會被蒙在鼓裡，可能是刪掉文章、追蹤別人，更甚者銀行轉帳。

### 防範方法
* 所有網站登入之後，不使用就登出，盡量不使用自動登入，但這樣對使用者來說還滿麻煩的。
* 檢查 header 的 Referer，但會遇到三種問題：
  * 瀏覽器不帶 Referer
  * 使用者關閉自帶 Referer
  * 檢查 referer 的程式可能會有 bug
* 使用圖形驗證碼、簡訊驗證碼的驗證機制，但對使用者來說一樣會是很麻煩的方法，因為每個操作都要驗證一次。
* 加入 token：
  * 由 server 端隨機產生，並交給 client 端，每次要跟 server 發送 request，都得附上 token，這樣 server 才會確認是本人，允許其 request。
  * Double Submit Cookie：由 client 或 server 端生成，client 儲存 token，因為偽裝的 request 並不能存取 server domain 底下的 cookie，也就不會有 token。但如果惡意使用者可以接觸到 server 的子網域就另當別論。
* 瀏覽器端，可以在 cookie 設定裡面加上 SameSite，這樣從別的網域發送的 request 就不會加上 server 網站的 cookie，底下還可以細分為兩種方式：Strict 和 Lax，Lax 相對 Strict 來說，放寬了可以在 `<a>`, `<link rel="prerender">`, `<form method="GET">` 這些地方傳送的 request 附上 server 網站的 cookie。

參考資料：[1](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)、[2](https://www.ithome.com.tw/voice/115822)、[3](https://yakimhsu.com/project/project_w12_Info_Security-CSRF.html)、[4](https://ianhung0529.medium.com/chrome-80-%E5%BE%8C%E9%87%9D%E5%B0%8D%E7%AC%AC%E4%B8%89%E6%96%B9-cookie-%E7%9A%84%E8%A6%8F%E5%89%87%E8%AA%BF%E6%95%B4-default-samesite-lax-aaba0bc785a3)、[5](https://ithelp.ithome.com.tw/articles/10251288)