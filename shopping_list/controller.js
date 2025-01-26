// initialize model and view objects
const model = new shoppingListModel();
const view = new shoppingListView(model);
view.popDrop('quantity', quantArr);
view.popDrop('priority', priArr);
view.popDrop('storeName', stores);
view.popDrop('storeSection', type);


// function called when button is clicked
function addToList() 
{
    // access the values of the user input and convert quantity and price to numbers for calculations
    const name = document.getElementById('itemName').value;
    const quantity = Number(document.getElementById('quantity').value);
    const priority = document.getElementById('priority').value;
    const store = document.getElementById('storeName').value;
    const section = document.getElementById('storeSection').value;
    const price = Number(document.getElementById('pricePerUnit').value);

    // use user input to create an item
    const item = new Item(name, quantity, priority, store, section, price);

    // add item to the shopping list
    model.addItem(item);
}

// event listener for addItem button 
document.getElementById('addItem').addEventListener('click', addToList);