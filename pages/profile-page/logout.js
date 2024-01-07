// import Swal from "sweetalert2";

document
  .getElementById("logoutLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the logout confirmation modal
    var myModal = new bootstrap.Modal(document.getElementById("logoutModal"));
    myModal.show();
  });

document.getElementById("confirmLogoutBtn").addEventListener("click", function () {
    // Perform logout action here (e.g., redirect to logout endpoint)
    // For now, let's simulate a logout by alerting
    event.preventDefault();
    
    let timerInterval;
    Swal.fire({
      title: "Log out alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        window.location.href = "/index.html";
      }
    });

    // Close the modal
    var myModal = new bootstrap.Modal(document.getElementById("logoutModal"));
    myModal.hide();
  });
