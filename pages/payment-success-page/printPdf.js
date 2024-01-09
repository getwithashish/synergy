const urlParams = new URLSearchParams(window.location.search);
  var passengerDetails = {
    firstName: decodeURIComponent(urlParams.get("firstName")) || "",
    age: urlParams.get("age") || "",
    gender: urlParams.get("gender") || "",
    mobileNumber: decodeURIComponent(urlParams.get("mobileNumber")) || "",
    email: decodeURIComponent(urlParams.get("email")) || "",
    idProof: decodeURIComponent(urlParams.get("idProof")) || "",
    selectClass: decodeURIComponent(urlParams.get("selectClass")) || "",
    selectQuota: decodeURIComponent(urlParams.get("selectQuota")) || "",
    berthPreference: decodeURIComponent(urlParams.get("berthPreference")) || "",
    mealPreference: decodeURIComponent(urlParams.get("mealPreference")) || "",
    disabledSelect: decodeURIComponent(urlParams.get("disabledSelect")) || "",
    reservationChoice:
      decodeURIComponent(urlParams.get("reservationChoice")) || "",
    trainNumber: decodeURIComponent(urlParams.get("trainNumber")) || "",
    trainName: decodeURIComponent(urlParams.get("trainName")) || "",
    source: decodeURIComponent(urlParams.get("source")) || "",
    destination: decodeURIComponent(urlParams.get("destination")) || "",
  };

  var tableBody = document.querySelector("#ticketContainer table");

  // Iterate through the passengerDetails object and create table rows
  for (var key in passengerDetails) {
    var row = tableBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = key;
    cell2.textContent = passengerDetails[key];
  }

  var element = document.getElementById("ticketContainer");
  html2pdf(element);

  setTimeout(() => {
    window.location.replace("/index.html");
  }, 5000);


