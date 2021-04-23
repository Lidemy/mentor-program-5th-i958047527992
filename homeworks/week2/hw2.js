function capitalize(str) {
    if(str[0]>='a' && str[0]<='z'){
        str=String.fromCharCode(str.charCodeAt(0)-32)+str.slice(1)
        return str
    }else{
        return str
    }
}

console.log(capitalize('hello'));