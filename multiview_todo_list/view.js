class ItemListView
{
    // constructor to create reference variables for the model, html elements, and lists for populating dropdown 
    constructor(model)
    {
        this.model = model;
        this.main = document.getElementById('mainDisplay');
        this.totalTime = document.getElementById('totalTime'); 
        this.categories = ["School", "Extracurricular", "Other"];
        this.priorities = ["Low", "Medium", "High"];
    }

    // tableView method (parameter: array)
    tableView(array)
    {
        // create three new tables and table rows
        this.main.innerHTML = "";
        let schoolTable = document.createElement('table');
        let ecTable = document.createElement('table');
        let otherTable = document.createElement('table');
        let headerRowS = document.createElement('tr');
        let headerRowE = document.createElement('tr');
        let headerRowO = document.createElement('tr');
        
        // create table heading rows and inner text
        let s = document.createElement('th')
        s.innerHTML = "School";
        let e = document.createElement('th')
        e.innerHTML = "Extracurricular";
        let o = document.createElement('th')
        o.innerHTML = "Other";
        let p1 = document.createElement('th')
        p1.innerHTML = "Priority";
        let t1 = document.createElement('th')
        t1.innerHTML = "Time";
        let p2 = document.createElement('th')
        p2.innerHTML = "Priority";
        let t2 = document.createElement('th')
        t2.innerHTML = "Time";
        let p3 = document.createElement('th')
        p3.innerHTML = "Priority";
        let t3 = document.createElement('th')
        t3.innerHTML = "Time";
        
        // append heading rows to the school table
        headerRowS.appendChild(s);
        headerRowS.appendChild(p1);
        headerRowS.appendChild(t1);
        schoolTable.appendChild(headerRowS);

        // append heading rows to the extracurricular table
        headerRowE.appendChild(e);
        headerRowE.appendChild(p2);
        headerRowE.appendChild(t2);
        ecTable.appendChild(headerRowE);

        // append heading rows to the other table
        headerRowO.appendChild(o);
        headerRowO.appendChild(p3);
        headerRowO.appendChild(t3);
        otherTable.appendChild(headerRowO);

        // append tables to the main display
        this.main.appendChild(schoolTable);
        this.main.appendChild(ecTable);
        this.main.appendChild(otherTable);

        // for loop to append every new item to the table depending on category (parameter: array)
        for (let a of array) 
        {
            // create a new row with three table data elements  
            let x = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            
            // fill each table data element with task name, priority, and duration
            td1.innerHTML = a.getTaskName();
            td2.innerHTML = a.getPriority();
            td3.innerHTML = a.getDuration();

            // append the table data to the table row
            x.appendChild(td1);
            x.appendChild(td2);
            x.appendChild(td3);

            // append to a certain table depending on the category 
            if (a.getCategory() === "School") {
                schoolTable.appendChild(x);
            } else if (a.getCategory() === "Extracurricular") {
                ecTable.appendChild(x);
            } else if (a.getCategory() === "Other") {
                otherTable.appendChild(x);
            }

        }
        // update total time
        this.totalTime.innerHTML = model.getTotalTime();
    }

    // cardsView method (parameter: array)
    cardsView(array)
    {
        this.main.innerHTML = "";

        for (let a of array)
        {
            let x = document.createElement('div')

            let p1 = document.createElement('p');
            p1.innerHTML = "Task: " + a.getTaskName();
            x.appendChild(p1);
            let p2 = document.createElement('p');
            p2.innerHTML = "Category: " + a.getCategory();
            x.appendChild(p2);
            let p3 = document.createElement('p');
            p3.innerHTML = "Priority: " + a.getPriority();
            x.appendChild(p3);
            let p4 = document.createElement('p');
            p4.innerHTML = "Estimated Time Needed: " + a.getDuration();
            x.appendChild(p4);

            this.main.appendChild(x);
        }
        this.totalTime.innerHTML = model.getTotalTime();
    }

    listsView(array)
    {
        this.main.innerHTML = "";
        this.main.style.textAlign = 'left';
        
        let x1 = document.createElement('div');
        x1.style.paddingLeft = '10px';  
        x1.style.paddingRight = '10px'; 
        x1.style.width = '300px';

        let l = document.createElement('h3');
        l.style.textAlign = "left";
        l.innerHTML = "Low:"
        x1.appendChild(l);
        let ul1 = document.createElement('ul');
        x1.appendChild(ul1);

        let x2 = document.createElement('div');
        x2.style.paddingLeft = '10px';  
        x2.style.paddingRight = '10px'; 
        x2.style.width = '300px';

        let m = document.createElement('h3');
        m.style.textAlign = "left";
        m.innerHTML = "Medium:"
        x2.appendChild(m);
        let ul2 = document.createElement('ul');
        x2.appendChild(ul2);

        let x3 = document.createElement('div');
        x3.style.paddingLeft = '10px';  
        x3.style.paddingRight = '10px'; 
        x3.style.width = '300px';

        let h = document.createElement('h3');
        h.style.textAlign = "left";
        h.innerHTML = "High:"
        x3.appendChild(h);
        let ul3 = document.createElement('ul');
        x3.appendChild(ul3);

        for (let a of array)
        {
            let li = document.createElement('li');
            li.innerHTML = a.getTaskName();
            if (a.getPriority() === "Low")
            {
                ul1.appendChild(li);
            }
            else if (a.getPriority() === "Medium")
            {
                ul2.appendChild(li);
            }
            else if (a.getPriority() === "High")
            {
                ul3.appendChild(li);
            }
        }
        this.main.appendChild(x1);
        this.main.appendChild(x2);
        this.main.appendChild(x3);
        this.totalTime.innerHTML = model.getTotalTime();
    }

    popDrop()
    {
        for (let c of this.categories)
        {
            let opt1 = document.createElement('option');
            opt1.innerHTML = c;
            opt1.value = c;
            document.getElementById('categoryDropdown').appendChild(opt1);
        }

        for (let p of this.priorities)
        {
            let opt2 = document.createElement('option');
            opt2.innerHTML = p;
            opt2.value = p;
            document.getElementById('priorityDropdown').appendChild(opt2);
        }
    }
}