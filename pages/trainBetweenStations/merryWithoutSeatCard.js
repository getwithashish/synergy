// Assuming 'data' contains your array of train objects

const { Translate } = require('@google-cloud/translate').v2;
const translateClient = new Translate();

async function translateText(text, target) {
    try {
      // Translate the text to the target language
      const [translations] = await translateClient.translate(text, target);
      return Array.isArray(translations) ? translations : [translations];
    } catch (error) {
      console.error('Error during translation:', error);
      return null;
    }
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
         headers: {
            'X-RapidAPI-Key': '19c525f862msh163c37232a972aep132fd7jsn76b66f818ea2',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };


    try {

        const response = await axios.request(options);
        const trainDetails = response.data;
        console.log(trainDetails);

        const translatedFromStation = await translateText('From Station', 'hi');
        const translatedToStation = await translateText('To Station', 'hi');
        

        // Assuming the container element where you want to display trainDetails has the ID "trainDetailsContainer"
        const container = document.getElementById('trainDetailsContainer');

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
        card.style.background = 'rgba(255, 255, 255, 0.3)';
        card.style.borderRadius = '10px';
        card.style.border = '1px solid rgba(255, 255, 255, 0.18)';
        card.style.backdropFilter = 'blur(7.5px)';
        card.style.webkitBackdropFilter = 'blur(7.5px)';
    

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
        nameAndNumberText.textContent = `${train.train_name} | ${train.train_number}`;

        nameAndNumber.appendChild(nameAndNumberText);
        nameAndNumber.style.fontStyle = 'bold';

        // Create time and to/from
        const timeAndToFrom = document.createElement('div');
        timeAndToFrom.classList.add('timeandtofro');
        
        const timeAndToFromText = document.createElement('p');
        timeAndToFromText.textContent = `${train.from_std} - ${train.to_sta}`;
            
        const stationText = document.createElement('p');
        stationText.textContent = `${train.from_station_name} - ${train.to_station_name}`;
        
        
        timeAndToFrom.appendChild(timeAndToFromText);
        timeAndToFrom.appendChild(stationText);

        // Append name and number and time and to/from to top section
        topSection.appendChild(nameAndNumber);
        topSection.appendChild(timeAndToFrom);

        // Append top section to card body
        cardBody.appendChild(topSection);

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

            seatTypeHeading.style.fontSize = '14px'; // Adjust the size as needed


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

            // Add an event listener to handle the booking functionality
            bookTrainButton.addEventListener('click', () => {
                // You can add your booking logic here or redirect to a booking page
                // alert(`Booking train ${train.train_number}`);
                window.location.href = `../html&css/pages/components/Bookingforms.html?trainNumber=${train.train_number}`;

            });

            // Create a container for the button and center it
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttonContainer');
            buttonContainer.appendChild(bookTrainButton);

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
    
        return trainDetails;
    } catch (error) {
        console.error(error);
        // Handle errors
        return null;
    }
}

const fromStationCode = 'CGY';
const toStationCode = 'KZK';
const dateOfJourney = '2024-01-04';
getTrainBetweenStations(fromStationCode, toStationCode, dateOfJourney);