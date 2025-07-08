const container = document.querySelector('.container')

for(let i=0;i<256; i++){
    const squareDiv = document.createElement('div')
    squareDiv.classList.add('grid')
    container.appendChild(squareDiv)
    squareDiv.addEventListener("mouseenter",()=>{
        squareDiv.style.backgroundColor="black"
    })
}

const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    const newSize = prompt("How many squares per side? (max 100)")
    console.log('user entered: ' + newSize)
    const size  = parseInt(newSize)
    if(size > 0 && size <= 100){
        container.innerHTML=""
        createGrid(size)
    } else{
        alert("Enter a number between 1 and 100")
    }

    
})

function createGrid(size){
    for(let i=0;i<size * size;i++){
        const newDivs=document.createElement('div')
        newDivs.classList.add('grid')
        newDivs.style.width = `${960 / size}px`;
        newDivs.style.height = `${960 / size}px`;
        newDivs.addEventListener('mouseenter', ()=>{
            newDivs.style.backgroundColor='black'
        })
        container.appendChild(newDivs)

    }
}
