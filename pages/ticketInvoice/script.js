   var passengerDetails = {
            firstName: "John",
            age: 25,
            gender: "Male",
            mobileNumber: "1234567890",
            email: "john@example.com",
            idProof: "A1234567",
            selectClass: "AC Sleeper",
            selectQuota: "General",
            berthPreference: "Lower",
            mealPreference: "Vegetarian",
            disabledSelect: false,
            reservationChoice: "Confirmed",
            trainNumber: "12345",
            trainName: "ExpressXYZ",
            source: "Thiruvananhtapuram",
            destination: "Bengaluru"
        };

        // Get the table body element
        var tableBody = document.querySelector("#ticketContainer table");

        // Iterate through the passengerDetails object and create table rows
        for (var key in passengerDetails) {
            var row = tableBody.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.textContent = key;
            cell2.textContent = passengerDetails[key];
        }

        // Generate PDF when the button is clicked
        var button = document.getElementById("btn");
        button.addEventListener("click", function () {
            var element = document.getElementById("ticketContainer");
            html2pdf(element);
        });