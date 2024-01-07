

function openJsCheckoutPopup(orderId, txnToken, amount){
    var config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
        "orderId": orderId, 
        "token": txnToken, 
        "tokenType": "TXN_TOKEN",
        "amount": amount 
      },
      "merchant":{
         "redirect": true
      },
      "handler": {
        "notifyMerchant": function(eventName,data){
          console.log("notifyMerchant handler function called");
          console.log("eventName => ",eventName);
          console.log("data => ",data);
        }
      }
    };
    if(window.Paytm && window.Paytm.CheckoutJS){
      // initialze configuration using init method 
      window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
      // after successfully updating configuration, invoke checkoutjs
      window.Paytm.CheckoutJS.invoke();
    }).catch(function onError(error){
         console.log("error => ",error);
      });
    }
  }



  // const axios = require('axios');

  // Replace these values with your actual data

  const passengerDetails = {
    name: 'John Doe',
    age: 25,
    gender: 'Male',
    nationality: 'US',
    mobileNumber: '1234567890',
    email: 'john.doe@example.com',
    idProof: 'Passport',
    quota: 'General',
    travelClass: 'AC',
    berthPreference: 'Lower',
    mealPreference: 'Vegetarian',
    coachNumber: 'A1',
    reservationChoice: 'Window',
    paymentMode: 'Credit Card',
  };

// Function to initiate payment
async function initiatePayment() {
  try {
    // Replace this URL with your actual API endpoint
    const apiUrl = 'http://localhost:3000/initiatePayment';

    // Make the POST request using Axios
    // const response = await axios.post(apiUrl, passengerDetails);
    await axios.post(apiUrl, passengerDetails).then(response => {

    const { txnToken, orderId, amount } = response.data;
    console.log("token",txnToken);
    openJsCheckoutPopup(orderId, txnToken, amount)
    })


    // Extract txnToken from the response object
    // const { txnToken } = response.data;

    // console.log('Payment initiation successful. Transaction Token:', txnToken);
    // return txnToken;
  } catch (error) {
    console.error('Error initiating payment:', error.response ? error.response.data : error.message);
    throw error;
  }
}





  
  
  