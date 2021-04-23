function search(arr, n) {
    var half = Math.floor(arr.length/2)
    var start = 0
    var end = arr.length-1
    // 當 start 或 end 超過另一個，就表示 index 跑到陣列外面，就停止
    while(start <= end) {
        // 看中間的是不是要找的數字
        if (arr[half] === n){
            return half
        }else if(arr[half] < n){
            //如果要找的數字比中間還大，那找的陣列 start 要是中間加 1，接著重新計算中間位置
            start = half+1
            half = Math.floor((start+end)/2)
        }else if(arr[half] > n){
            //如果要找的數字比中間還小，那找的陣列 end 要是中間減 1，接著重新計算中間位置
            end = half-1
            half = Math.floor((start+end)/2)
        }
    }
    return -1
}