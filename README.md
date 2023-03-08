# Things I learned in this assignment

 >This is my first markdown. And this is amazing. Wish I had known it how to use earlier.


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



