function submitCancellation() {
        // Fetch input values
        const pnrNumber = document.getElementById('pnrNumber').value;
        const trainNumber = document.getElementById('trainNumber').value;
        const journeyDetails = document.getElementById('journeyDetails').value;
        const passengerDetails = document.getElementById('passengerDetails').value;
        const classOfTravel = document.getElementById('classOfTravel').value;
        const reasonForCancellation = document.getElementById('reasonForCancellation').value;
        const contactInformation = document.getElementById('contactInformation').value;
        const paymentDetails = document.getElementById('paymentDetails').value;

        // Use Axios to send cancellation details to the server
        axios.post('/cancellation-endpoint', {
            pnrNumber,
            trainNumber,
            journeyDetails,
            passengerDetails,
            classOfTravel,
            reasonForCancellation,
            contactInformation,
            paymentDetails
        })
        .then(function (response) {
            // Handle successful cancellation response
            console.log(response.data);
        })
        .catch(function (error) {
            // Handle cancellation error
            console.error(error);
        });
}