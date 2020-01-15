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

createGrid(16 , 16);

function createGrid(numberOfRows , numberOfColumns)
{
    for(let  i = 0 ; i<numberOfRows ; i++)
    {
        const row = document.createElement('div');
        container.appendChild(row);
        row.classList.add("row");
        for(let j = 0 ; j<numberOfColumns ; j++)
        {
            const column = document.createElement('div');
            column.classList.add("gridItem");
            row.appendChild(column);
        }
    }
}

const cell = document.querySelectorAll('.gridItem');
cell.forEach((cell) => {
    cell.addEventListener('mouseover' , changeColor);
});

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
    //e.target.classList.add("gridItem-hover");
}
//const btn = document.getElementById("newgrid");
button.addEventListener('click' , clearGrid);

function clearGrid(e)
{
    const gridItems = document.querySelectorAll(".gridItem");
    //gridItems.forEach(item => item.classList.remove("gridItem-hover"));
    gridItems.forEach(item => item.style.backgroundColor = "#FFFFFF");
}
