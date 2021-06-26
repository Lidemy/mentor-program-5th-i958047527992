## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
* VARCHAR：
  * 可以更改在資料庫設定的長度限制，最大到 65535 個 characters
  * 當字串長度小於等於 255，占用 n + 1 bytes，超過則占用 n + 2 bytes，n 為字串長度
  * 使用時機：確定儲存資料的長度上限，例如我們這次作業，給使用者設定的暱稱
* TEXT：
  * 不能更改長度限制，就是固定 65535 個 characters
  * 占用 n + 2 bytes，n 為字串長度
  * 使用時機：對儲存資料的長度不確定時，例如我們這次作業，給使用者打的評論


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
* Cookie 是存在瀏覽器的資訊，可以做為傳送給 server 的資訊，server 可以藉 cookie 的資料判斷 request 的身分。
* 當使用者登入之後，伺服器會回傳 `Set-Cookie Header` 在使用者的瀏覽器上儲存資料，接著之後使用者傳送 request 給伺服器時，會把相應的 cookie 帶上 cookie 的 header，就能讓伺服器辨別使用者的身分，提供其他因此身分得以使用的服務。



## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
* 對申辦帳號沒有太多限制，可以讓別人用 bot 不斷產生新帳號來使 server 負擔太大到 shutdown。
* session 儲存的東西沒有被加密，有機會被他人竊取並盜用身分。
