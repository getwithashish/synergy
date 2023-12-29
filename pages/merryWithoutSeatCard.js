// Assuming 'data' contains your array of train objects

// Function to make the API call
async function getTrainBetweenStations(fromStationCode, toStationCode, dateOfJourney) {
    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
        params: {
            fromStationCode: 'BVI',
            toStationCode: 'NDLS',
            dateOfJourney: '2023-12-27'
        },
        headers: {
            'X-RapidAPI-Key': '558799a51cmsh6371c49ebc71569p1ef8e5jsn71db9201f68e',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const trainDetails = response.data;
    
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
            card.style.boxShadow = '2px 2px rgba(50, 49, 49, 0.648)';
    
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
    
            // Create time and to/from
            const timeAndToFrom = document.createElement('div');
            timeAndToFrom.classList.add('timeandtofro');
            const timeAndToFromText = document.createElement('p');
            timeAndToFromText.textContent = `${train.from_std} - ${train.to_sta}\n${train.from_station_name} - ${train.to_station_name}`;
            timeAndToFrom.appendChild(timeAndToFromText);
    
            topSection.appendChild(nameAndNumber);
            topSection.appendChild(timeAndToFrom);
    
            // Append top section to card body
            cardBody.appendChild(topSection);
    
            // Create seat card section
            // const seatCard = document.createElement('div');
            // seatCard.classList.add('seatcard');
    
            // // Loop through each class type
            // train.class_type.forEach(classType => {
            //     // Create card for each class type
            //     const classCard = document.createElement('div');
            //     classCard.classList.add('card', 'seatavail');
            //     classCard.style.width = '9rem';
            //     classCard.style.height = '4rem';
            //     const classCardBody = document.createElement('div');
            //     classCardBody.classList.add('card-body');
    
            //     // Create seat and price section
            //     const seatAndPrice = document.createElement('div');
            //     seatAndPrice.classList.add('seatandprice');
            //     const classTitle = document.createElement('h5');
            //     classTitle.classList.add('card-title');
            //     classTitle.textContent = classType;
            //     const classSubtitle = document.createElement('h6');
            //     classSubtitle.classList.add('card-subtitle', 'mb-2', 'text-body-secondary');
            //     classSubtitle.textContent = `₹${train.price[classType] || 'N/A'}`;
            //     seatAndPrice.appendChild(classTitle);
            //     seatAndPrice.appendChild(classSubtitle);
    
            //     // Create availability text
            //     const availabilityText = document.createElement('p');
            //     availabilityText.classList.add('available');
            //     availabilityText.style.marginTop = '-7px';
            //     availabilityText.textContent = train.availability[classType] ? 'Available' : 'Not Available';
    
            //     classCardBody.appendChild(seatAndPrice);
            //     classCardBody.appendChild(availabilityText);
    
            //     classCard.appendChild(classCardBody);
    
            //     // Append class card to seat card section
            //     seatCard.appendChild(classCard);
            // });
    
            // // Append seat card section to card body
            // cardBody.appendChild(seatCard);
    
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

// // Get the container where you want to display the train details
// const trainDetailsContainer = document.getElementById('trainDetailsContainer');

// // Loop through each train object in the data array
// trainDetails.forEach(async train => {
//     // Call the API to get details for each train
//     const trainDetails = await getTrainBetweenStations(train.from, train.to, train.train_date);

//     // Create HTML elements to display train details
//     const trainDetailsElement = document.createElement('div');
//     trainDetailsElement.innerHTML = `
//         <h2>${trainDetails.train_name} (${trainDetails.train_number})</h2>
//         <p>Departure Station: ${trainDetails.from_station_name} (${trainDetails.from})</p>
//         <p>Destination Station: ${trainDetails.to_station_name} (${trainDetails.to})</p>
//         <p>Departure Time: ${trainDetails.from_std}</p>
//         <p>Arrival Time: ${trainDetails.to_std}</p>
//         <!-- Add more details as needed -->

//         <hr> <!-- Add a horizontal line between train details -->
//     `;

//     // Append the train details to the container
//     trainDetailsContainer.appendChild(trainDetailsElement);
// });
