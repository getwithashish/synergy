const express = require('express');

const app = express();
app.use(express.json());

const PORT = 3000;

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
        pass: "ashish123",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFzaGlzaCBTYW0gVCBHZW9yZ2UiLCJpYXQiOjE1MTYyMzkwMjJ9.7feXCCW78LWuEcZLeno8_yM-KIaXdfxe0kY7zsks_MU"
    },
    {
        name: "Arjun",
        email: "arjun@gmail.com",
        pass: "arjun123",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFyanVuIiwiaWF0IjoxNTE2MjM5MDIyfQ.zfUABrV6X01Okg5gCKuWEkcunt_n9HvV37ZyxP8q2bk"
    },
    {
        name: "Archa",
        email: "archa@gmail.com",
        pass: "archa123",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFyY2hhIiwiaWF0IjoxNTE2MjM5MDIyfQ.a_zH8NHWX6vBhH3iaxdHzQBwAxpAG_mV_Ife0DS6y3c"
    },
    {
        name: "Devapriya",
        email: "devapriya@gmail.com",
        pass: "devapriya123",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRldmFwcml5YSIsImlhdCI6MTUxNjIzOTAyMn0.YerYAdkIpV0RoLFnn0TOArKR3rcAX3_29z9-8pREra4"
    },
    {
        name: "Dantus",
        email: "dantus@gmail.com",
        pass: "dantus123",
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
    
    let respObject = {};
    let status = 200;
    if(Object.keys(user).length !== 0){
        if(user.pass === userCred.pass){
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

