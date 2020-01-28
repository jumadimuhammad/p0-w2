var m = 600
var a = 2

console.log('Resultan gaya = ' + m*a)

var tahun = 2020

if (tahun % 4 == 0 && tahun % 100 != 0 || tahun % 4 == 0 && tahun % 100 == 0 && tahun % 400 == 0){
    console.log('Tahun ' + tahun + ' Tahun kabisat')
}else{
    console.log('Tahun ' + tahun + ' Bukan tahun kabisat')
}



for ( var a = 1; a <= 20; a++){
    console.log(a)
}

prompt('nama saya adalah')