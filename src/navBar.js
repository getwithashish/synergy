const addDynamicNavbar = async () => {
    await fetch("navBar.html")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        document.getElementById("nav-dynamic-container").innerHTML = data;
      });
  };
  addDynamicNavbar();

  document.addEventListener("DOMContentLoaded", function () {
    var jwtTokenNavBar = localStorage.getItem("jwt");
    var isValidTokenNavBar =
      jwtTokenNavBar !== null && jwtTokenNavBar !== undefined;

    if (isValidTokenNavBar) {
      document.getElementById("profile-button-id").style =
        "display: block";
    } else {
      document.getElementById("login-signup-button").style =
        "display: block";
    }
  });

  const logoutFunction = () => {
    let timerInterval;
    Swal.fire({
      title: "<p style='color: white'>Confirm Log out</p>",
      html: "<p style='color: white'>I will close in <b></b> seconds.<p>",
      timer: 3000,
      timerProgressBar: true,
      showCancelButton: true,
      customClass: {
        popup: "logout-popup",
      },
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        localStorage.clear();
        window.location.href = "/index.html";
      }
    });
  };