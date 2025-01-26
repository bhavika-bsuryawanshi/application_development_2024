// global arrays
let quantArr = ['', 1,2,3,4,5,6,7,8,9,10];
let priArr = ['', 'low', 'medium', 'high'];
let stores = ['', 'coldstone', 'vampire penguin', 'gelati celesti', 'baskin robbins', 'dairy queen'];
let type = ['', 'cone', 'cup', 'sundae', 'tub', 'with extra toppings'];

class shoppingListView
{
    // constructor (accesses elements and calls method to populate dropdown)
    constructor(model)
    {
        this.model = model;
        // access the table body
        this.table = document.getElementById('shopList'); 

        // access the cell where price is displayed
        this.totalprice = document.getElementById('totalprice');

        this.model.subscribe(this.updateView.bind(this));
    }

    updateView(model, msg)
    {
        if (msg === 'itemAdded')
        {
            this.updateList(model.addTableRow(), this.table);
            this.updateList(model.updateTotalPrice(), this.totalprice);
        }
    }
    
    // method to populate dropdown menus
    popDrop(id, a)
    {
        // access the specified element by id
        const tempID = document.getElementById(id);

        // populate  the options in dropdown menus
        for(let item of a) 
        {
            let option = document.createElement('option');
            option.innerText = item;
            option.value = item;
            tempID.appendChild(option);
        }
    }

    // method to add a row to the table for an Item we pass in
    addTableRow(item) {
        
        // create a row element
        const newRow = document.createElement('tr');

        // create the first cell of the row, which is a checkbox
        const firstCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type='checkbox';
        firstCell.appendChild(checkbox);
        newRow.appendChild(firstCell);

        // create an array of values and for each value set the inner text of a new cell and append it to the row. 
        const values = [item.name, item.quantity, item.priority, item.store, item.section, item.price];
        for(let index of values) 
        {
            let newCell = document.createElement('td');
            newCell.innerText = values[index];
            newRow.appendChild(newCell);
        }

        // set the row to a certain class name that changes color depending on priority
        newRow.className = item.priority;

        // append the row to the table body
        this.shoppingList.appendChild(newRow);
    }

    // display the new total price
    updateTotalPrice(newTotal) {
        this.priceDisplay.innerText = newTotal;
    }

}
