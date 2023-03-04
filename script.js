const container = document.querySelector('.container');

function createGrid(row,column){
    for(i=1;i<=row;i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');
    
    for(j=1;j<=column;j++){
        const columns = document.createElement('div');
        columns.classList.add('columns');
        rows.appendChild(columns);
    }
    container.appendChild(rows);
  }
}

createGrid(16,16)