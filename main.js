const body = document.querySelector("body");

const container = document.getElementById("container");
container.classList.add("topOfContainer");

const buttonDiv = document.createElement('div');
buttonDiv.classList.add("newGridButton");
body.insertBefore(buttonDiv ,container);

const button = document.createElement('button');
button.innerHTML = "New Grid";
button.id = "newgrid";
buttonDiv.appendChild(button);

createGrid(16);

function createGrid(gridSize)
{
    for(let i = 0 ; i<gridSize**2 ; i++)
    {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }
    if(gridSize)
    container.style.gridTemplateColumns = "repeat(" + gridSize + " , 1fr)";

    const cell = document.querySelectorAll('.gridItem');
    cell.forEach((cell) => {
        cell.addEventListener('mouseover' , changeColor);
    }); 
}

function generateRandomColor()
{
    let colorRange = '0123456789ABCDEF';
    var color = "#";
    for(let i = 0 ; i<6 ; i++)
        color+= colorRange[Math.floor(Math.random() * 16)];
    return color;
}

function changeColor(e)
{
    e.target.style.backgroundColor = generateRandomColor();
}

button.addEventListener('click' , clearGrid);

function clearGrid(e)
{
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    promptUser();
}

function promptUser()
{
    var newGridSize = prompt("How many squares(1-64)");
    
    if(newGridSize!=null)
    resizeGrid(newGridSize);
}


function resizeGrid(newGridSize)
{
    createGrid(newGridSize);
}
