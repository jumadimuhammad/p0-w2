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

console.log('\n PERULANGAN MENGGUNAKAN FOR \n')



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

console.log('\n')
console.log('ANGKA GANJIL DAN GENAP')
console.log('\n')

for (var i = 1; i <= 100; i++){

    if (i % 2 == 0){
        console.log(i + ' Bilangan Genap')
    }else{
        console.log(i + ' Bilangan Ganjil')
    }

}


console.log('\n')
console.log('PERTAMBAHAN COUNTER 2 KELIPATAN 3 \n')

for (var i = 1; i <= 100; i+=2){

    var temp = i * 3

    if (i % 3 == 0){
        console.log(i + ' Kelipatan 3')
    }else{
        console.log(i)
    }

}

console.log('\n')
console.log('PERTAMBAHAN COUNTER 5 KELIPATAN 6 \n')

for (var i = 1; i <= 100; i+=5){


    if (i % 6 == 0){
        console.log(i + ' Kelipatan 6')
    }else{
        console.log(i)
    }

}

console.log('\n')
console.log('PERTAMBAHAN COUNTER 9 KELIPATAN 10 \n')

for (var i = 1; i <= 100; i+=9){


    if (i % 10 == 0){
        console.log(i + ' Kelipatan 10')
    }else{
        console.log(i)
    }

}