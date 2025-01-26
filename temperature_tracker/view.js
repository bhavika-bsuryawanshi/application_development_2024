class TemperatureTrackerView
{
    constructor()
    {
        this.coldList = document.getElementById('coldestList');
        this.hotList = document.getElementById('hottestList');
        this.allList = document.getElementById('allList');
    }

    addColdTemp(arr)
    {
        this.coldList.innerHTML = '';

        for (let i = 0; i < 3; i++)
        {
        let ct = document.createElement('li');
        
        if (arr[i] === undefined) 
        {
            continue;
        }

        ct.innerHTML = arr[i];
        this.coldList.append(ct);
        }
    }

    addHotTemp(arr)
    {
        this.hotList.innerHTML = '';

        for (let i = arr.length - 1; i >= arr.length - 3; i--)
        {
            let ht = document.createElement('li');
            
            if (arr[i] === undefined) 
            {
                continue;
            }

            ht.innerHTML = arr[i];
            this.hotList.append(ht);
        }

    }

    addAllTemps(arr)
    {
        this.allList.innerHTML = '';
        
        for (let i = 0; i < arr.length; i++)
        {
        let at = document.createElement('li');
        
        if (arr[i] === undefined) 
        {
            continue;
        }

        at.innerHTML = arr[i];
        this.allList.append(at);

        }
    }

}