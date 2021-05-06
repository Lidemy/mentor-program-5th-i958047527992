## 請以自己的話解釋 API 是什麼
以飲料店為例，我們平常點飲料只要點菜單上的選項以及甜度冰塊後，等待數分鐘就能拿到飲料。這過程，飲料怎麼做的我們不用知道，我們只要會點餐、付錢，就能拿到不同種類的飲料，而且在每一家飲料店都能這麼做，在這個情況下，點餐就像個 API，你提供想要的品項、甜度、冰塊以及金錢資料過去，店家接到以後，製作飲料(資料處理)，最後把飲料給你(回傳資料)，結束這個交易。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
* 405 Method Not Allowed：不允許此種方式，這個交換資料的方法被禁止或不能使用，
* 431 Request Header Fields Too Large：一個或多個 header 太大，需變小後重新提交。
* 505  HTTP Version Not Supported：伺服器端不支援請求的 http 版本。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL(假設): https://yuanyinrestaurants.com.tw
|說明|Method|path|參數|範例|
| ---- | ---- | ---- | ---- | ----|
|獲取所有餐廳資料|GET|/shops|_limit:限制回傳資料數量|/shops?_limit=5|
|獲取單一餐廳|GET|/shops/:id|無|/shops/10|
|新增餐廳|POST|/shops|name:餐廳名稱, category:餐廳種類, location:餐廳地點|無|
|刪除餐廳|DELETE|/shops/:id|無|無|
|更改餐廳|PATCH|/shops/:id|name: 餐廳名稱, category:餐廳種類, location:餐廳地點|無|
