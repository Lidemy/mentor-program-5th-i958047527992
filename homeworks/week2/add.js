function add(a, b) {
    // 先把兩個數字轉換為 2 進位字串
    var a_2 = a.toString(2)
    var b_2 = b.toString(2)
    // 接著把他們反轉過來，從個位數開始計算
    var a_2_reverse =a_2.split("").reverse().join("");
    var b_2_reverse =b_2.split("").reverse().join("");
    // 設定 temp 存進位
    var temp = 0
    // 設 calculate_reverse 為加完後的反轉 2 進位答案
    var calculate_reverse = ""
    // 計算 a 與 b 哪一個二進位數擁有比較多位數
    var max_length = a_2_reverse.length > b_2_reverse.length ? a_2_reverse.length : b_2_reverse.length
    // 如果反轉的 2 進位答案還沒到長度還沒超過最多位數的數字，就繼續計算
    while(calculate_reverse.length<max_length){
        // 先抓出兩個反轉數的第一個位數
        var a = Number(a_2_reverse[0])
        var b = Number(b_2_reverse[0])
        // 如果 a、b 兩數與進位 temp 都是 1 的話，則在反轉數答案尾巴加上 1，進設定進位數 temp 為 1
        if(a & b & temp){
            calculate_reverse = calculate_reverse.concat("1")
            temp = 1
        // 如果 a、b 兩數與進位 temp 其中兩個是 1，則在反轉數答案尾巴加上 0，進設定進位數 temp 為 1
        }else if((a & b) || (a & temp) || (temp & b)){
            calculate_reverse = calculate_reverse.concat("0")
            temp = 1
        // 其他直接在尾巴加上 a,b 兩數的 or 結果
        }else{
            temp = 0
            calculate_reverse = calculate_reverse.concat((a || b))
        }
        // a,b 兩個反轉數去掉第一位數
        a_2_reverse = a_2_reverse.slice(1)
        b_2_reverse = b_2_reverse.slice(1)
        // 如果其中一個數已經沒了，補 0
        if(a_2_reverse===""){
            a_2_reverse="0"
        }else if(b_2_reverse===""){
            b_2_reverse="0"
        }
    }
    //最後檢查是否還有進位，有的話反轉數答案加 1
    if(temp === 1){
        temp = 0
        calculate_reverse = calculate_reverse.concat("1")
    }
    // 反轉數答案反轉回來
    var calculate = calculate_reverse.split("").reverse().join("");
    // 把答案從 2 進位轉回 10 進位
    var answer = parseInt(calculate,2)
    // 輸出答案
    return answer
}