// 1
function shoutOut(){
    return 'Halo Function'
}

console.log(shoutOut())

// 2

function calculateMultiply(){
    return num1 * num2
}

var num1 = 5
var num2 = 6

var hasilKali = calculateMultiply(num1, num2)
console.log(hasilKali)


// 3

function processSentence(){
    return 'My name ' + name + ', i am ' + age + ' years old,' + ' my address ' + address + ', my hobby ' + hobby
}

var name = 'Jumadi'
var age = '26'
var address = 'jl. Malioboro Yogyakarta'
var hobby = 'climbing'

var fullSentence = processSentence (name, age, address, hobby)
console.log(fullSentence)