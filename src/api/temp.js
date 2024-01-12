// function tempFunc(){
//     searchStation({query: 'TVM'})
//     .then(resp => console.log('Inside Temp Func: ', resp))
// }

function tempFunc(){
    let sampleObject = {
        fromStationCode: 'BVI',
        toStationCode: 'NDLS',
        dateOfJourney: '2023-12-24'
    }

    trainsBetweenStations(sampleObject)
    .then(resp => {
        displayObjectData(resp)
    })
}

function displayObjectData(trainArray){
    let trainListElement = document.getElementById("trainList");
    for(let trainObject of trainArray){
        let trainNameItem = document.createElement("li");
        trainNameItem.innerText = trainObject.train_name;
        trainListElement.appendChild(trainNameItem);
    }
}


