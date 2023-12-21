const axios = require('axios');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

//GET

async function getRequest(apiUrl, parameters, headers) {
    try {
      // Make a GET request using Axios
      const response = await axios.get(apiUrl, { 
          params: parameters,
          headers:  headers
      });
  
      // Handle the response data as needed
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      throw error; // Optionally rethrow the error
    }
  }


//POST

async function postRequest(apiUrl, postData, headers) {
    try {
      // Make a POST request using Axios with headers
      const response = await axios.post(apiUrl, postData, { headers });
  
      // Handle the response data as needed
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      throw error; // Optionally rethrow the error
    }
  }


//DELETE

async function deleteRequest(apiUrl, headers) {
    try {
      // Make a DELETE request using Axios with headers
      const response = await axios.delete(apiUrl, { headers });
  
      // Handle the response data as needed
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      throw error; // Optionally rethrow the error
    }
  }


//PUT

async function putRequest(apiUrl, putData, headers) {
    try {
      // Make a PUT request using Axios with headers
      const response = await axios.put(apiUrl, putData, { headers });
  
      // Handle the response data as needed
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      throw error; // Optionally rethrow the error
    }
  }
