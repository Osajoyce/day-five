//level 1
const arr = ['come', 'go', 'visit', 'the', 'gallery','again']
const arrr = Array() 
console.log(arrr) 
console.log(arr.length)
console.log(arr[0])
console.log(arr[arr.length-1])
console.log(arr[arr.length/2])
let namee = arr[2]
console.log(namee.toUpperCase())
console.log(arr.toString())
console.log(arr.join(' '))

if (arr.includes('galery')){
    console.log ("gallery")
}
else{console.log("not found")}

const itCompanies =  ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let str = itCompanies[0]
let str1 = str.match(/o/gi).length
if(str1>=2){
   arrr.push(str)
}
else{
    console.log(arrr)
}
let strr = itCompanies[1]
let str2 = strr.match(/o/gi).length
if(str2>=2){
   arrr.push(strr)
}
else{
    console.log(arrr)
}
let strrr = itCompanies[2]
let str3 = strrr.match(/o/gi).length
if(str3>=2){
   arrr.push(strrr)
}
else{
    console.log(arrr)
}
console.log(arrr)
console.log(itCompanies.sort( ))
console.log(itCompanies.slice(0,3))
console.log(itCompanies.splice( ))
//level 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, python.'
let arrtext = text.split(' ')
console.log(arrtext)
console.log(arrtext.length)

//level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let arranged = ages.sort()
let min= arranged[0]
console.log(min)

let max= arranged[arranged.length-1]
console.log(max)

let quantity = arranged.length
console.log(quantity)

let median1 = arranged.length/2
let median2 = (arranged.length/2)+1
let median = [arranged[median1], arranged[median2]]
console.log(median)

let sum = 0
for (let i = 0; i<quantity; i++)
{
    sum += arranged[i]
}
console.log(sum)
let average = sum/arranged.length
console.log(average)