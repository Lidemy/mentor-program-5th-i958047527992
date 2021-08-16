## 十一到十五週心得
### 11~15 週
#### Session 與 Cookie 的差異
從古至今聽到的就是 Cookie 這個響亮的名字，不管是高中還是大學的課堂上，只要跟網路有關的，就一定得提到這個名字。
不過 session 就真的是第一次遇到，原來是瀏覽器裡面可以使用來實作 cookie 的方法之一，還滿酷的。
#### 資訊安全（Hashing、SQL Injection、XSS）
除了 hashing 約略有聽過，知道他是用來作為加密方法以外，其他都是我第一次遇到的。不過這次也讓我對 hashing 有更深的了解，以前的 hashing 就只知道多對一、不同 hashing 函數，直到實際運用才知道他的效果是什麼。
SQL Injection、XSS 則對我來說非常新鮮，原來也可以從使用者輸入端去獲取資料庫的機密資訊，XSS 我在我們大學課堂上，教授打開期中意見調查的時候，就有被同學植入 script，導致頁面的背景變得很特別，還有圖片在螢幕上像古早 DVD 播放器一樣的行進方向在動。
#### jQuery
久仰大名的 jQuery，終於見到你。原來是個可以方便開發的 library，把常用的東西都幾乎簡化成用 `$` 來做，還滿聰明的作法。
#### Bootstrap
大學一年級的計算機概論就提過這個套模板的 CSS，當時的印象就是不同的模板可以用來實作網頁，就這樣。
直到現在碰到他，才發現他就像 jQuery 一樣是個方便直接使用的 CSS 架構。
#### CSS 預處理器、Webpack
CSS 預處理器，真的是能把 CSS 開發再往上提升一個境界，把所有使用相同的 CSS 樣式包裹起來，給予不同的標籤使用，或是可以用迴圈、函數的形式，真的好神。
Webpack 則是另一個讓我大開眼界的東西，原來有這種可以從都包到尾，一條龍送你安心上前端路途的工具，amazing。
#### 部署
兩次的部署，不管是在 huli 的伺服器或是我們在第十四週放在自己找的雲端業者，搭配上能自訂的網域，真的做出能連到的網站與服務，還真的是想都沒想過，也因為有 huli 伺服器部署的經驗，以及前人們的指引，也才讓最後的部署，遇到的難關不多。

