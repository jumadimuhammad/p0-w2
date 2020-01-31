// 1. MENYUSUN BARISAN BINTANG

for (var i = 0; i < 5; i++ ){
    console.log('*')
}



// 2. MENYUSUN BARISAN BINTANG PERSEGI PANJANG

console.log('PERULANGAN BERSARANG PERSEGI PANJANG')

for (var i = 0; i < 5; i++ ){
    var bintang = ''
    for (var j = 0; j < 5; j++ ){
        bintang += '*'
    }console.log(bintang)
}


// 2. MENYUSUN BARISAN BINTANG SEGITIGA


console.log('PERULANGAN BERSARANG SEGITIGA')

var temp = ''

for (var i = 0; i < 5; i++ ){
    temp = '*'
    for (var j = 0; j < i; j++ ){
        temp += '*'
    }console.log(temp)
}