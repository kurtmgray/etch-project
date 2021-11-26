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
        console.log(size)
        if(size > 100 || size === 0 || size === false){ // still need to work out ok with no string entered, also cancel button
            size = 0
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

