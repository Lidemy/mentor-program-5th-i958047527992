``` js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
console 會輸出：
```
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5
```
同第一題，程式碼由上到下執行，然而當遇到 `setTimeout` 時，它會呼叫瀏覽器幫忙設定一個 0ms 後到期的計時器，把裡面的 function `() => {console.log(i)}` 放去等待。接著 `setTimeout` 就會 pop，繼續執行下面的程式碼。

這題前半部顯示的東西，就是迴圈裡面的 `console.log('i: ' + i)`，會從 `i=0` 一路輸出到 `i=4`。

在 stack 清空的情況下，event loop 會將計時器已經到期，放在 task queue 的第一個 function，放到 stack 去執行，直到執行完、輸出、pop、stack 清空，才會再放下一個 function。在此因為迴圈跑完以後，i 已經來到 5，所以後續的五個從 task queue 送到 stack 的 `() => {console.log(i)}`，輸出的都會是 5。

但是因為這裡的 `setTimeout` 會因為 i 而變，所以會使後半部的 function，兩兩相差一秒才放到 task queue，然後才被 event loop 放進空的 stack 裡。所以 console 上會是 `i: 0` 到第一個 5 近乎同時輸出，接著每隔一秒再輸出一個 5。