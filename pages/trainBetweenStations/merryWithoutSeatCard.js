// Assuming 'data' contains your array of train objects

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
        runDayDiv.style.marginLeft = 'auto'; // Align to the right
        runDayDiv.style.display = 'flex'; // Set to flex to display run days side by side


        // Loop through each run day and create a paragraph
        train.run_days.forEach(runDay => {
            const runDayParagraph = document.createElement('p');
            runDayParagraph.textContent = runDay;
            runDayParagraph.style.marginRight = '5px'; // Adjust the gap as needed
            runDayParagraph.style.fontStyle = 'italic'; // Set to italic

            // You can add additional styling to runDayParagraph if needed
            runDayDiv.appendChild(runDayParagraph);
        });

        const runDayDiv = document.createElement('div');
        runDayDiv.classList.add('runDayDiv');
        runDayDiv.style.marginLeft = 'auto'; // Align to the right
        runDayDiv.style.display = 'flex'; // Set to flex to display run days side by side

        // Define the days of the week
        const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        // Loop through each day of the week
        daysOfWeek.forEach(day => {
            const card = document.createElement('div');
            card.classList.add('card'); // Add a class for card styling

            const cardContent = document.createElement('p');
            cardContent.textContent = day;
            cardContent.style.fontStyle = 'bold'; // Set to italic

            // Highlight in yellow 
            if (day === "Mon") {
                card.style.backgroundColor = 'yellow';
            } else if (day === "Tue") {
                card.style.backgroundColor = 'yellow';
            } else if (day === "Wed") {
                card.style.backgroundColor = 'yellow';
            } else if (day === "Thu") {
                card.style.backgroundColor = 'yellow';
            } else if (day === "Fri") {
                card.style.backgroundColor = 'yellow';
            } else if (day === "Sat") {
                card.style.backgroundColor = 'yellow';
            } else if (day === "Sun") {
                card.style.backgroundColor = 'yellow';
            }

    // Append content to the card
    card.appendChild(cardContent);

    // You can add additional styling to the card if needed
    runDayDiv.appendChild(card);
});



        // Append run days div to seat class section
        seatClassSection.appendChild(runDayDiv);


        // Append seat class section to card body
        cardBody.appendChild(seatClassSection);

        // Append card body to card
        card.appendChild(cardBody);

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

