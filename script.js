const container = document.querySelector('.container')

const newDivs = document.createElement('div')



container.appendChild(newDivs)

for(let i=0;i<256; i++){
    const squareDiv = document.createElement('div')
    squareDiv.classList.add('grid')
    container.appendChild(squareDiv)
}
