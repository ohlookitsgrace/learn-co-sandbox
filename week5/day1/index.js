console.log('MESSAGE!')

console.log(document.querySelector('#third-div'))
console.log(document.querySelectorAll('div p'))

//1. create element
let pTag = document.createElement('p')
//2. puts text in the paragraph tag
pTag.innerText = "Some Text"
//3. put it on the page
let thirdDiv = document.querySelector('#third-div')
thirdDiv.appendChild(pTag)

//method chaining
document.querySelector('div p').remove()

//below is the same code, just not chained
//let pTag = document.querySelector('div p')
//pTag.remove()


//Data Types
//Number: 1,2,3,4, 3.4 24/3
//Boolean: true false (3 > 4) -> false
//String: 'p' "tag"

//'true' true // not the same
//'1' 1 //not the same
//when its in quotes '', it's automatically a String

