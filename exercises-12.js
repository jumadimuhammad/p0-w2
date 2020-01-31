
function konversiMenit(menit){

    var waktu
    var j
    var m

    if(menit >= 60){
        m = menit % 60
        j = (menit - m) / 60
        if (j < 10 && m < 10){
            waktu = 'jam 0' + j + ':0' + m + ' menit'
        } 
        else if (j < 10){
            waktu = 'jam 0' + j + ':' + m + ' menit'
        }
        else if (m < 10){
            waktu = 'jam ' + j + ':0' + m + ' menit'
        }
        else{
            waktu = 'jam ' + j + ':' + m + ' menit'
        }
        
    } else{
        m = menit
        if (m < 10){
            waktu = 'jam 00:0' + m + ' menit'
        } else{
            waktu = 'jam 00:' + m + ' menit'
        }
    }

    
    return waktu
}

console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))
