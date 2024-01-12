function submitCancellation() {
        // Fetch input values
        const pnrNumber = document.getElementById('pnrNumber').value;
        const trainNumber = document.getElementById('trainNumber').value;
        // const journeyDetails = document.getElementById('journeyDetails').value;
        // const passengerDetails = document.getElementById('passengerDetails').value;
        // const classOfTravel = document.getElementById('classOfTravel').value;
        const reasonForCancellation = document.getElementById('reasonForCancellation').value;
        // const contactInformation = document.getElementById('contactInformation').value;
        // const paymentDetails = document.getElementById('paymentDetails').value;
        const contactInformation = document.getElementById("contactInformation").value;
        // Use Axios to send cancellation details to the server
        axios
          .post("http://localhost:3000/cancellation-endpoint", {
            pnrNumber,
            trainNumber,
            reasonForCancellation,
            contactInformation,
          })
          .then(function (response) {
            // Handle successful cancellation response
            console.log(response.data);

            // Get the notification element
            const notification = document.getElementById("cancelNotification");

            // Check if the cancellation was successful
            if (response.data.status === "Success") {
              // Update the notification content for success
              notification.textContent = "Booking cancelled successfully!";
              notification.style.backgroundColor = "#4CAF50"; // Green color
            } else {
              // Update the notification content for failure
              notification.textContent =
                "Booking cancellation failed. Please try again.";
              notification.style.backgroundColor = "#f44336"; // Red color
            }

            // Show the notification
            notification.style.display = "block";

            // Optionally, hide the notification after a few seconds
            setTimeout(() => {
              notification.style.display = "none";
            }, 5000); // 5000 milliseconds (5 seconds)
          })
          .catch(function (error) {
            // Handle cancellation error
            console.error(error);
          });
}