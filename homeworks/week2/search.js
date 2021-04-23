function search(arr, n) {
    // 先計算在陣列中間的 index
    var half = Math.floor(arr.length/2)
    // 設定尋找陣列的頭的 index
    var start = 0
    // 設定尋找陣列的尾的 index
    var end = arr.length-1
    // 當 start 或 end 超過另一個，就表示 index 跑到陣列外面，要找的數字不在陣列裡面，即停止
    while(start <= end) {
        // 檢查在陣列中間的是不是要找的數字
        if (arr[half] === n){
            return half
        }else if(arr[half] < n){
            //如果要找的數字比中間還大，把 start 設為中間加 1，重新計算中間位置，
            start = half+1
            half = Math.floor((start+end)/2)
        }else if(arr[half] > n){
            //如果要找的數字比中間還小，把 end 設為中間減 1，重新計算中間位置
            end = half-1
            half = Math.floor((start+end)/2)
        }
    }
    // 如果數字不在陣列理，回傳 -1 
    return -1
}