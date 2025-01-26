class Item
{
    // constructor to create a new item (parameters: task name, priortiy, category, duration)
    constructor(taskname, priority, category, duration)
    {
        this.taskname = taskname;
        this.priority = priority;
        this.category = category;
        this.duration = duration;
    }

    // return category
    getCategory()
    {
        return this.category;
    }

    // return task name
    getTaskName()
    {
        return this.taskname;
    }

    // return priority
    getPriority()
    {
        return this.priority;
    }

    // return duration
    getDuration()
    {
        return this.duration;
    }
}

class ItemListModel
{
    // constructor for list of items
    constructor()
    {
        this.list = [];
        this.total = 0;
    }

    // method to add items to list and update the total duration of tasks
    addItem(item)
    {
        this.list.push(item);
        this.total = this.total + item.getDuration();
    }

    // return total duration
    getTotalTime()
    {
        return this.total;
    }
}