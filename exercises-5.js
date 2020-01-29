// 1. LET'S FORM A SENTENCE

var word = 'JavaScript'
var second = 'is'
var third = 'awesome'
var fourth = 'and'
var fifth = 'I'
var sixth = 'love'
var seventh = 'it!'

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)


// 2. INDEX ACCESSING - 1 BY 1

var word = 'wow JavaScript is so cool';
var firstWord = word[0] + word[1] + word[2]
var secondWord = word[3] +  word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]
var thirdWord = word[14] + word[15] + word[16]
var fourthWord = word[17] + word[18] + word[19]
var fifthWord = word[20] + word[21] + word[22] + word[23] + word[24]

console.log('first word : ' + firstWord)
console.log('second word: ' + secondWord)
console.log('third word : ' + thirdWord)
console.log('fourth word: ' + fourthWord)
console.log('fifth word: ' + fifthWord)

// 3. BREAKING SENTENCE (AGAIN) USING SUBSTRING

var word = 'wow JavaScript is so cool';
var firstWord = word.substring(0, 3)
var secondWord = word.substring(4, 14)
var thirdWord = word.substring(15, 17)
var fourthWord = word.substring(18, 20)
var fifthWord = word.substring(21, 25)

console.log('first word : ' + firstWord)
console.log('second word: ' + secondWord)
console.log('third word : ' + thirdWord)
console.log('fourth word: ' + fourthWord)
console.log('fifth word: ' + fifthWord)


// 4. BREAKING SENTENCE (YET AGAIN) AND COUNT EACH LENGTH

var word = 'wow JavaScript is so cool';
var firstWord = word.substring(0, 3)
var secondWord = word.substring(4, 14)
var thirdWord = word.substring(15, 17)
var fourthWord = word.substring(18, 20)
var fifthWord = word.substring(21, 25)

var firstLength = firstWord.length
var secondLength = secondWord.length
var thirdLength = thirdWord.length
var fourthLength = fourthWord.length
var fifthLength = fifthWord.length

console.log('first word : ' + firstWord + ', with length: ' + firstLength)
console.log('second word: ' + secondWord + ', with length: ' + secondLength)
console.log('third word : ' + thirdWord + ', with length: ' + thirdLength)
console.log('fourth word: ' + fourthWord + ', with length: ' + fourthLength)
console.log('fifth word: ' + fifthWord + ', with length: ' + fifthLength)