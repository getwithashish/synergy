       // Fetch user bookings data when the page loads
        document.addEventListener("DOMContentLoaded", function () {
            fetchAllBookings();
        });

    //    function fetchUserBookings() {
    //      // Assuming you have the user ID, replace '123' with the actual user ID
    //      const userId = "123";

    //      // Make an API request using Axios
    //      axios
    //        .get(`http://localhost:3000/getUserBookings?userId=${userId}`)
    //        .then((response) => {
    //          console.log(response);
    //          // Update HTML content with user bookings
    //          updateBookings(response.data);
    //        })
    //        .catch((error) => {
    //          console.error("Error fetching user bookings:", error);
    //        });
    //    }

       function fetchAllBookings() {
         // Make an API request using Axios
         axios
           .get("http://localhost:3000/getAllBookings")
           .then((response) => {
             console.log(response);
             // Update HTML content with all bookings
             updateBookings(response.data);
           })
           .catch((error) => {
             console.error("Error fetching all bookings:", error);
           });
       }



        function updateBookings(bookings) {
            // Get the card body element
            const bookingsCardBody = document.getElementById("bookingsCardBody");

            // Create a table for upcoming journeys
            const upcomingTable = createBookingTable("Upcoming Journeys", bookings.upcomingJourneys);
            // Append the upcoming table to the card body

            console.log("Upcoming journey is ",upcomingTable);

            bookingsCardBody.appendChild(upcomingTable);

            // Create a table for completed journeys
            const completedTable = createBookingTable("Completed Journeys", bookings.completedJourneys);
            // Append the completed table to the card body
            bookingsCardBody.appendChild(completedTable);
        }

        function createBookingTable(title, data) {
          // Create a table element with Bootstrap classes
          const table = document.createElement("table");
          table.classList.add("table", "table-responsive");

          // Create a table header
          const heading = document.createElement("h3");
          heading.textContent = title;
          // Get the div with id "bookingsCardBody"
          var bookingsCardBody = document.getElementById("bookingsCardBody");

          // Append the h1 element to the "bookingsCardBody" div
          bookingsCardBody.appendChild(heading);
          const thead = document.createElement("thead");
          const headerRow = thead.insertRow();
          headerRow.innerHTML = `<th>${"Source"}</th> <th>${"Destination"}</th> <th>${"Date of journey"}</th>
          <th>${"Train Name"}</th> <th>${"Train Number"}</th> <th>${"PNR Number"}</th>
          <th>${"Booking date"}</th> <th>${"Status"}</th>`;
          table.appendChild(thead);

          // Create table body
          const tbody = document.createElement("tbody");

          const classList = [
            "status delivered",
            "status cancelled",
          ];
          // Add rows to the table
          data.forEach((booking) => {
            const row = tbody.insertRow();

            // Determine the class based on reservationStatus
            const statusClass = booking.reservationStatus === "Cancelled"? classList[1]: classList[0];

            row.innerHTML = `
            <td>${booking.from}</td>
            <td>${booking.to}</td>
            <td>${booking.date}</td>
            <td>${booking.trainName}</td>
            <td>${booking.trainNumber}</td>
            <td>${booking.pnr}</td>
            <td>${booking.bookingDate}</td>
            <td class="${statusClass}">${booking.reservationStatus}</td>
        `;
          });

          table.appendChild(tbody);

          return table;
        }
