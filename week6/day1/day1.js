//const paragraphOne = document.createElement('p')
//paragraphOne.innerText = 'Hi ima paragraph'

/* To put something in our HTML:
1. find the place to put it
2. Append child to that spot*/

//const ourDiv = document.querySelector('#container')
//ourDiv.appendChild(paragraphOne)

function addParagraphToHTML (message) {
  if (message !== undefined) {
    const paragraphOne = document.createElement('p')
    paragraphOne.innerText = message
    const ourDiv = document.querySelector('#container')
    ourDiv.appendChild(paragraphOne)
  } else {
    const paragraphOne = document.createElement('p')
    paragraphOne.innerText = 'poopy butthole'
    const ourDiv = document.querySelector('#container')
    ourDiv.appendChild(paragraphOne)
  }

}

addParagraphToHTML('Hi ima paragraph')
addParagraphToHTML('2')
addParagraphToHTML('3')
addParagraphToHTML('4')
addParagraphToHTML('5')
addParagraphToHTML()