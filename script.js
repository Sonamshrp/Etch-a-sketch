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

  const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.addEventListener('mouseover', (e) => {
        e.target.classList.add('clicked');
    })
    //we can use forEach for static node(1) . we should use Array.from() for dynamic node(3).
    //console.log(cell.nodeType) //it checks whether a node is static or dynamic.

    //console.log(typeof cells.length) //it checks whether a nodelist is static or dynamic.
    //consoles number for static and function for dymnamic.
  })

}



const hover = document.querySelector('.hover');

const button = document.querySelector('.button');

function startNew(){
  
    let gridNum = +prompt('size of grid:','enter the number');
    // below code removes the older grid    
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    // below code creates a new grid after older one is removed
    createGrid(gridNum, gridNum);

};
   

button.addEventListener('click',startNew)

