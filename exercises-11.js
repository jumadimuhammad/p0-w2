function balikKata(word){
    var temp = ''
    for (var i = word.length -1; i >= 0; i --){
        temp += word[i] 
    }
    return temp
}

console.log(balikKata('Hello World and Coders'))
console.log(balikKata('Muhammad Jumadi'))
console.log(balikKata('I am a bookworm'))
console.log(balikKata('Coding is my hobby'))
console.log(balikKata('Super'))
