const container = document.querySelector('.container');

function createGrid(row,column){
    for(i=1;i<=row;i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');
    rows.classList.add('cell')
    
    for(j=1;j<=column;j++){
        const columns = document.createElement('div');
        columns.classList.add('columns');
        columns.classList.add('cell');
        rows.appendChild(columns);
    }
    container.appendChild(rows);
  }
}

const hover = document.querySelector('.hover');

const button = document.querySelector('.button');
button.addEventListener('click',()=>{
    let gridNum = +prompt('size of grid:','enter the number');
    console.log(gridNum);
    createGrid(gridNum, gridNum);
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.addEventListener('mouseover', (e) => {
      e.target.classList.add('clicked');
    })
  })
});



console.log(cells)
