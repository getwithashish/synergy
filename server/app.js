const express = require('express');

const multer = require("multer");

const cors = require('cors');

const fs = require('fs');

const axios = require('axios');

const url = require('url');

const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false,
  });

const app = express();
app.use(express.json());
app.use(cors());

// Set up multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const PORT = 3000;

// Route to get all feedback entries
//Ensure that this code is placed after the initialization of your app and before the app.listen statement.
app.get("/allFeedback", (req, res) => {
  res.status(200).send(feedbackData);
});

// Endpoint to change password. old password is checked from user credentials given above
app.post('/change-password', (req, res) => {
    const { email, oldPassword, newPassword } = req.body;

    // Find the user by email
    const user = userCredentials.find(u => u.email === email);

    // If user not found or old password is incorrect, send an error response
    if (!user || user.pass !== oldPassword) {
        return res.status(401).json({ error: 'Invalid old password' });
    }

    // If old password is correct, update the password
    user.pass = newPassword;

    // Create a new JWT token (optional, if you use JWT for authentication)
    // const newJwtToken = jwt.sign({ sub: user.email, name: user.name }, 'your_secret_key', { expiresIn: '1h' });
    // user.jwt = newJwtToken;

    // Send a success response
    res.json({ message: 'Password changed successfully'});
});

app.listen(PORT, () => {
    console.log("Server listening on PORT: ", PORT);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});


// User Credentials
const userCredentials = [
    {
        name: "Ashish Sam T George",
        email: "ashish@gmail.com",
        password: "QWERTY@123qw",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFzaGlzaCBTYW0gVCBHZW9yZ2UiLCJpYXQiOjE1MTYyMzkwMjJ9.7feXCCW78LWuEcZLeno8_yM-KIaXdfxe0kY7zsks_MU"
    },
    {
        name: "Arjun",
        email: "arjun@gmail.com",
        password: "arjun123",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFyanVuIiwiaWF0IjoxNTE2MjM5MDIyfQ.zfUABrV6X01Okg5gCKuWEkcunt_n9HvV37ZyxP8q2bk"
    },
    {
        name: "Archa",
        email: "archa@gmail.com",
        password: "archa123",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFyY2hhIiwiaWF0IjoxNTE2MjM5MDIyfQ.a_zH8NHWX6vBhH3iaxdHzQBwAxpAG_mV_Ife0DS6y3c"
    },
    {
        name: "Devapriya",
        email: "devapriya@gmail.com",
        password: "devapriya123",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRldmFwcml5YSIsImlhdCI6MTUxNjIzOTAyMn0.YerYAdkIpV0RoLFnn0TOArKR3rcAX3_29z9-8pREra4"
    },
    {
        name: "Dantus",
        email: "dantus@gmail.com",
        password: "dantus123",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhbnR1cyIsImlhdCI6MTUxNjIzOTAyMn0.slE22Zv7WX-ma7OhUGbWEguWZ1k3ss0eWCXvgmIPiN4"
    }
];


// View All Users Endpoint
app.get("/allUsers", (request, response) => {
    console.log(userCredentials);
    response.send(userCredentials);
});


// Create User Endpoint
app.post("/signup", (request, response) => {
    let userCred = request.body;
    userCred["jwt"] = "testJWT123";
    console.log("Received Body: ", userCred);

    let check = userCredentials.some(el => el.email === userCred.email);
    let respObject = {};
    let status = 200;
    if(check){
        respObject = {
            status: "Failure",
            msg: "User with same email already exists"
        };
        status = 401;
    }
    else{
        userCredentials.push(userCred)
        respObject = userCred;
        respObject["status"] = "Success";
        status = 200;
    }
    
    response.status(status).send(respObject);
});

// Login User Endpoint
app.post("/signin", (request, response) => {
    let userCred = request.body;
    let user = userCredentials.find(el => el.email === userCred.email);

    console.log("Received Body: ", user);
    
    let respObject = {};
    let status = 200;
    if(user !== undefined && Object.keys(user).length !== 0){
        if(user.password === userCred.password){
            status = 200;
            respObject = {
                status: "Success",
                jwt: user.jwt
            }
        }
        else{
            respObject = {
                status: "Failure",
                msg: "Password does not match"
            };
            status = 401;
        }
    }
    else{
        status = 401;
        respObject = {
            status: "Failure",
            msg: "User does not exist"
        }
    }
    response.status(status).send(respObject);
});


