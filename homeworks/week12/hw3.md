## 請簡單解釋什麼是 Single Page Application
所有結果輸出為同一個網頁，使用者端不需要跳轉其他頁面，就可以很滑順地在同一頁面進行所有的操作，網頁本身由 JavaScript 來動態產生，用 Ajax 來跟後端伺服器傳遞資料。

## SPA 的優缺點為何
優點：
* 所有操作都在同一頁面上，不會有跳轉，空白頁面的體驗。
* 在操作上，會比起沒做 SPA 來的快且順暢一些，因為是由 JavaScript 執行，畫面上不會有空白或停頓。
* 可以保持影音持續播放，像是音樂播放器或是 YOUTUBE 那類點了其他元件，播放器仍舊可以繼續跑，不用重新載入。

缺點：
* 第一次需要下載的檔案比較多，尤其是跟網頁呈現有關的 JavaScript 檔。
* 搜尋引擎看到的網頁，html 會是一片空白的，所以 SEO 效果不會很好。
* 如果使用者太頻繁點擊網頁的元件，送出去的 request 的 response 可能還沒收到，就又要送出別的 request，導致使用者收到的會是前面送出的 request 的 response，不能保證使用者會得到正確的資料。
* 前端要能有方法區分使用者要去什麼頁面，要渲染出什麼樣的網頁給使用者。

## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？
之前是藉由發出不同頁面的 request，來取得不同的網頁檔案，然後 render 在瀏覽器上，所有要什麼資料，呈現什麼，都是由後端負責。後端收到 request、處理完後，回傳結果的檔案回去給瀏覽器。
而我們這周用的方法，則是前端純粹跟後端要資料，所有的呈現都是由前端動態呈現，所以前端要能辨別使用者的需求，跟後端拿資料後，render 在瀏覽器上。

參考資料：
* [搞懂網頁技術名詞：MVC、SPA、SSR、AMP 及 PWA](https://vocus.cc/article/5d4d8d31fd89780001faf03c)
* [跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://hulitw.medium.com/introduction-mvc-spa-and-ssr-545c941669e9)
* [前後端分離與 SPA](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)
* [18. [FE] 為什麼網站要做成 SPA？SSR 的優點是什麼？](https://ithelp.ithome.com.tw/articles/10224772)
* [Day20– 前端小字典三十天【每日一字】– SPA](https://ithelp.ithome.com.tw/articles/10160709)