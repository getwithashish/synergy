document.addEventListener("DOMContentLoaded", function () {
    fetchAllFailedTransactions();
});
function fetchAllFailedTransactions() {
    axios.get("http://localhost:3000/failedTransactions").then(function (response) {
        // Assuming your server returns an array of failed transactions
        var failedTransactions = response.data;
        // Generate HTML for the table
        var tableHtml = generateTableHtml(failedTransactions);
        // Append the table HTML to the container
        var tableContainer = document.getElementById("failedTransactionsTableContainer");
        if (tableContainer) {
            tableContainer.innerHTML = tableHtml;
        }
    })
        .catch(function (error) {
        console.error("Error fetching failed transactions:", error);
    });
}
// Function to generate HTML for the table
function generateTableHtml(failedTransactions) {
    if (failedTransactions.length === 0) {
        return "<p>No failed transactions available.</p>";
    }
    var tableHeaders = Object.keys(failedTransactions[0]);
    var tableRows = failedTransactions.map(function (transaction) {
        return ("<tr>" +
            tableHeaders.map(function (header) { return "<td>".concat(transaction[header], "</td>"); }).join("") +
            "</tr>");
    });
    var tableHtml = "\n        <table class=\"table\">\n            <thead>\n                <tr>".concat(tableHeaders
        .map(function (header) { return "<th>".concat(header, "</th>"); })
        .join(""), "</tr>\n            </thead>\n            <tbody>").concat(tableRows.join(""), "</tbody>\n        </table>\n    ");
    return tableHtml;
}