### 現代瀏覽器內部揭密 (中國翻譯)
[原文](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
* [第一部分](https://juejin.cn/post/6844903679389073415)
* [第二部分](https://juejin.cn/post/6844903692890537992)
* [第三部分](https://juejin.cn/post/6844903692894732295)
* [第四部分](https://juejin.cn/post/6844903695600058375)

第一部分概述 CPU、GPU、瀏覽器的架構；第二部分則深入去談輸入 URL 之後，發生了什麼事情。

第一次看到的時候，我就像回到大學的課堂上，聽教授在課堂上講述網路背後的運作邏輯，不過這個翻譯是從隔壁國家來的，所以在用語上面會有一些需要轉換的地方，比方說 process 和 thread，他們翻為進程和線程。
我們打開瀏覽器的分頁，Chrome 就會用一個 process 去處理，幾個分頁就幾個 process，如此一來，才不會在其中一個分頁發生問題，無法載入的情況下，導致整個 Chrome 要關掉重開，也減少彼此互相干擾的可能。

第二部分在談論的導航，就是以 Chrome 為基礎，在講述瀏覽器底下，哪些程序會被呼叫、資料傳遞，最後渲染頁面。
我過段時間，學到後面再回頭看，可能會再清楚一些。

第三部分，聊到整個渲染過程：建構 DOM 樹、計算 CSS、建構 layout tree、最後繪製，每次只要有改動，可能是 JS 改變元素，就得從頭再跑一次流程。
以前以為就建好 DOM、CSS、JS 跑一跑就結束了，原來背後還有這些過程，瀏覽器和電腦做的事情真的是滿多的，不過從光柵之後，就有點複雜，現在回想也還是覺得滿難懂的。

第四部份，事件，這部分是關於對於網頁做任何事情，背後運作的東西，尤其現在網頁講求互動，就更顯得事件的重要性。
尤其是為了避免使用者體驗變差，而把事件聚集在定時發送，但這樣也會造成需要精細操作的工作，會失真。解完一個問題，就會再遇到新的問題，哈哈。debug 也是這樣。

最後看了 huli 的瀏覽器文章導讀，把四部分再重新複習過一遍，省去深入的細節，也稍微更了解瀏覽器在幹嘛。

### [第十五週網站前後端開發基礎測試參考解答](https://github.com/Lidemy/mentor-program-3rd/issues/5)
以下以類似以前考卷檢討的方式，撰寫我觀念不清楚的題目。

#### Q3 同源政策
主要癥結點在於瀏覽器，對於簡單請求(GET, POST)來說，他們的 request 有發送出去，瀏覽器也有接收到來自 server 的 response，但瀏覽器因為同源政策的緣故，不會把 response 丟給 js 去執行接下來的動作。

而對於比較複雜，尤其有自定義 header 的 request，就要先預檢（preflighted），由瀏覽器用 options 的方式傳送給 server，確定後續要傳送的 request 是可以傳送的，才會傳送。

參考資料：[輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)、[同源政策](https://developer.mozilla.org/zh-TW/docs/Web/Security/Same-origin_policy)、[跨來源資源共用](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS#.E5.85.88.E5.B0.8E.E8.AB.8B.E6.B1.82)、[網站安全🔒 Same Origin Policy 同源政策 ! 一切安全的基礎](https://medium.com/%E7%A8%8B%E5%BC%8F%E7%8C%BF%E5%90%83%E9%A6%99%E8%95%89/same-origin-policy-%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-%E4%B8%80%E5%88%87%E5%AE%89%E5%85%A8%E7%9A%84%E5%9F%BA%E7%A4%8E-36432565a226)

#### Q4 XSS
除了最顯而易見，一定得替換的 `<script>` 標籤以外，其他像是 `<img>`、`<a>` 等可以嵌入 JS 的地方，我連大寫 `<SCRIPT>` 也沒想到。
最主要的三種型式：
* Stored XSS：不要相信使用者的輸入，任何只要是 input 的地方都要思考到會被植入惡意程式的可能。
* Reflected XSS：URL 裡面放上 JS，任何不知名的連結，都有可能會使自己的資料有被輕易盜取的可能。
* DOM Based XSS：在 DOM 裡面植入可以運行 JS 的元素，通常與其他兩種搭配，才會在其他人探訪該網頁時，啟動這個攻擊。

參考資料：[【網頁安全】給網頁開發新人的 XSS 攻擊 介紹與防範](https://forum.gamer.com.tw/Co.php?bsn=60292&sn=11267)、[身為 Web 工程師，你一定要知道的幾個 Web 資訊安全議題](https://medium.com/starbugs/%E8%BA%AB%E7%82%BA-web-%E5%B7%A5%E7%A8%8B%E5%B8%AB-%E4%BD%A0%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%B9%BE%E5%80%8B-web-%E8%B3%87%E8%A8%8A%E5%AE%89%E5%85%A8%E8%AD%B0%E9%A1%8C-29b8a4af6e13)、[跨網站指令碼](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC)、[Cross-site scripting (XSS) cheat sheet](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet)

#### Q7 同源政策
雖然瀏覽器可以看到那個網站的資料，但因為同源政策的影響，瀏覽器可能會也可能不會傳遞資料給 Ajax。
兩者不同處是一個是瀏覽器收到資料，顯示在網頁上；另一個則是瀏覽器收到資料，要傳給 Ajax。

#### Q9
忘了以函數作為參數的話，是不能在後面加上 `()`，加上括號的意思會變成，當瀏覽器加載中，start 函數就會被啟動而不是瀏覽器加載完才啟動。
---
以下是補充理解的部分

#### Q8 Bcrypt
Bcrypt，可以設定加的鹽、加鹽加密循環次數之後生成一個結果。

參考資料：[Bcrypt加密之新认识](https://www.jianshu.com/p/2b131bfc2f10)、[(實作)bcrypt將使用者密碼加密](https://ithelp.ithome.com.tw/articles/10196477)

#### Q10
當時看完想到出問題的那一行，就是 `item.selfId === homeData.selfId`，因為只有這行有用到 `selfId`，但我就只想到這裡。
要再細部去思考，錯誤訊息是 `Uncaught TypeError: Cannot read property 'selfId' of undefined`，回頭看，如果 `item` 是 undefined，那前面的判斷是就會先出錯。所以問題是出在 `homeData` 沒有被定義，才跑出這個錯誤訊息。