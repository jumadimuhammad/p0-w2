
function xo(str){
    var temp = ''
    var x = 0
    var o = 0

    for (var i=0; i<str.length; i ++)  {
        
        if(str[i] == 'x'){
            x += 1
        }

        if(str[i] == 'o'){
            o += 1
        }

    }

    if (x == o){
        temp = true
    }else{
        temp = false
    }

    return temp
}

console.log(xo('xoxoxo'))
console.log(xo('oxooxo'))
console.log(xo('oxo'))
console.log(xo('xxxooo'))
console.log(xo('xoxooxxo'))