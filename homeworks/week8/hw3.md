## 什麼是 Ajax？
Asynchronous JavaScript and XML，當 JavaScript 傳送 request 後，如果照著原本的同步作法，會讓整個程式卡在等待伺服器回傳 response 之後才能運作，但這樣會讓整個網頁停住，而且也不能確保得到 response 的所需時間會有多長，因此才會有 Ajax 來讓程式傳完 request 之後，繼續執行後續的程式碼。

## 用 Ajax 與我們用表單送出資料的差別在哪？
* 表單送出資料：在網頁上填寫完資料按下送出之後，就是把資料傳送到伺服器，由他們進行處理再回傳 response ，最後由瀏覽器 render 出來。
* Ajax 送出資料以後，同樣由瀏覽器傳送 request 給伺服器，最後伺服器回傳 response ，這裡不同的地方是，response 會回傳到瀏覽器上的 js 上。

## JSONP 是什麼？
JSON with Padding，因為 img 和 script 不受瀏覽器安全性限制的同源政策影響，因此衍伸出用這種 tag 的方法來獲取跨網域 server 的資料。藉由動態產生 script 並掛載 function 的方式，讓 server 回傳 js 檔案並執行 function，該 function 的參數就是想要請求的資料。

## 要如何存取跨網域的 API？
* 看伺服器回傳的 response 裡面，`Access-Control-Allow-Origin`這項是否包含自己所處的網域。
* 或是加上該 api 允許的驗證方式，像是 twitch api 就要在 header 加上 `Accept` 和 `Client-ID`，傳給 twitch 的 endpoint 之後才會回傳 response 回來。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四周我們用的是 nodejs 直接傳送 request 到 server，中途沒有經過瀏覽器，所以可以自由傳送 request 與接收 response，但這周我們是在瀏覽器上執行 js，而瀏覽器為了安全性考量，才有這一層把關的機制存在。
