async function liveStatus(){
    const trainLiveStatusList = document.getElementById("trainLiveStatus");
    trainLiveStatusList.innerHTML = "";
    const trainInput2 = document.getElementById("inputform").value.trim();
  
    const someLiveStatus = await getTrainLiveStatus({trainNo: trainInput2})
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
  
      displayLiveStatus(liveStatusContainer,previousStationsArray,upcomingStationsArray,currentStationCode,currentStationName,journeyTime,plt_number);
    //   displayTrainDetail(journeyTime);
    })
  }

  function displayLiveStatus(liveStatusContainer,previousStationsArray,upcomingStationsArray,currentStationCode,currentStationName,plt_number){
    let trainLiveStatus = document.createElement('div');
    trainLiveStatus.classList.add('list-group', 'list-group-flush', 'list-group-timeline');
  
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
      let verticalLine = document.createElement('div');
      verticalLine.classList.add('vertical-line'); // Create a class for styling

    // Style the vertical line (adjust properties as needed)
      verticalLine.style.borderLeft = '4px solid blue'; // Example line style
      verticalLine.style.height = '35px'; 
      iconShapeDiv.appendChild(iconImage);
      colAutoDiv.appendChild(iconShapeDiv);
      colAutoDiv.appendChild(verticalLine);
  
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
  
      trainLiveStatus.appendChild(listItem);
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
      iconImage.src = "icons8-round-48.png";
      iconImage.style.width = "75px"; // Set the desired width
      iconImage.style.height = "75px";
      let verticalLine = document.createElement('div');
      verticalLine.classList.add('vertical-line'); // Create a class for styling

    // Style the vertical line (adjust properties as needed)
      verticalLine.style.borderLeft = '2px solid grey'; // Example line style
      verticalLine.style.height = '80px'; 
      verticalLine.style.paddingLeft = '30px';
      iconShapeDiv.appendChild(iconImage);
      colAutoDiv.appendChild(iconShapeDiv);
      colAutoDiv.appendChild(verticalLine);
  
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
  
      trainLiveStatus.appendChild(listItem);

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
        let verticalLine = document.createElement('div');
        verticalLine.classList.add('vertical-line'); // Create a class for styling

    // Style the vertical line (adjust properties as needed)
        verticalLine.style.borderLeft = '2px solid grey'; 
        verticalLine.style.paddingLeft = '30px';// Example line style
        verticalLine.style.height = '80px'; 
        iconShapeDiv.appendChild(iconImage);
        colAutoDiv.appendChild(iconShapeDiv);
        colAutoDiv.appendChild(verticalLine);

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
    
        trainLiveStatus.appendChild(listItem2);
      }
  
    // const journeyDuration = document.getElementById = "duration";
    // journeyDuration.textContent =  journeyTime;
    liveStatusContainer.appendChild(trainLiveStatus);
   }