// User Details
const userDetails = [
    {
        name: "Ashish Sam T George",
        gender: "Male",
        dob: "02-06-2010",
        mobile: "9446837231",
        country: "India",
        residentialAddress: "Good House, Trivandrum",
        officeAddress: "Experion Hall, Kazhakkoottam",
        email: "ashish@gmail.com",
    },
    {
        name: "Arjun",
        gender: "Male",
        dob: "03-04-2023",
        mobile: "9446837201",
        country: "India",
        residentialAddress: "Good House, Trivandrum",
        officeAddress: "Experion Hall, Kazhakkoottam",
        email: "arjun@gmail.com",
    },
    {
        name: "Devapriya",
        gender: "Female",
        dob: "02-10-2019",
        mobile: "944687231",
        country: "India",
        residentialAddress: "Good House, Trivandrum",
        officeAddress: "Experion Hall, Kazhakkoottam",
        email: "devapriya@gmail.com",
    },
    {
        name: "Archa",
        gender: "Female",
        dob: "12-03-2018",
        mobile: "9446837232",
        country: "India",
        residentialAddress: "Good House, Trivandrum",
        officeAddress: "Experion Hall, Kazhakkoottam",
        email: "archa@gmail.com",
    },
    {
        name: "Dantus",
        gender: "Male",
        dob: "02-03-2001",
        mobile: "9946837231",
        country: "India",
        residentialAddress: "Good House, Trivandrum",
        officeAddress: "Experion Hall, Kazhakkoottam",
        email: "dantus@gmail.com",
    },

];

// Get User Data
app.get("/getUserData", (request, response) => {
    let email = request.query.email;
    let user = userDetails.find(el => el.email === email);

    response.status(200).send(user);
});


const bookingDetails = {
  upcomingJourneys: [
    {
      from: "Source1",
      to: "Destination1",
      date: "2023-01-01",
      trainName: "Train1",
      trainNumber: "12345",
      pnr: "ABC123",
      bookingDate: "2023-01-01",
      reservationStatus: "Confirmed",
    },
    // Additional upcoming journey entries...
  ],
  completedJourneys: [
    {
      from: "Source2",
      to: "Destination2",
      date: "2023-02-01",
      trainName: "Train2",
      trainNumber: "67890",
      pnr: "XYZ456",
      bookingDate: "2023-01-15",
      reservationStatus: "Cancelled",
    },
    // Additional completed journey entries...
  ],
};


// Get User Bookings
// app.get("/getUserBookings", (request, response) => {
//     let userId = request.query.userId; // Assuming you have a userId associated with bookings
//     let userBookings = bookingDetails[userId];

//     if (userBookings) {
//         response.status(200).send(userBookings);
//     } else {
//         response.status(404).send({ status: "Failure", msg: "User bookings not found" });
//     }
// });

// Get All Bookings
app.get("/getAllBookings", (request, response) => {
    response.status(200).send(bookingDetails);
});


//feedback form submission

// Set up the "uploads" directory to store uploaded files
const feedback_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Files will be saved in the "uploads" directory
  },
  filename: function (req, file, cb) {
    // Use the original name of the file
    cb(null, file.originalname);
  },
});

const feedback_upload = multer({ storage: feedback_storage });

// Array to store feedback data
const feedbackData = [];

//upload.single("fileUpload") middleware is used to handle a single file upload with the field name "fileUpload". The file data is then available in req.file.
app.post("/submit-feedback", feedback_upload.single("fileUpload"), (req, res) => {
  const feedbackText = req.body.feedbackText;
  const rating = req.body.rating;
  const fileUpload = req.file; // This will contain the file data
  // Handle the feedback (e.g., store it in a database)
  console.log("Received feedback text:", feedbackText);
  console.log("Received rating:", rating);
  console.log("Received file:", fileUpload);

  // Store feedback data in the array
  const feedbackEntry = {
    feedbackText: feedbackText,
    rating: rating,
    file: {
      originalname: fileUpload.originalname,
      destination: fileUpload.destination,
      filename: fileUpload.filename,
    },
  };
  feedbackData.push(feedbackEntry);

  console.log()

  // Send a response back to the client
  res.send("Feedback received successfully!");
});

// Dummy failed transactions data
const failedTransactions = [
  {
    transactionId: '1',
    amount: 100,
    reason: 'Insufficient funds',
    timestamp: '2023-01-01T12:00:00',
  },
  {
    transactionId: '2',
    amount: 50,
    reason: 'Invalid recipient',
    timestamp: '2023-01-02T14:30:00',
  },
  // Add more dummy data as needed
];

// Endpoint to get failed transactions
app.get('/failedTransactions', (req, res) => {
  res.status(200).json(failedTransactions);
});

// Endpoint to get trains between stations
app.get("/trainBetweenStations", (req, res) => {
    fs.readFile("trainBetweenStationsDummyData.json", "utf8", (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
          }
          const jsonData = JSON.parse(data);
          res.json(jsonData);
    })
})


app.get("/stationsList", async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
  const queryParams = parsedUrl.query;
  console.log(queryParams)

   await axios.get('https://api.railwayapi.site/api/v1/stations?q=kaz', { httpsAgent: agent })
  .then(response => {
    res.json(response.data);
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('Data not obtained');
  })
})
