``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
輸出的結果會是：
```
1
3
5
2
4
```
![](https://i.imgur.com/yqcKG3T.png)

程式碼由上到下執行，會先在 stack 裡面放進 `main()`，接著放進 `console.log(1)`，輸出 1，`console.log(1)` pop，以此類推對下面的程式碼做一樣的事情。

然而當遇到 `setTimeout` 時，它會呼叫瀏覽器幫忙設定一個 0ms 後到期的計時器，把裡面的 function `() => {console.log(2)}` 或 `() => {console.log(4)}` 放去等待。接著 `setTimeout` 就會 pop，繼續執行下面的程式碼。
當計時器的時間到了，該 function 就會放到 task queue 裡面。

當 1, 3, 5 都顯示在 console 上之後，stack 裡面也清空了，task queue 裡面也有兩個 functions。

在 stack 為空的情況下， event loop 就會依序把 task queue 裡面的 function 放到 stack 去執行，執行完一個、pop，stack 清空以後，再把下一個 task queue 的 function 放進 stack 去執行，直到 task queue 裡面也清空為止。
