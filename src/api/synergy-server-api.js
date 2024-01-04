const synergyServerHeaders = {

};

const synergyServerUrl = "http://localhost:3000";

const signupEndpoint = "/signup";
const signinEndpoint = "/signin";
const userDataEndpoint = "/getUserData";

const trainsBetweenStationsEndpoint = "/trainBetweenStations";

const signup = async (params) => {
    return postRequest(`${synergyServerUrl}${signupEndpoint}`, params, synergyServerHeaders)
    .then((response) => {
        return response;
    });
};

const signin = async (params) => {
    return postRequest(`${synergyServerUrl}${signinEndpoint}`, params, synergyServerHeaders)
    .then((response) => {
        return response;
    });
};

const getUserData = async (params) => {
    return getRequest(`${synergyServerUrl}${userDataEndpoint}`, params, synergyServerHeaders)
    .then((response) => {
        return response;
    });
};

const getTrainsBetweenStations = async (params) => {
    return getRequest(`${synergyServerUrl}${trainsBetweenStationsEndpoint}`, params, synergyServerHeaders)
    .then((response) => {
        console.log("Inside Trains Function")
        return response;
    });
};
