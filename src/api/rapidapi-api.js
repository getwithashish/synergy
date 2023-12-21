const rapidapiHeaders = {
    'X-RapidAPI-Key': 'd4056bf21dmsh0598b6653ebc55bp1c0c6ejsn2975fb152d2a',
    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
};

const searchStationUrl = "https://irctc1.p.rapidapi.com/api/v1/searchStation";
const searchTrainUrl = "https://irctc1.p.rapidapi.com/api/v1/searchTrain";
const trainBetweenStationsUrl = "https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations";
const liveTrainStatusUrl = "https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus";
const trainScheduleUrl = "https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule";
const pnrStatusUrl = "https://irctc1.p.rapidapi.com/api/v3/getPNRStatus";
const seatAvailabilityUrl = "https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability";
const trainClassesUrl = "https://irctc1.p.rapidapi.com/api/v1/getTrainClasses";
const trainFareUrl = "https://irctc1.p.rapidapi.com/api/v2/getFare";
const trainByStationUrl = "https://irctc1.p.rapidapi.com/api/v3/getTrainsByStation";
const liveStationUrl = "https://irctc1.p.rapidapi.com/api/v3/getLiveStation";

const searchStation = async (params) => {
    let response = await getRequest(searchStationUrl, params, rapidapiHeaders);
    return response.data;
};

const searchTrain = async (params) => {
    let response = await getRequest(searchTrainUrl, params, rapidapiHeaders);
    return response.data;
};

const trainsBetweenStations = async (params) => {
    let response = await getRequest(trainBetweenStationsUrl, params, rapidapiHeaders);
    return response.data;
};

const getTrainLiveStatus = async (params) => {
    let response = await getRequest(liveTrainStatusUrl, params, rapidapiHeaders);
    return response.data;
};

const getTrainSchedule = async (params) => {
    let response = await getRequest(trainScheduleUrl, params, rapidapiHeaders);
    return response.data;
};

const getPNRStatus = async (params) => {
    let response = await getRequest(pnrStatusUrl, params, rapidapiHeaders);
    return response.data;
};

const checkSeatAvailability = async (params) => {
    let response = await getRequest(seatAvailabilityUrl, params, rapidapiHeaders);
    return response.data;
};

const getTrainClasses = async (params) => {
    let response = await getRequest(trainClassesUrl, params, rapidapiHeaders);
    return response.data;
};

const getTrainFare = async (params) => {
    let response = await getRequest(trainFareUrl, params, rapidapiHeaders);
    return response.data;
};

const getTrainsByStation = async (params) => {
    let response = await getRequest(trainByStationUrl, params, rapidapiHeaders);
    return response.data;
};

const getLiveStation = async (params) => {
    let response = await getRequest(liveStationUrl, params, rapidapiHeaders);
    return response.data;
};
  