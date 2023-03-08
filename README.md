# Things I learned in this assignment

 >This is my first markdown. And this is amazing. Wish I had known it how to use earlier.

## Contents

* Loop inside loop 

* [When to use event](#when-to-use-event)

* [Dynamic and static node](#dynamic-and-static-node)

* [Things I am still confused about](#problems)

## Loop inside loop

---

```js
function createGrid(row,column){
    for(i=1;i<=16;i++){
    const rows = document.createElement('div');
    rows.classList.add('rows');
    rows.classList.add('cell')
    
    for(j=1;j<=16;j++){
        const columns = document.createElement('div');
        columns.classList.add('columns');
        columns.classList.add('cell');
        rows.appendChild(columns);
    }
    container.appendChild(rows);
  }
}
```

In above code 16 columns are inserted inside each row which in turn creates 16x16 grid.

## When to use event

---

When I did 

```js
const cells = document.querySelectorAll('.columns');
cells.forEach(column => {
    column.addEventListener('mouseover', () => {
        column.classList.add('clicked');
    });
});
```

It didn't add the class *clicked* as I expected. But after doing following code I was able to achieve that

```js
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.addEventListener('mouseover', (event) => {
    event.target.classList.add('clicked');
  })
});
```

Here are a couple of reasons why
> In your event listener, you are using `cells.classList.add('clicked')`; to add the `clicked` class to all the cells. However, `cells` is a NodeList and not an individual element, so you cannot add a class to it directly. Instead, you need to use the `event.target` property inside your event listener to refer to the specific cell that was hovered over, and add the class to that element:

## Dynamic and static node

---

We should use `Array.from()` for dynamic node. However,you can use `buttons.forEach` loop like in an actual array for static node.
 Like you did with below code.

 ```js
 const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.addEventListener('mouseover', (e) => {
        e.target.classList.add('clicked');
    })
  })
  ```

* *dynamic node* consoles **3** when we do `console.log(cell.nodeType)`.

* *static node* consoles **1** when we do the same thing.

We can also check whether a nodelist ,when we, is static or dynamic.

1. `console.log(typeof cells.length)` gives ***number*** for *static node*.

2. consoles ***function*** for *dynamic node*.

## **Notes to pay attention to**

> If you query the DOM using a method like `querySelectorAll()`, the returned node list is **static**. Static node lists do not update automatically as the document changes.

> On the other hand, a **dynamic** node list is a live list that reflects the current state of the document. If you query the DOM using a method like getElementsByTagName(), the returned node list is dynamic. Dynamic node lists are updated automatically when the document changes, so if you add or remove nodes that match the query, the node list will be updated to reflect those changes.

## Problems

---

In this code I was able to fix `startNew()` function adding new grid to the existing.

```js
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
```

While loop here creates a new grid by removing first the old the if it is there with `while (container.firstChild)` condition. If the condition fails ie, false then creates a new grid without executing `removeChild` here. Also following problem was solved as given below

### Previous code

```js
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
```

In this code `mouseover` event does work but I can't add another code to start new grid as that would clutter the `click` function. So I did

```js
const button = document.querySelector('.button');
button.addEventListener('click',()=>{
    let gridNum = +prompt('size of grid:','enter the number');
    console.log(gridNum);
    createGrid(gridNum, gridNum);
});

const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.addEventListener('mouseover', (e) => {
      e.target.classList.add('clicked');
    })
  })
```

But when I removed and put `mouseover` function outside `click` function like above, it was not adding the class `clicked` because

>The issue with the above code is that the mouseover event listener is being attached to the cells before they are created by the createGrid function. Since the cells don't exist when the event listener is attached, the listener doesn't have any effect.

So the solution was to include `mouseover` event inside `createGrid` function like this.

```js
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
  })
}
```

## Note

> In above version, the `createGrid` function adds the `mouseover` event listener to each cell after it creates them. This ensures that the listener is properly attached and the clicked class is added to cells when they are hovered over.

