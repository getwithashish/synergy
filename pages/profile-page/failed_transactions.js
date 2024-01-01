document.addEventListener("DOMContentLoaded", function () {
  fetchAllFailedTransactions();
});


function fetchAllFailedTransactions(){

axios
  .get("http://localhost:3000/failedTransactions")
  .then((response) => {
    // Assuming your server returns an array of failed transactions
    const failedTransactions = response.data;

    // Generate HTML for the table
    const tableHtml = generateTableHtml(failedTransactions);

    // Append the table HTML to the container
    document.getElementById("failedTransactionsTableContainer").innerHTML =
      tableHtml;
  })
  .catch((error) => {
    console.error("Error fetching failed transactions:", error);
  });

}

// Function to generate HTML for the table
function generateTableHtml(failedTransactions) {
  if (failedTransactions.length === 0) {
    return "<p>No failed transactions available.</p>";
  }

  const tableHeaders = Object.keys(failedTransactions[0]);
  const tableRows = failedTransactions.map((transaction) => {
    return (
      "<tr>" +
      tableHeaders.map((header) => `<td>${transaction[header]}</td>`).join("") +
      "</tr>"
    );
  });

  const tableHtml = `
        <table class="table">
            <thead>
                <tr>${tableHeaders
                  .map((header) => `<th>${header}</th>`)
                  .join("")}</tr>
            </thead>
            <tbody>${tableRows.join("")}</tbody>
        </table>
    `;

  return tableHtml;
}
