async function checkPnr(){
    const createAccountContainer = document.getElementsByClassName('create-account-container')[0];
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

    const somePnr = await getPNRStatus({pnrNumber: pnrInput})
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
      let coachPosition = response.CoachPosition;
      let quotaPnr = response.Quota;

      displayPNR(pnrTName,pnrTNo,bStation,reservStation,passenger,time,depTime,arrTime,bookFare,tickFare,coachPosition,quotaPnr);
    })
    expandBox(createAccountContainer); 
}
 function displayPNR(pnrTName,pnrTNo,bStation,reservStation,passenger,time,depTime,arrTime,bookFare,tickFare,coachPosition,quotaPnr){

    const trainNumber = document.getElementById("trainNumber");
    trainNumber.textContent = pnrTName;
    const trainName = document.getElementById("trainName");
    trainName.textContent = pnrTNo;
    const boardStation = document.getElementById("boardingStation");
    boardStation.textContent = bStation;
    const reservUpto = document.getElementById("reservUpto");
    reservUpto.textContent = reservStation;
    const passStatus = document.getElementById("passStatus");
    passStatus.textContent = passenger;
    const timeTaken = document.getElementById("timeTaken");
    timeTaken.textContent = time;
    const departureTime = document.getElementById("departureTime");
    departureTime.textContent = depTime;
    const arrivalTime = document.getElementById("arrivalTime");
    arrivalTime.textContent = arrTime;
    const bookingFare = document.getElementById("bookingFare");
    bookingFare.textContent = bookFare;
    const ticketFare = document.getElementById("ticketFare");
    ticketFare.textContent = tickFare;
    const coachPostn = document.getElementById("coachPostn");
    coachPostn.textContent = coachPosition;
    const pnrQuota = document.getElementById("quota");
    pnrQuota.textContent = quotaPnr;

 }

 function expandBox(createAccountContainer) {
    
    createAccountContainer.style.height = "515px"; 
    
}