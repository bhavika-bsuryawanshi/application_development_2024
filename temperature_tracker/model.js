class Temperature
{
    constructor(temperature)
    {
        this.temperature = temperature;
    }

}

class TemperatureTrackerModel
{
    constructor()
    {
        this.totalTemps = [];
    }

    addTotalTemps(t)
    {
        this.totalTemps.push(t);
        this.sortTemps();
    }

    sortTemps()
    {
        this.totalTemps.sort((a, b) => a - b);  
    }

    getAllList()
    {
        return this.totalTemps; 
    }

}