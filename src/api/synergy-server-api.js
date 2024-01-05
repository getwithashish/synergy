const synergyServerHeaders = {

};

const synergyServerUrl = "http://localhost:3000";

const signupEndpoint = "/signup";
const signinEndpoint = "/signin";
const userDataEndpoint = "/getUserData";

const trainsBetweenStationsDummyEndpoint = "/trainBetweenStations";
const stationsListEndpoint = "/stationsList";

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
    return getRequest(`${synergyServerUrl}${trainsBetweenStationsDummyEndpoint}`, params, synergyServerHeaders)
    .then((response) => {
        console.log("Inside Trains Function")
        return response;
    });
};

const getStationsList = async (params) => {
    return getRequest(`${synergyServerUrl}${stationsListEndpoint}`, params, synergyServerHeaders)
    .then((response) => {
        console.log("Inside Stations List Function")
        return response;
    });
}
