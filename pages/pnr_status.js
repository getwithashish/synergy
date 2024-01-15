function checkPnr(){
    // const createAccountContainer = document.getElementsByClassName('create-account-container')[0];
    const createAccountContainer = document.getElementById('pnr_container_id'); 
    console.log("INside Check")
    const pnrInput = document.getElementById("checkPNR").value.trim();
    const trainNumberPnr = document.getElementById("trainNumber");
    trainNumberPnr.innerHTML = "";
    const trainNamePnr = document.getElementById("trainName");
    trainNamePnr.innerHTML = "";
    const boardStation = document.getElementById("boardingStation");
    boardStation.innerHTML = "";
    const reservUpto = document.getElementById("reservUpto");
    reservUpto.innerHTML = "";
    const passStatus = document.getElementById("passStatus");
    passStatus.innerHTML = "";
    const timeTaken = document.getElementById("timeTaken");
    timeTaken.innerHTML = "";
    const departureTime = document.getElementById("departureTime");
    departureTime.innerHTML = "";
    const arrivalTime = document.getElementById("arrivalTime");
    arrivalTime.innerHTML = "";
    const bookingFare = document.getElementById("bookingFare");
    bookingFare.innerHTML = "";
    const ticketFare = document.getElementById("ticketFare");
    ticketFare.innerHTML = "";
    const coachPostn = document.getElementById("coachPostn");
    coachPostn.innerHTML = "";
    const pnrQuota = document.getElementById("quota");
    pnrQuota.innerHTML = "";
    const pnrClass = document.getElementById("class");
    pnrClass.innerHTML = "";
    const pnrPltf = document.getElementById("platformNo");
    pnrPltf.innerHTML = "";

    expandBox(createAccountContainer);

    const somePnr = getPNRStatus({pnrNumber: pnrInput})
    .then ((response) =>{
        console.log("Inside pnr status: ", response);

      let pnrTName = response.TrainName;
      let pnrTNo = response.TrainNo;
      let bStation = response.BoardingStationName;
      let reservStation = response.ReservationUptoName;
      let passenger = response.PassengerStatus;
      let time = response.Duration;
      let depTime = response.DepartureTime;
      let arrTime = response.ArrivalTime;
      let bookFare = response.BookingFare;
      let tickFare = response.TicketFare;
      let coachPosition = response.Doj;
      let quotaPnr = response.Quota;
      let classPNR = response.Class;
      let pltfPNR = response.ExpectedPlatformNo;

      // expandBox(createAccountContainer);

      displayPNR(pnrTName,pnrTNo,bStation,reservStation,passenger,time,depTime,arrTime,bookFare,tickFare,coachPosition,quotaPnr,classPNR,pltfPNR);
         
    })
    
}
 function displayPNR(pnrTName,pnrTNo,bStation,reservStation,passenger,time,depTime,arrTime,bookFare,tickFare,coachPosition,quotaPnr,classPNR,pltfPNR){

    const trainNumber = document.getElementById("trainNumber");
    trainNumber.textContent = "Train Name: "+"  "+pnrTName;
    const trainName = document.getElementById("trainName");
    trainName.textContent = "Train Number: "+"  "+pnrTNo;
    const boardStation = document.getElementById("boardingStation");
    boardStation.textContent = "Boarding Station: "+"  "+bStation;
    const reservUpto = document.getElementById("reservUpto");
    reservUpto.textContent = "Reservation upto: "+"  "+reservStation;
    const passStatus = document.getElementById("passStatus");
    passStatus.textContent ="Passenger Status: "+"  "+ passenger;
    const timeTaken = document.getElementById("timeTaken");
    timeTaken.textContent ="Duration: "+"  "+ time;
    const departureTime = document.getElementById("departureTime");
    departureTime.textContent = "Departure Time: "+"  "+depTime;
    const arrivalTime = document.getElementById("arrivalTime");
    arrivalTime.textContent ="Arrival Time: "+"  "+ arrTime;
    const bookingFare = document.getElementById("bookingFare");
    bookingFare.textContent ="Booking Fare: "+"  "+ bookFare;
    const ticketFare = document.getElementById("ticketFare");
    ticketFare.textContent ="Ticket Fare: "+"  "+ tickFare;
    const coachPostn = document.getElementById("coachPostn");
    coachPostn.textContent ="Date: "+"  "+ coachPosition;
    const pnrQuota = document.getElementById("quota");
    pnrQuota.textContent ="Quota: "+"  "+ quotaPnr;
    const pnrClass = document.getElementById("class");
    pnrClass.textContent ="Class: "+"  "+ classPNR;
    const pnrPltf = document.getElementById("platformNo");
    pnrPltf.textContent ="Platform: "+"  "+ pltfPNR;

 }

 function expandBox(createAccountContainer) {
    createAccountContainer.style = "height:525px"; 
    
}