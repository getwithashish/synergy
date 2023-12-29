async function searchTrain1() {
  const trainInput = document.getElementById("topbarInputIconLeft").value.trim();
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

// async function searchSeat(){
//   seatAvailability.innerhtml = "";
//   const fromInput = document.getElementById("from").value.trim();
//   const toInput = document.getElementById("to").value.trim();
//   const dateInput = document.getElementById("searchInputDate").value.trim();
//   const trainNoInput = document.getElementById("searchInput").value.trim();
  
  
//   const enteredDate = new Date(searchInput3);
//   const currentDate = new Date();
//   const differenceInTime = currentDate.getTime() - enteredDate.getTime();
//   const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

//   // Map the difference in days to the startDay range (0-4)
//   let startDay = 0;
//   if (differenceInDays === 0) {
//     startDay = 0;
//   } else if (differenceInDays >= 1 && differenceInDays <= 4) {
//     startDay = differenceInDays;
//   } else {
//     // Handle cases where the entered date is more than 4 days ago
//     startDay = 4;
//   }

//   const selectClassSeat = await getTrainClasses({trainNo:trainNoInput })
//   .then((response) => {

//     let classArraySeat = response.class;
//     let seatQuotaArray = response.quota;
//     displayClassSeat(classArraySeat,classSeatContainer);
//     displayQuotaSeat(seatQuotaArray,seatQuotaContainer);
//   })

//   //display class
//   function displayClassSeat(classArraySeat, classSeatContainer) {
//     let selectClassList = document.createElement('select'); // Create a <select> element
  
//     for (let c = 0; c < classArraySeat.length; c++) {
//       let optionItem = document.createElement('option'); // Create an <option> for each object
//       optionItem.value = classArraySeat[c].value;
//       optionItem.textContent = `Value: ${classArraySeat[c].value}, Name: ${classArraySeat[c].name}`;
//       selectClassList.appendChild(optionItem); // Append the <option> to the <select>
//     }
//     classSeatContainer.appendChild(selectClassList);
  
  
//     classSeatContainer.appendChild(selectClassList);
//   }


//   function displayQuotaSeat(seatQuotaArray, seatQuotaContainer){
//     let selectQuotaList = document.createElement('select');

//     for (let d = 0; d < classArraySeat.length; d++) {
//       let optionQuota = document.createElement('option'); // Create an <option> for each object
//       optionQuota.value = seatQuotaArray[d].value;
//       optionQuota.textContent = `Value: ${seatQuotaArray[d].value}, Name: ${seatQuotaArray[d].name}`;
//       selectQuotaList.appendChild(optionQuota); // Append the <option> to the <select>
//     }

//     seatQuotaContainer.appendChild(selectQuotaList);
  
//   }
//   const classInput = document.getElementById("classSeatContainer").value.trim();
//   const quotaInput = document.getElementById("seatQuotaContainer").value.trim();

//   //search seat 
//   const seatAva = await checkSeatAvailability({ fromStationCode:fromInput, toStationCode:toInput, date:dateInput, trainNo:trainNoInput, classType:classInput, quota:quotaInput})
//   .then((response) => {

//     console.log("Inside seat availability: ", response);
//   })
// }
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
  const trainInput2 = document.getElementById("topbarInputIconLeft").value.trim();
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

  const someLiveStatus = await getTrainLiveStatus({trainNo: trainInput2, date:trainInput3, startDay: startDay})
  .then ((response) => {

    console.log("live status of train:", response);
    //let liveStatusArray  = response.data;
    let trainStartDate = response.train_start_date;
    let newMessage = response.new_message;
    let spentTime = response.spent_time;

    displayLiveStatus(liveStatusContainer,trainStartDate,newMessage,spentTime);
  })

}

//   ///////////////////////////////////////////////////////////////////////////////////////////////

 function displayLiveStatus(liveStatusContainer,trainStartDate,newMessage,spentTime){
  let trainLiveStatusList = document.createElement('ul');

//   for (let l=0; l<liveStatusArray.length; l++){
//     let listLiveStatus = document.createElement('li');
//     listLiveStatus.textContent = `Station Code:${liveStatusArray[l].station_code}, Station Name: ${liveStatusArray[l].station_name},Platform No: ${liveStatusArray[l].platform_number}`;
//     trainLiveStatusList.appendChild(listLiveStatus);
//   }

    const startDateListItem = document.createElement('li');
    startDateListItem.textContent = `Train Name: ${trainStartDate}`;
    trainDetails.appendChild(nameListItem);

    const newMsgListItem = document.createElement('li');
    newMsgListItem.textContent = `Train Number: ${newMessage}`;
    trainDetails.appendChild(numberListItem);

    const timeListItem = document.createElement('li');
    timeListItem.textContent = `Train Type: ${spentTime}`;
    trainDetails.appendChild(typeListItem);

  liveStatusContainer.appendChild(trainLiveStatusList);
 }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayClass(classArray,classContainer) { 
  let trainList = document.createElement('ul'); // Create a <ul> element

  for (let i = 0; i < classArray.length; i++) {
    let listItem = document.createElement('li'); // Create a <li> for each object
    listItem.textContent = `${classArray[i].value}`;
   // Value: ${classArray[i].value}, Name: ${classArray[i].name}
    trainList.appendChild(listItem); // Append the <li> to the <ul>
  }
  classContainer.appendChild(trainList);
}
////////////////////////////////////////////////////////////////////////////////////////////

