async function searchTrain1() {
  // const trainInput = document.getElementById("topbarInputIconLeft").value.trim();
  const trainList = document.getElementById("trainList");
  const trainDetails = document.getElementById("trainDetails");
  trainDetails.innerHTML = "";
  trainList.innerHTML = ""; // Clear previous search results
  // const trainSource = document.getElementById("source");
  // const trainDest = document.getElementById("destination");
  // const trainDuration = document.getElementById("duration");

  const urlParams = new URLSearchParams(window.location.search);
  const trainNumber = urlParams.get('trainNumber');
  
    // const someSchedule = await getTrainSchedule({trainNo: trainInput})
    // const someSchedule = await getTrainSchedule({trainNo: trainNumber})
    const someSchedule = await getDummyTrainDetails({trainNo: trainNumber})
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

searchTrain1();


///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

async function searchSeat(){
  // seatAvailability.innerhtml = "";
 // const trainNoInput = document.getElementById("topbarInputIconLeft").value.trim();

 const elements = [
  "day1seat", "cnf_seat1", "tot_fare1", "probability1", "current_stat1",
  "day2seat", "cnf_seat2", "tot_fare2", "probability2", "current_stat2",
  "day3seat", "cnf_seat3", "tot_fare3", "probability3", "current_stat3",
  "day4seat", "cnf_seat4", "tot_fare4", "probability4", "current_stat4",
  "day5seat", "cnf_seat5", "tot_fare5", "probability5", "current_stat5",
  "day6seat", "cnf_seat6", "tot_fare6", "probability6", "current_stat6"
];

elements.forEach(id => {
  document.getElementById(id).innerHTML = "";
});


  const fromInput = document.getElementById("from_station").value.trim();
  const toInput = document.getElementById("to_station").value.trim();
  const dateInput = document.getElementById("enter_date").value.trim();
  const classTypeInput = document.getElementById("classtype").value.trim();
  const quotaInput = document.getElementById("enter_quota").value.trim();

  const urlParams = new URLSearchParams(window.location.search);
  const trainNumber = urlParams.get('trainNumber');
  
  // const seatAva = await checkSeatAvailability({ classType:classTypeInput,fromStationCode:fromInput, quota:quotaInput,toStationCode:toInput,trainNo:trainNumber, date:dateInput})
  const seatAva = await getDummySeatAvailability({ classType:classTypeInput,fromStationCode:fromInput, quota:quotaInput,toStationCode:toInput,trainNo:trainNumber, date:dateInput})
  .then((response) => {
    console.log("Inside seat availability: ", response);
    let seatArray = response;

    searchSeatAvail(seatArray);
  })
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////

function searchSeatAvail(seatArray){
  // let seatAvailability = document.createElement('ul');
  const cardContainer = document.getElementById('cardContainer');

for (let s = 0; s< seatArray.length; s++){

  const cardId = `day${s + 1}`;
  const childCard = document.getElementById(cardId);
 
    const dateElement = document.getElementById(`day${s + 1}seat`);
    const ticketFareElement = document.getElementById(`cnf_seat${s + 1}`);
    const altcnfElement = document.getElementById(`tot_fare${s + 1}`);
    const probabilityElement = document.getElementById(`probability${s + 1}`);
    const currentStatusElement = document.getElementById(`current_stat${s + 1}`);

    dateElement.textContent ="Date: "+ seatArray[s].date;
    ticketFareElement.textContent = seatArray[s].confirm_probability;
    altcnfElement.textContent ="Ticket Fare: "+ seatArray[s].ticket_fare;
    probabilityElement.textContent = seatArray[s].confirm_probability_percent;
    currentStatusElement.textContent ="Status: "+ seatArray[s].current_status;

}
  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


async function liveStatus(){
  const trainLiveStatusList = document.getElementById("trainLiveStatusList");
  trainLiveStatusList.innerHTML = "";
  //const trainInput2 = document.getElementById("topbarInputIconLeft").value.trim();

  const urlParams = new URLSearchParams(window.location.search);
  const trainNumber = urlParams.get('trainNumber');

  const someLiveStatus = await getTrainLiveStatus({trainNo: trainNumber})
  .then ((response) => {

    console.log("live status of train:", response);
    let previousStationsArray  = response.previous_stations;
    let currentStationCode = response.current_station_code;
    let currentStationName = response.current_station_name;
    let plt_number = response.platform_number;
    let upcomingStationsArray = response.upcoming_stations;
    let trainDuration = response.journey_time;
    let journeyTime = trainDuration/60;
    // let newMessage = response.new_message;
    // let spentTimeHour = response.spent_time;
    // let spentTimeMinute = spentTimeHour * 60;

    displayLiveStatus(lvsContainer,previousStationsArray,upcomingStationsArray,currentStationCode,currentStationName,journeyTime,plt_number);
  //   displayTrainDetail(journeyTime);
  })
}

function displayLiveStatus(lvsContainer,previousStationsArray,upcomingStationsArray,currentStationCode,currentStationName,plt_number){
  let trainLiveStatusList = document.createElement('div');
  trainLiveStatusList.classList.add('list-group', 'list-group-flush', 'list-group-timeline');

  for (let l = 0; l < previousStationsArray.length; l++) {
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
    // let verticalLine = document.createElement('div');
    // verticalLine.classList.add('vertical-line'); // Create a class for styling

  // Style the vertical line (adjust properties as needed)
    // verticalLine.style.borderLeft = '4px solid blue'; // Example line style
    // verticalLine.style.height = '35px'; 
    iconShapeDiv.appendChild(iconImage);
    colAutoDiv.appendChild(iconShapeDiv);
    // colAutoDiv.appendChild(verticalLine);

    let colContentDiv = document.createElement('div');
    colContentDiv.classList.add('col', 'ms-n2', 'mb-3');
    let previousStationCode1 = document.createElement('h3');
    previousStationCode1.classList.add('fs-6', 'fw-bold', 'mb-1');
    previousStationCode1.textContent = `Station Code: ${previousStationsArray[l].station_code}`;
    let previousStationName1 = document.createElement('p');
    previousStationName1.classList.add('mb-1');
    previousStationName1.textContent = `Station Name: ${previousStationsArray[l].station_name}`;
    let dFlexDiv = document.createElement('div');
    dFlexDiv.classList.add('d-flex', 'align-items-center');
    let flagImage = document.createElement('img');
    flagImage.src = "icons8-flag-30.png";
    let platformSpan1 = document.createElement('span');
    platformSpan1.classList.add('small');
    platformSpan1.textContent = `Platform: ${previousStationsArray[l].platform_number}`;
    dFlexDiv.appendChild(flagImage);
    dFlexDiv.appendChild(platformSpan1);
    colContentDiv.appendChild(previousStationCode1);
    colContentDiv.appendChild(previousStationName1);
    colContentDiv.appendChild(dFlexDiv);

    rowDiv.appendChild(colAutoDiv);
    rowDiv.appendChild(colContentDiv);
    listItem.appendChild(rowDiv);

    trainLiveStatusList.appendChild(listItem);
  }

  let listItem = document.createElement('div');
    listItem.classList.add('list-group-item', 'border-0');

    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'ps-lg-1');

    let colAutoDiv = document.createElement('div');
    colAutoDiv.classList.add('col-auto');
    let iconShapeDiv = document.createElement('div');
    iconShapeDiv.classList.add('icon-shape', 'icon-xs');
    let iconImage = document.createElement('img');
    iconImage.src = "icons8-round-32.png";
    // iconImage.style.width = "75px"; // Set the desired width
    // iconImage.style.height = "70px";
    // let verticalLine = document.createElement('div');
    // verticalLine.classList.add('vertical-line'); // Create a class for styling

  // Style the vertical line (adjust properties as needed)
    // verticalLine.style.borderLeft = '2px solid grey'; // Example line style
    // verticalLine.style.height = '80px'; 
    // verticalLine.style.paddingLeft = '30px';
    iconShapeDiv.appendChild(iconImage);
    colAutoDiv.appendChild(iconShapeDiv);
    // colAutoDiv.appendChild(verticalLine);

    let colContentDiv = document.createElement('div');
    colContentDiv.classList.add('col', 'ms-n2', 'mb-3');
    let currentStationCode1 = document.createElement('h3');
    currentStationCode1.classList.add('fs-6', 'fw-bold', 'mb-1');
    currentStationCode1.textContent = `Station Code: ${currentStationCode}`;
    let currentStationName1 = document.createElement('p');
    currentStationName1.classList.add('mb-1');
    currentStationName1.textContent = `Station Name: ${currentStationName}`;
    let dFlexDiv = document.createElement('div');
    dFlexDiv.classList.add('d-flex', 'align-items-center');  
    let flagImage = document.createElement('img');
    flagImage.src = "icons8-flag-30.png";
    let platformSpan3 = document.createElement('span');
    platformSpan3.classList.add('small');
    platformSpan3.textContent = `Platform: ${plt_number}`;
    dFlexDiv.appendChild(flagImage);
    dFlexDiv.appendChild(platformSpan3);
    colContentDiv.appendChild(currentStationCode1);
    colContentDiv.appendChild(currentStationName1);
    colContentDiv.appendChild(dFlexDiv);

    rowDiv.appendChild(colAutoDiv);
    rowDiv.appendChild(colContentDiv);
    listItem.appendChild(rowDiv);

    trainLiveStatusList.appendChild(listItem);

  for (let u = 0; u < upcomingStationsArray.length; u++) {
      let listItem2 = document.createElement('div');
      listItem2.classList.add('list-group-item', 'border-0');
  
      let rowDiv = document.createElement('div');
      rowDiv.classList.add('row', 'ps-lg-1');
  
      let colAutoDiv = document.createElement('div');
      colAutoDiv.classList.add('col-auto');
      let iconShapeDiv = document.createElement('div');
      iconShapeDiv.classList.add('icon-shape', 'icon-xs');
      let iconImage = document.createElement('img');
      iconImage.src = "icons8-round-48.png";
      // let verticalLine = document.createElement('div');
      // verticalLine.classList.add('vertical-line'); // Create a class for styling

  // Style the vertical line (adjust properties as needed)
      // verticalLine.style.borderLeft = '2px solid grey'; 
      // verticalLine.style.paddingLeft = '30px';// Example line style
      // verticalLine.style.height = '80px'; 
      iconShapeDiv.appendChild(iconImage);
      colAutoDiv.appendChild(iconShapeDiv);
      // colAutoDiv.appendChild(verticalLine);

      let colContentDiv = document.createElement('div');
      colContentDiv.classList.add('col', 'ms-n2', 'mb-3');
      let upcomingStationCode2 = document.createElement('h3');
      upcomingStationCode2.classList.add('fs-6', 'fw-bold', 'mb-1');
      upcomingStationCode2.textContent = `Station Code: ${upcomingStationsArray[u].station_code}`;
      let upcomingStationName2 = document.createElement('p');
      upcomingStationName2.classList.add('mb-1');
      upcomingStationName2.textContent = `Station Name: ${upcomingStationsArray[u].station_name}`;
      let dFlexDiv = document.createElement('div');
      dFlexDiv.classList.add('d-flex', 'align-items-center');
      let flagImage = document.createElement('img');
      flagImage.src = "icons8-flag-30.png";
      let platformSpan2 = document.createElement('span');
      platformSpan2.classList.add('small');
      platformSpan2.textContent = `Platform: ${upcomingStationsArray[u].platform_number}`;
      dFlexDiv.appendChild(flagImage);
      dFlexDiv.appendChild(platformSpan2);
      colContentDiv.appendChild(upcomingStationCode2);
      colContentDiv.appendChild(upcomingStationName2);
      colContentDiv.appendChild(dFlexDiv);
  
      rowDiv.appendChild(colAutoDiv);
      rowDiv.appendChild(colContentDiv);
      listItem2.appendChild(rowDiv);
  
      trainLiveStatusList.appendChild(listItem2);
    }
  // const journeyDuration = document.getElementById = "duration";
  // journeyDuration.textContent =  journeyTime;
  lvsContainer.appendChild(trainLiveStatusList);
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
    listQuota.textContent = `${quotaArray[n].value}: ${quotaArray[n].name}`;
    trainQuota.appendChild(listQuota);
   }
   quotaContainer.appendChild(trainQuota);
}
////////////////////////////////////////////////////////////////////////////////////////////


function displayTrainDetail(trainContainer, listName, listNumber, listType, journeyTime){
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

  const trainSource = document.getElementById("source");
  const trainDest = document.getElementById("destination");
  const trainDuration = document.getElementById("duration");
  
  trainDuration.id = "duration";
  trainDuration.textContent = journeyTime;

  trainContainer.appendChild(trainDetails);

}
/////////////////////////////////////////////////////////////////////////////////////////////
 
 
function displayRoute(routeArray,routeContainer){
 
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
      listItem.classList.add('glassmorphism'); // Apply glassmorphism to listItem
      colContentDiv.classList.add('glassmorphism');
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
    const trainSource = document.getElementById("source");
    trainSource.textContent = routeArray[0].station_code;
    const trainDest = document.getElementById("destination");
    trainDest.textContent = routeArray[routeArray.length-1].station_code;
 
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






 


