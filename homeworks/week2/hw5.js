function join(arr, concatStr) {
    var new_str=''
    for(var i=0;i<arr.length-1;i++){
        new_str += arr[i]
        new_str += concatStr
    }
    new_str += arr[arr.length-1]
    return new_str
}

function repeat(str, times) {
    var new_str=''
    for(var i=0;i<times;i++){
        new_str += str
    }
    return new_str
}

console.log(join(['a'], '!'));

