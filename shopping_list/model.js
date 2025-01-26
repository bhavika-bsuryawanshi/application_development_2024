class Subject
{
    constructor()
    {
        this.handlers = [];
    }

    subscribe(fn)
    {
        this.handlers.push(fn);
    }

    unsubscribe(fn)
    {
        this.handlers = this.handlers.filter(function(elem)
        {
            if (elem != fn)
            {
                return elem;
            }
        });
    }

    publish(msg, someobj)
    {
        let scope = someobj = someobj || window;
        for (let fn of this.handlers)
        {
            fn(scope, msg);
        }
    }
}


class Item
{
    // item constructor 
    constructor(name, quantity, priority, storeName, type, pricePerUnit)
    {
        this.name = name;
        this.quantity = quantity; 
        this.priority = priority;
        this.storeName = storeName;
        this.type = type; 
        this.pricePerUnit = pricePerUnit; 
        this.purchased = false; 
    }
    
}

class shoppingListModel extends Subject 
{
    // shopping list constructor
    constructor()
    {
        super();
        this.list = [];
    }

    // add items to shopping list
    addItem(item)
    {
        this.list.push(item);
        this.publish('itemAdded', this);
    }

    // calculate total price
    calcTotalPrice()
    {
        let totalPrice = 0;
        for (let l of this.list)
        {
            totalPrice += l.quantity * l.pricePerUnit;
        }
        return totalPrice;
    }
    
}
