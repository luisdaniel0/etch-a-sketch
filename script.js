const container = document.querySelector('.container')

for(let i=0;i<256; i++){
    const squareDiv = document.createElement('div')
    squareDiv.classList.add('grid')
    container.appendChild(squareDiv)
    squareDiv.addEventListener("mouseenter",()=>{
        squareDiv.style.backgroundColor="black"
    })
}