function displayQuota(quotaArray,quotaContainer){
  let trainQuota = document.createElement('ul');
   for (let n=0; n < quotaArray.length; n++){
    let listQuota = document.createElement('li');
    listQuota.textContent = `Value: ${quotaArray[n].value}, Name: ${quotaArray[n].name}`;
    trainQuota.appendChild(listQuota);
   }
   quotaContainer.appendChild(trainQuota);
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
 
 
function displayRoute(routeArray,routeContainer){
  // let trainRoute = document.createElement('ul');

  // for(let j = 0; j < routeArray.length; j++ ){
  //   if (routeArray[j].stop === true){
  //     let listRoute = document.createElement('li');
  //     let listPlatform = document.createElement('li');
  //   listRoute.textContent = `Station Code:${routeArray[j].station_code}, Station Name: ${routeArray[j].station_name},Platform No: ${routeArray[j].platform_number}`;
  //   trainRoute.appendChild(listRoute);
  //   }
  // }
  // trainContainer.appendChild(trainRoute);
  let trainRoute = document.createElement('div');
  trainRoute.classList.add('list-group', 'list-group-flush', 'list-group-timeline');

  for (let j = 0; j < routeArray.length; j++) {
    if (routeArray[j].stop === true) {
      let listItem = document.createElement('div');
      listItem.classList.add('list-group-item', 'border-0');

      let rowDiv = document.createElement('div');
      rowDiv.classList.add('row', 'ps-lg-1');

      let colAutoDiv = document.createElement('div');
      colAutoDiv.classList.add('col-auto');
      let iconShapeDiv = document.createElement('div');
      iconShapeDiv.classList.add('icon-shape', 'icon-xs');
      let iconImage = document.createElement('img');
      iconImage.src = "icons8-round-48.png";
      iconShapeDiv.appendChild(iconImage);
      colAutoDiv.appendChild(iconShapeDiv);

      let colContentDiv = document.createElement('div');
      colContentDiv.classList.add('col', 'ms-n2', 'mb-3');
      let stationCode = document.createElement('h3');
      stationCode.classList.add('fs-6', 'fw-bold', 'mb-1');
      stationCode.textContent = `Station Code: ${routeArray[j].station_code}`;
      let stationName = document.createElement('p');
      stationName.classList.add('mb-1');
      stationName.textContent = `Station Name: ${routeArray[j].station_name}`;
      let dFlexDiv = document.createElement('div');
      dFlexDiv.classList.add('d-flex', 'align-items-center');
      let flagImage = document.createElement('img');
      flagImage.src = "icons8-flag-30.png";
      let platformSpan = document.createElement('span');
      platformSpan.classList.add('small');
      platformSpan.textContent = `Platform: ${routeArray[j].platform_number}`;
      dFlexDiv.appendChild(flagImage);
      dFlexDiv.appendChild(platformSpan);
      colContentDiv.appendChild(stationCode);
      colContentDiv.appendChild(stationName);
      colContentDiv.appendChild(dFlexDiv);

      rowDiv.appendChild(colAutoDiv);
      rowDiv.appendChild(colContentDiv);
      listItem.appendChild(rowDiv);

      trainRoute.appendChild(listItem);
    }
  }

  routeContainer.appendChild(trainRoute);
}
///////////////////////////////////////////////////////////////////////////////////////////

function displayRunDay(runDayArray,runDaysContainer){
  let trainRunDay =  document.createElement('ul');
    Object.entries(runDayArray).forEach(([day,value]) => {
      if (value === true) {
        let listRunDay = document.createElement('li');
        listRunDay.textContent = day;
        trainRunDay.appendChild(listRunDay);
      }
    });
  runDaysContainer.appendChild(trainRunDay);
}

///////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////






 


