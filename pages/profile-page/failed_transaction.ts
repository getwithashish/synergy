/// <reference lib="es2015" />

import axios from "axios";

document.addEventListener("DOMContentLoaded", function () {
  fetchAllFailedTransactions();
});

function fetchAllFailedTransactions() {
  axios
    .get("http://localhost:3000/failedTransactions")
    .then((response) => {
      // Assuming your server returns an array of failed transactions
      const failedTransactions: any[] = response.data;

      // Generate HTML for the table
      const tableHtml: string = generateTableHtml(failedTransactions);

      // Append the table HTML to the container
      const tableContainer = document.getElementById(
        "failedTransactionsTableContainer"
      );
      if (tableContainer) {
        tableContainer.innerHTML = tableHtml;
      }
    })
    .catch((error) => {
      console.error("Error fetching failed transactions:", error);
    });
}

// Function to generate HTML for the table
function generateTableHtml(failedTransactions: any[]): string {
  if (failedTransactions.length === 0) {
    return "<p>No failed transactions available.</p>";
  }

  const tableHeaders: string[] = Object.keys(failedTransactions[0]);
  const tableRows: string[] = failedTransactions.map((transaction) => {
    return (
      "<tr>" +
      tableHeaders.map((header) => `<td>${transaction[header]}</td>`).join("") +
      "</tr>"
    );
  });

  const tableHtml: string = `
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
