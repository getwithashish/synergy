
function submitFeedback() {
  // Get feedback data
  var feedbackText = document.getElementById("feedbackText").value;
  var rating = document.querySelector('input[name="experienceRating"]:checked')? document.querySelector('input[name="experienceRating"]:checked').value: "";
  var fileUpload = document.getElementById("fileUpload").files[0];

  // Simulate sending feedback data to the server (replace this with actual server-side logic)
  // For file upload, you would use FormData and send it using XMLHttpRequest or fetch
  // Example with Axios:
  // var formData = new FormData();
  // formData.append('feedbackText', feedbackText);
  // formData.append('rating', rating);
  // formData.append('fileUpload', fileUpload);
  // axios.post('/submit-feedback', formData)
  //   .then(response => {
  //     console.log(response.data);
  //     showNotification();
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  // Simulate success for demonstration purposes
  showNotification();
}

function showNotification() {
  var notification = document.getElementById("notification");
  notification.style.display = "block";

  // Hide the notification after 3 seconds
  setTimeout(function () {
    notification.style.display = "none";
  }, 3000);
}