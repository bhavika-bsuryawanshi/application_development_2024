const model = new ItemListModel();
const view = new ItemListView(model);

window.onload = () => {
    view.popDrop(); 
};

function updateView(selectedView) 
{
    const items = model.list; 

    if (selectedView === "table") {
        view.tableView(items); 
    }
    else if (selectedView === "cards") {
        view.cardsView(items); 
    }
    else if (selectedView === "lists") {
        view.listsView(items);  
    }
}

function changeView() {
    const name = document.getElementById('taskName').value;
    const selectedView = document.querySelector('input[name="selectView"]:checked').value;
    const priority = document.getElementById('priorityDropdown').value;
    const category = document.getElementById('categoryDropdown').value;
    const duration = Number(document.getElementById('duration').value);

    const item = new Item(name, priority, category, duration);
    model.addItem(item);
    document.getElementById('totalTime').innerText = model.getTotalTime(); 

    updateView(selectedView); 
}

document.getElementById('submitView').addEventListener('click', function () {
    const selectedView = document.querySelector('input[name="selectView"]:checked').value;
    updateView(selectedView);  
});

document.getElementById('submitTask').addEventListener('click', changeView);
