function uploadProfilePhoto() {
  // Get the file input element
  var input = document.getElementById("photoUpload");

  // Check if a file is selected
  if (input.files.length > 0) {
    // Create a FormData object to send the file to the server
    var formData = new FormData();
    formData.append("profilePhoto", input.files[0]);

    // Simulate sending the file to the server (replace with actual server-side logic)
    // Example with Axios:
    // axios.post('/upload-profile-photo', formData)
    //   .then(response => {
    //     console.log(response.data);
    //     // Assuming the server responds with the uploaded file's URL
    //     updateProfilePhoto(response.data.photoUrl);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    // Simulate success for demonstration purposes
    var imageUrl = URL.createObjectURL(input.files[0]);
    updateProfilePhoto(imageUrl);
  }
}

function updateProfilePhoto(photoUrl) {
  // Update the <img> element with the new photo URL
  var profileImage = document.getElementById("profileImage");
  console.log("profileImage is" , profileImage);
  profileImage.src = photoUrl;

  // Apply styles to the image to fit into the small rounded circle
  profileImage.style.maxWidth = "50px"; // Set your desired maximum width
  profileImage.style.maxHeight = "50px"; // Set your desired maximum height
  profileImage.style.objectFit = "cover"; // Adjust as needed (cover, contain, etc.)

  // Save the photo URL in localStorage or on the server for future use
  // (You should replace this with your actual storage or database logic)
  localStorage.setItem("profilePhotoUrl", photoUrl);
}

// Load the profile photo when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  var storedPhotoUrl = localStorage.getItem("profilePhotoUrl");
  if (storedPhotoUrl) {
    updateProfilePhoto(storedPhotoUrl);
  }
});
