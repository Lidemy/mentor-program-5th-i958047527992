## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
* `<textarea>`：可以設立一個固定大小的文字欄位，供使用者任意編輯文字，可用在回覆或評論上。
* `<video>`：嵌入一個可以播放影片的播放器，可設寬高。
* `<aside>`：在畫面上設立一個側欄，常用在側邊導覽列或補充主文的資訊。

## 請問什麼是盒模型（box modal）
由四個區域組成：`content`, `padding`, `border`, `margin`。用來調整元素在網頁呈現的樣子。
依據不同的使用情境會需要調整它們彼此的大小、距離、樣式等屬性。
預設的 `box-sizing` 是 `content-box` 在設定 `padding`, `border`, `margin` 時會把整個元素向外推，所以若要以符合我們認知的做法，則要設定為`border-box`，才不會使元素隨著放大，影響整個切版的樣子。

* `content`設定的是內容，也就是文字、圖片...所在的部分，可以設定寬高、背景等屬性。
* `padding`則是指整個元素的邊框到內容之間的部分，通常設定文字與邊框的距離。
* `border`指的是元素的邊框，可以設定不同的樣式、粗細、顏色，還有四個角落的圓弧度。
* `margin`則是元素與其他元素的距離或是跟原本設定位置的差距。

![box model on Chrome dev tool](https://i.imgur.com/Fv5b64g.png)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* `inline`：行內元素，調寬高和上下 `margin` 不會有用，與其他元素會在同一行。影響範圍就是該元素內容所在的空間，常見的有 `span`、`a`、`imput`、`img`。
* `block`：自成一行，可以隨意調寬高、`margin`、`padding`，常見的有 `div`、`ul`、`li`、`p`、`h1`。
* `inline-block`：對外可以有 `inline` 與其他元素並排的特性，對內則可以像 `block` 一樣可以隨意調寬高、`margin`、`padding`。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* `static`：預設的，照著原先排版流排列。
* `relative`：照著原本的排版流，針對原本的定位點，去修改位置，不改變其他元素位置，可搭配`top`、`bottom`、`left`、`right`去調整。
* `absolute`：跳脫排版流，往上找不是第一個 `position` 不是 `static` 的元素，以它為原點。
* `fixed`：跳脫排版流，以所見視窗做定位。
