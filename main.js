const gridContainer = document.querySelector('.grid-container')
const body = document.querySelector('body')
const button = document.createElement('button')
//let size = prompt('Enter the base number for your grid:')


body.insertBefore(button, body.firstChild)
button.innerText = 'click to clear and resize'


const gridSetup = (size) => {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(i = 0; i <= size * size; i++){
        const gridSquare = document.createElement('div')
        gridSquare.addEventListener('mouseover', e => {
            e.target.classList.add('mouseover')
        })
        gridContainer.appendChild(gridSquare)
    }    
}

window.onload = () => { 
    gridSetup(16)
}    

const clearBoard = () => {
    gridContainer.innerHTML = ''
}

const resizeGrid = () => {
    button.addEventListener('click', () => {
        let size = prompt('Enter the base number for your grid:')
        if(size > 100){
            size = 0
            size = prompt('Enter the base number for your grid:')
            resizeGrid() 
        }
        clearBoard()
        gridSetup(size)
    })
}

button.addEventListener('click', resizeGrid())


// gridContainer.forEach(square => {
//     square.addEventListener('mouseover', e => {
//         e.target.classList.add('mouseover') = 'blue'
//     })
// })

