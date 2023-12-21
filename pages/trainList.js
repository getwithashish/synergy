async function searchTrain1() {
  const trainInput = document.getElementById("searchInput").value.trim();
  const trainList = document.getElementById("trainList");
  trainList.innerHTML = ""; // Clear previous search results

  const someData = getRequest(
    "https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule",
    { trainNo: trainInput },
    {
      "X-RapidAPI-Key": "60ed47cedemsh385a69a7a298dabp15fd2djsn05afeb4e5e7b",
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    }
  );
    
displayTrainData(trainList, someData);
}




function displayTrainData(trainList, someData) {
    const detail = document.createElement('li');
    if (someData && someData.response) {
      detail.textContent = `Train details: ${JSON.stringify(someData.response)}`;
    } else {
      detail.textContent = `Train information not found.`;
    }
    trainList.appendChild(detail);
  }
 
  document.addEventListener("DOMContentLoaded", function() {
    const trainListContent = document.getElementById("trainList").innerHTML;
    const printContentDiv = document.getElementById("printContent");
    printContentDiv.innerHTML = "<h2>Content of Train List:</h2>" + trainListContent;
  });

