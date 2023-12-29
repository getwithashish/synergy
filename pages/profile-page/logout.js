document.getElementById("logoutLink").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the logout confirmation modal
    var myModal = new bootstrap.Modal(document.getElementById("logoutModal"));
    myModal.show();
  });

document.getElementById("confirmLogoutBtn").addEventListener("click", function () {
    // Perform logout action here (e.g., redirect to logout endpoint)
    // For now, let's simulate a logout by alerting
    alert("Logout successful!");

    // Close the modal
    var myModal = new bootstrap.Modal(document.getElementById("logoutModal"));
    myModal.hide();
  });
