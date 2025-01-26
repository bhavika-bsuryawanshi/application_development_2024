const model = new TemperatureTrackerModel();
const view = new TemperatureTrackerView();

function addTempsButton()
{
    let userTemp = Number(document.getElementById('tempInput').value); 
    model.addTotalTemps(userTemp);
    const sortedTemps = model.getAllList();
    view.addColdTemp(sortedTemps);
    view.addHotTemp(sortedTemps);
    view.addAllTemps(sortedTemps);
    document.getElementById('tempInput').value = '';
}

document.getElementById('submitTemp').addEventListener('click', addTempsButton);