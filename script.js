const container = document.querySelector('.container');

function createGrid(row,column){
    for(i=1;i<=row;i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');
    rows.setAttribute('id','cell')
    
    for(j=1;j<=column;j++){
        const columns = document.createElement('div');
        columns.classList.add('columns');
        columns.setAttribute('id','cell')
        rows.appendChild(columns);
    }
    container.appendChild(rows);
  }
}

const hover = document.querySelector('.hover');
hover.addEventListener('mouseover',() => {
    
})

createGrid(10,10);

const cells = document.querySelector('#cell');
console.log(cells)
