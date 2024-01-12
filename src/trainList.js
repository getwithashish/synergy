
function buttonClickFunction(trainNumber, trainName, sourceStation, destination) {
    // Your logic here when the button is clicked
    const queryParams = `trainNumber=${trainNumber}&trainName=${encodeURIComponent(trainName)}&sourceStation=${encodeURIComponent(sourceStation)}&destination=${encodeURIComponent(destination)}`;

    window.location.href = `../pages/html&css/pages/components/Bookingforms.html?${queryParams}`;
}

// Function to make the API call
async function getTrainBetweenStations(fromStationCode, toStationCode, dateOfJourney) {
    const options = {
        method: 'GET',
        // url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
        url: 'http://localhost:3000/trainBetweenStations',
        params: {
            fromStationCode: 'CGY',
            toStationCode: 'KZK',
            dateOfJourney: '2024-01-04'
        },
        // params: {
        //     fromStationCode: fromStationCode,
        //     toStationCode: toStationCode,
        //     dateOfJourney: dateOfJourney
        // },
         headers: {
            'X-RapidAPI-Key': '7c74588017msh58f0e857b7902aap173881jsnc48c3a74db49',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };


    try {

        const response = await axios.request(options);
        const trainDetails = response.data;
        console.log(trainDetails);
        

        // Assuming the container element where you want to display trainDetails has the ID "trainDetailsContainer"
        // const container = document.getElementById('trainDetailsContainer');

        const container = document.createElement("div");
        container.id = "trainDetailsContainer";

        // Clear existing content
        container.innerHTML = '';
        

        // Loop through each train in trainDetails.data
        trainDetails.data.forEach(train => {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '47rem';
        card.style.height = '10rem';
        card.style.marginTop = '30px';
        card.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
        // card.style.background = 'rgba(255, 255, 255, 0.3)';
        card.style.borderRadius = '10px';
        card.style.border = '1px solid rgba(255, 255, 255, 0.18)';
        // card.style.backdropFilter = 'blur(7.5px)';
        // card.style.webkitBackdropFilter = 'blur(7.5px)';
        card.style.background = 'transparent';

    

        // Create card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create top section
        const topSection = document.createElement('div');
        topSection.classList.add('topsection');

        // Create name and number
        const nameAndNumber = document.createElement('div');
        nameAndNumber.classList.add('nameandnumber');
        const nameAndNumberText = document.createElement('p');

        nameAndNumberText.style.fontSize = '18px';
        nameAndNumberText.style.textAlign = 'left';


        nameAndNumberText.textContent = `${train.train_name} | ${train.train_number}`;
        nameAndNumber.appendChild(nameAndNumberText);
        nameAndNumber.style.fontStyle = 'bold';
        

        // Create time and to/from
        const timeAndToFrom = document.createElement('div');
        timeAndToFrom.classList.add('timeandtofro');

        
        const timeAndToFromText = document.createElement('p');
        timeAndToFromText.style.fontSize = '20px';
        timeAndToFromText.style.marginBottom = '2px';


        timeAndToFromText.textContent = `${train.from_std} - ${train.to_sta}`;
            
        const stationText = document.createElement('p');
        stationText.style.fontSize = '15px';

        stationText.textContent = `${train.from_station_name} - ${train.to_station_name}`;
        
        
        timeAndToFrom.appendChild(timeAndToFromText);
        timeAndToFrom.appendChild(stationText);

        // Append name and number and time and to/from to top section
        topSection.appendChild(nameAndNumber);
        topSection.appendChild(timeAndToFrom);

        // Append top section to card body
        cardBody.appendChild(topSection);
        topSection.style.marginBottom = '20px';


        // Create seat class section
        const seatClassSection = document.createElement('div');
        seatClassSection.classList.add('seatClassSection');

        seatClassSection.style.display = 'flex';
        seatClassSection.style.gap = '10px'; 
        seatClassSection.style.width = '100%';        
        
        // Loop through each seat class
        train.class_type.forEach(classType => {
            // Create a seat card
            const seatCard = document.createElement('div');
            seatCard.classList.add('seatCardType', 'card');


            // Create individual seat content
            const individualSeat = document.createElement('div');
            individualSeat.classList.add('IndividualSeat', 'card-body');

            // Create and set the seat type (e.g., 3A)
            const seatTypeHeading = document.createElement('h3');
            seatTypeHeading.textContent = classType;

            seatTypeHeading.style.fontSize = '10px'; // Adjust the size as needed
            seatTypeHeading.style.color = 'black'; // Adjust the size as needed


            // Append the seat type heading to the individual seat content
            individualSeat.appendChild(seatTypeHeading);

            // Append the individual seat content to the seat card
            seatCard.appendChild(individualSeat);

            // Append the seat card to the seat class section
            seatClassSection.appendChild(seatCard);
        });
   

        const runDayDiv = document.createElement('div');
        runDayDiv.classList.add('runDayDiv');
        
        
        const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        
        allDays.forEach(day => {
            const runDayCard = document.createElement('div');
            runDayCard.classList.add('runDayCard');
        
            const runDayHeader = document.createElement('div');
            runDayHeader.classList.add('runDayHeader');
        
            // Convert the first character to uppercase
            const shortenedDay = day.charAt(0);
            runDayHeader.textContent = shortenedDay;
        
            const runDayBody = document.createElement('div');
            runDayBody.classList.add('runDayBody');
            console.log(train.run_days,day)

            // Check if the capitalized day is in train.run_days
            if (train.run_days.includes(day)) {

                runDayCard.classList.add('highlight');
            }
        
            runDayCard.appendChild(runDayHeader);
            runDayCard.appendChild(runDayBody);
        
            runDayDiv.appendChild(runDayCard);
        });
       
        // Set display property to flex to make the run day cards appear side by side
        runDayDiv.style.display = 'flex';

        // Adjust gap between run day cards if needed
        runDayDiv.style.gap = '5px';

        runDayDiv.style.marginLeft = 'auto';

        // Append run days div to seat class section
        seatClassSection.appendChild(runDayDiv);

        // Append seat class section to card body
        cardBody.appendChild(seatClassSection);

        // Append card body to card
        card.appendChild(cardBody);
        // Create "Book Train" button
        
        const bookTrainButton = document.createElement('button');
        bookTrainButton.textContent = 'Book Ticket';
        bookTrainButton.classList.add('bookTrainButton');
        bookTrainButton.style.padding = '5px 10px'; // Adjust the values as needed
        bookTrainButton.style.zIndex = '1000'; // You can adjust the value as needed

        // function bookButton() {
        //     const clickedTrain = train;
        //     console.log("Clicked");
        //     console.log(clickedTrain.train_number);
        
        //     window.location.href = `../pages/html&css/pages/components/Bookingforms.html?trainNumber=${clickedTrain.train_number}`;
        // }

        bookTrainButton.setAttribute('onclick', `buttonClickFunction(${train.train_number}, '${train.train_name}', '${train.from_station_name}', '${train.to_station_name}')`);
        // Use a closure to capture the value of train
       
      


         // Create a container for the button and center it
         const buttonContainer = document.createElement('div');
         buttonContainer.classList.add('buttonContainer');
         buttonContainer.appendChild(bookTrainButton);
         buttonContainer.style.marginTop = '-30px'; // Adjust the value as needed


         // Append the button container to the card body
         cardBody.appendChild(buttonContainer);

        // Append card to container
        container.appendChild(card);
        });



        
        trainDetails.data.forEach((train, index) => {
            const trainNumber = train.train_number;
            const classTypes = train.class_type;
          
            console.log(`Train ${trainNumber} Class Types: ${classTypes.join(', ')}`);
          });
        // Other operations with trainDetails...
    
        // return trainDetails;
        return container;
    } catch (error) {
        console.error(error);
        // Handle errors
        return null;
    }
}


const showTrainList = async () => {
    var dateValue = document.getElementById("departure_date").value;
    console.log("Obtained Date: ", dateValue)
    await getTrainBetweenStations(sourceStationCode, destinationStationCode, dateValue)
    .then((container) => {
        openSweetAlert(container.outerHTML);
    })
    // var trainListContainerHtml = trainListContainer.outerHTML;
    // openSweetAlert(trainListContainerHtml);
};

