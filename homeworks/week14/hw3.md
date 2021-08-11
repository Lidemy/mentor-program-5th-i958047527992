## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
Domain Name System，幫助我們把網域名稱，像是 `www.google.com` 轉換成 IP 位址。

由於我們連接到不同網路，實際上是傳送 request 到不同的 IP 位址，但對我們來說，IP 位址並不好記憶，因此才會有網域名稱這種比較好記憶的網址，所以 DNS 會在收到我們發出的網域名稱之後，去搜尋與它對應的 IP 位址，回傳給我們的瀏覽器，我們的瀏覽器就會再發出 request 去該 IP 位址。

Google 有提供的公開的 DNS，對一般大眾的好處，從官網上來看有加速瀏覽體驗、更安全、不用轉址，這三大特色。對 Google 來說，則是可以提升其廣告效益的投放，並且可以得到使用者的足跡，進而去分析他們的行為模式，來使得廣告更能符合不同使用者的需求。

參考資料：
* [Google跨入DNS服務](https://ithome.com.tw/node/58488)
* [什麼是 DNS？](https://aws.amazon.com/tw/route53/what-is-dns/)
* [What is DNS? | How DNS works](https://www.cloudflare.com/zh-tw/learning/dns/what-is-dns/)
* [使用 Google Public DNS 服務，上網速度不一定會變快！](https://blog.miniasp.com/post/2009/12/08/Use-Google-Public-DNS-may-not-surfing-faster-as-you-expected)

## 什麼是資料庫的 lock？為什麼我們需要 lock？
為了避免同時間，資料庫的同一筆資料被多個 transactions 讀取與寫入，因此才會有 lock 的機制，來使該資料的讀寫，同時間只有一個 transaction 可以執行，否則我們無法知道該筆資料在多個 transactions 執行之後，真正的結果會是什麼，如果每一個 transaction 都拿一開始讀到的值進行操作的話。

後續還有衍伸出可以多個 transactions 共享的共享鎖，讓他們都可以讀資料，但寫資料的還是只有獨一無二的互斥鎖，直到 transaction 完成才能給其他也要寫入同一筆資料的 transaction。

參考資料：
* [#65 資料庫引擎的交易資料鎖定 (Lock) 策略](http://www.woolycsnote.tw/2017/11/65-lock.html)

## NoSQL 跟 SQL 的差別在哪裡？
SQL：
* 一開始要定義好資料庫的架構，決定有哪些欄位與值，以 table 形式儲存。
* 較難新增欄位，後續需要較大工程才能增加不同欄位。
* 有正規化，避免重複的資料在不同的 table 裡。
* 有 JOIN 語法，可以連結多張 table。
* 注重 ACID。
* 可採 Vertical scaling 提升效能。

NoSQL：
* 不須事先設定好架構，以類似 JSON 格式儲存資料。
* 可以直接在資料裡面加上新欄位。
* 沒有正規化，會傾向在資料裡面放入重複的資訊，相較之下會使查詢速度快一些。
* 沒有 JOIN 語法。
* 注重 CAP。
* 可採 horizontal scaling 提升效能。

參考資料：
* [SQL vs NoSQL: The Differences](https://www.kshuang.xyz/doku.php/database:sql_vs_nosql)
* [RDBMS v.s. NoSQL](https://shininglionking.blogspot.com/2018/04/rdbms-vs-nosql.html)
* [NoSQL vs SQL Databases](https://www.mongodb.com/nosql-explained/nosql-vs-sql)

## 資料庫的 ACID 是什麼？
* Atomicity(原子性)：單筆交易，可以包含很多流程，但結果只會全部都成功，要不然就全部都失敗，不會有部份成功的狀況產生。
* Consistency(一致性)：交易結束後，資料仍會符合資料庫設定的限制、規則、Primary key、foreign key 等。
* Isolation(隔離性)：同一筆資料不會同時被兩個交易更改，以免資料發生錯誤，難以預期是哪個交易對資料進行更改。
* Durability(持續性)：一旦交易成功，紀錄就會持續地存在資料庫中，即使後來發生當機或停電，也能從已經儲存的交易裡面去還原最後的資料狀態。

參考資料：
* [│資料庫│淺談關聯式資料庫與ACID特性](https://medium.com/appxtech/%E8%B3%87%E6%96%99%E5%BA%AB-%E6%B7%BA%E8%AB%87%E9%97%9C%E8%81%AF%E5%BC%8F%E8%B3%87%E6%96%99%E5%BA%AB%E8%88%87acid%E7%89%B9%E6%80%A7-83a1b4178981)
* [資料庫的 Transaction (交易) - ACID 基本介紹](http://www.woolycsnote.tw/2017/07/54-transaction-acid.html)
* [SQL 大小事](https://totoroliu.medium.com/%E8%B3%87%E6%96%99%E5%BA%AB-acid-bb87324035a8)
* [ACID](https://isdaniel.github.io/acid/)
