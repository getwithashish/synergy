async function searchTrain1() {
  const trainInput = document.getElementById("searchInput").value.trim();
  const trainList = document.getElementById("trainList");
  trainList.innerHTML = ""; // Clear previous search results

  
    // const someData = await getTrainSchedule({ trainNo: trainInput })
    const someSchedule = await getTrainSchedule({trainNo: trainInput})
    .then((response) => {
      console.log("Inside search train: ", response);
      let classArray =  response.class;
      let routeArray  = response.route;
      let runDayArray = response.runDays;
      let quotaArray = response.quota;
      let listName = response.trainName;
      let listNumber = response.trainNumber;
      let listType = response.trainType;

      displayClass(classArray, trainList);
      displayRoute(routeArray,trainRoute);
      displayRunDay(runDayArray,trainRunDay);
      displayQuota(quotaArray,trainQuota); 
      displayTrainDetail(trainDetails, listName, listNumber, listType);
      
    })  
     

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

async function searchSeat(){
  seatAvailability.innerhtml = "";
  const fromInput = document.getElementById("from").value.trim();
  const toInput = document.getElementById("to").value.trim();
  const dateInput = document.getElementById("searchInputDate").value.trim();
  const trainNoInput = document.getElementById("searchInput").value.trim();
  
  
  const enteredDate = new Date(searchInput3);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - enteredDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  // Map the difference in days to the startDay range (0-4)
  let startDay = 0;
  if (differenceInDays === 0) {
    startDay = 0;
  } else if (differenceInDays >= 1 && differenceInDays <= 4) {
    startDay = differenceInDays;
  } else {
    // Handle cases where the entered date is more than 4 days ago
    startDay = 4;
  }

  const selectClassSeat = await getTrainClasses({trainNo:trainNoInput })
  .then((response) => {

    let classArraySeat = response.class;
    let seatQuotaArray = response.quota;
    displayClassSeat(classArraySeat,classSeatContainer);
    displayQuotaSeat(seatQuotaArray,seatQuotaContainer);
  })

  //display class
  function displayClassSeat(classArraySeat, classSeatContainer) {
    let selectClassList = document.createElement('select'); // Create a <select> element
  
    for (let c = 0; c < classArraySeat.length; c++) {
      let optionItem = document.createElement('option'); // Create an <option> for each object
      optionItem.value = classArraySeat[c].value;
      optionItem.textContent = `Value: ${classArraySeat[c].value}, Name: ${classArraySeat[c].name}`;
      selectClassList.appendChild(optionItem); // Append the <option> to the <select>
    }
    classSeatContainer.appendChild(selectClassList);
  
  
    classSeatContainer.appendChild(selectClassList);
  }


  function displayQuotaSeat(seatQuotaArray, seatQuotaContainer){
    let selectQuotaList = document.createElement('select');

    for (let d = 0; d < classArraySeat.length; d++) {
      let optionQuota = document.createElement('option'); // Create an <option> for each object
      optionQuota.value = seatQuotaArray[d].value;
      optionQuota.textContent = `Value: ${seatQuotaArray[d].value}, Name: ${seatQuotaArray[d].name}`;
      selectQuotaList.appendChild(optionQuota); // Append the <option> to the <select>
    }

    seatQuotaContainer.appendChild(selectQuotaList);
  
  }
  const classInput = document.getElementById("classSeatContainer").value.trim();
  const quotaInput = document.getElementById("seatQuotaContainer").value.trim();

  //search seat 
  const seatAva = await checkSeatAvailability({ fromStationCode:fromInput, toStationCode:toInput, date:dateInput, trainNo:trainNoInput, classType:classInput, quota:quotaInput})
  .then((response) => {

    console.log("Inside seat availability: ", response);
  })
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function searchSeat(){
//   let seatAvailability = document.createElement('ul');

//   for (let s=0; s<liveStatusArray.length; s++){
//     let listSeat = document.createElement('li');
//     listSeat.textContent = `Station Code:${liveStatusArray[l].station_code}, Station Name: ${liveStatusArray[l].station_name},Platform No: ${liveStatusArray[l].platform_number}`;
//     trainLiveStatusList.appendChild(listLiveStatus);
//   }
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


async function liveStatus(){
  const trainLiveStatusList = document.getElementById("trainLiveStatusList");
  trainLiveStatusList.innerHTML = "";
  const trainInput2 = document.getElementById("searchInput").value.trim();
  const trainInput3 = document.getElementById("searchInput3").value.trim();

  const enteredDate = new Date(trainInput3);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - enteredDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  // Map the difference in days to the startDay range (0-4)
  let startDay = 0;
  if (differenceInDays === 0) {
    startDay = 0;
  } else if (differenceInDays >= 1 && differenceInDays <= 4) {
    startDay = differenceInDays;
  } else {
    // Handle cases where the entered date is more than 4 days ago
    startDay = 4;
  }

  const someLiveStatus = await getTrainSchedule({trainNo: trainInput2, date:trainInput3, startDay: startDay})
  .then ((response) => {

    console.log("live status of train:", response);
    let liveStatusArray  = response.route;

    displayLiveStatus(liveStatusArray,liveStatusContainer)
  })

}

  ///////////////////////////////////////////////////////////////////////////////////////////////

function displayLiveStatus(liveStatusArray,liveStatusContainer){
  let trainLiveStatusList = document.createElement('ul');

  for (let l=0; l<liveStatusArray.length; l++){
    let listLiveStatus = document.createElement('li');
    listLiveStatus.textContent = `Station Code:${liveStatusArray[l].station_code}, Station Name: ${liveStatusArray[l].station_name},Platform No: ${liveStatusArray[l].platform_number}`;
    trainLiveStatusList.appendChild(listLiveStatus);
  }
  liveStatusContainer.appendChild(trainLiveStatusList);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayClass(classArray,trainContainer) { 
  let trainList = document.createElement('ul'); // Create a <ul> element

  for (let i = 0; i < classArray.length; i++) {
    let listItem = document.createElement('li'); // Create a <li> for each object
    listItem.textContent = `Value: ${classArray[i].value}, Name: ${classArray[i].name}`;
    trainList.appendChild(listItem); // Append the <li> to the <ul>
  }
  trainContainer.appendChild(trainList);
}
////////////////////////////////////////////////////////////////////////////////////////////

function displayQuota(quotaArray,trainContainer){
  let trainQuota = document.createElement('ul');
   for (let n=0; n < quotaArray.length; n++){
    let listQuota = document.createElement('li');
    listQuota.textContent = `Value: ${quotaArray[n].value}, Name: ${quotaArray[n].name}`;
    trainQuota.appendChild(listQuota);
   }
   trainContainer.appendChild(trainQuota);
}
////////////////////////////////////////////////////////////////////////////////////////////


function displayTrainDetail(trainContainer, listName, listNumber, listType){
  let trainDetails = document.createElement('ul');
 
  const nameListItem = document.createElement('li');
  nameListItem.textContent = `Train Name: ${listName}`;
  trainDetails.appendChild(nameListItem);

  const numberListItem = document.createElement('li');
  numberListItem.textContent = `Train Number: ${listNumber}`;
  trainDetails.appendChild(numberListItem);

  const typeListItem = document.createElement('li');
  typeListItem.textContent = `Train Type: ${listType}`;
  trainDetails.appendChild(typeListItem);
  
  trainContainer.appendChild(trainDetails);

}
/////////////////////////////////////////////////////////////////////////////////////////////
 
 
function displayRoute(routeArray,trainContainer){
  let trainRoute = document.createElement('ul');

  for(let j = 0; j < routeArray.length; j++ ){
    if (routeArray[j].stop === true){
      let listRoute = document.createElement('li');
      let listPlatform = document.createElement('li');
    listRoute.textContent = `Station Code:${routeArray[j].station_code}, Station Name: ${routeArray[j].station_name},Platform No: ${routeArray[j].platform_number}`;
    trainRoute.appendChild(listRoute);
    }
  }
  trainContainer.appendChild(trainRoute);
}
///////////////////////////////////////////////////////////////////////////////////////////

function displayRunDay(runDayArray,trainContainer){
  let trainRunDay =  document.createElement('ul');
    Object.entries(runDayArray).forEach(([day,value]) => {
      if (value === true) {
        let listRunDay = document.createElement('li');
        listRunDay.textContent = day;
        trainRunDay.appendChild(listRunDay);
      }
    });
  trainContainer.appendChild(trainRunDay);
}

///////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////






 


