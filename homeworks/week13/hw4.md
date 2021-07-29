## Webpack 是做什麼用的？可以不用它嗎？
它可以對網站會用到的檔案們，以模組的角度來處理：
* 縮減檔案容量
* 編譯 SASS、SCSS 為 CSS
* 藉由 loader 來預處理不同的檔案格式
* 可以用 ES6 的 Imports、Exports 來引入不同的檔案
最後把全部的東西打包，讓開發者用打包過後的檔案就能輕鬆開發、部屬網站。
不用它也是可以的，Webpack 只是一個方便的打包工具，如果自身能有條理地一步步處理網頁的不同檔案，或是用像 gulp 的任務管理工具也是可以的。

參考資料：[1](https://askie.today/what-is-webpack/)、[2](https://medium.com/i-am-mike/%E4%BB%80%E9%BA%BC%E6%98%AFwebpack-%E4%BD%A0%E9%9C%80%E8%A6%81webpack%E5%97%8E-2d8f9658241d)

## gulp 跟 webpack 有什麼不一樣？
gulp：
* 任務管理工具
* 自動化流程，可以藉由 plugin 來執行不同任務，像是用 webpack、使用 Babel 編譯、壓縮圖片、CSS、JS、HTML
gulp 最主要是做任務管理，開發者可以把不同的任務寫進去，然後藉由 gulp 自動跑那些流程，但它就比較不適合模組化打包，這部分 webpack 比較有優勢，而這也是 webpack 最主要的強勢，在前端的模組化打包上。

參考資料：[1](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29504/)、[2](https://www.zhihu.com/question/45536395)、[3](https://hackmd.io/@Heidi-Liu/note-fe201-gulp-and-webpack#gulp%EF%BC%9A%E6%95%B4%E5%90%88%E6%B5%81%E7%A8%8B)

## CSS Selector 權重的計算方式為何？
!important > inline style > ID > Class/psuedo-class/attribute > Element/pseudo-elements > *(universal)
* 權重最低的是設定全部的 `*`
* 接著是 [`elements`](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element) 與 [`pseudo-elements`](https://www.w3schools.com/css/css_pseudo_elements.asp)，例如 `div`、`p`、`a`、`li`；`::after`、`::first-letter`
* 再來是 `class`、[`psuedo-class`](https://www.w3schools.com/css/css_pseudo_classes.asp) 與 `attribute`，例如 `:nth-child()`、`:nth-of-type`；`type:checkbox`
* 再往上，是獨一無二的 `id`。
* 在大一些，是設定在 `html` 裡面的行內元素 `inline style`
* 最後最大的是 `!important`，但在使用上，只有 `!important` 能蓋過 `!important`，會使得 CSS 到處都是 `!important`，別輕易使用。

參考資料：[1](https://ithelp.ithome.com.tw/articles/10196454)、[2](https://www.tpisoftware.com/tpu/articleDetails/931)