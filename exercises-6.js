// 1. LOOPING DENGAN WHILE

var i = 2
console.log('LOOPING PERTAMA')
while (i <= 20){

    console.log(i + ' - I love coding')
    
    i+=2
}

var i = 20

console.log('LOOPING KEDUA')
while (i >= 2){

    console.log(i + ' - I lwill become fullstack developer')
    
    i-=2
}

console.log('PERULANGAN MENGGUNAKAN FOR')

// 2. MELAKUKAN LOOPING MENGGUNAKAN FOR

console.log('LOOPING PERTAMA')
for(var i = 1; i <= 20; i++){
    console.log(i + ' - I love coding')
}

console.log('LOOPING KEDUA')
for(var i = 20; i >= 1; i--){
    console.log(i + ' - I lwill become fullstack developer')
}


// 3 ANGKA GANJIL DAN GENAP


console.log('ANGKA GANJIL DAN GENAP')


for (var i = 1; i <= 100; i++){

    if (i % 2 == 0){
        console.log(i + ' Bilangan Genap')
    }else{
        console.log(i + ' Bilangan Ganjil')
    }

}