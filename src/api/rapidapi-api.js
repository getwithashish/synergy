const rapidapiHeaders = {
    'X-RapidAPI-Key': 'a5259e6286msh6403e2f5547e36dp17092cjsna72ea882ac83',
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
    return getRequest(searchStationUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};


const searchTrain = async (params) => {
    return getRequest(searchTrainUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};


const trainsBetweenStations = async (params) => {
    return getRequest(trainBetweenStationsUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};


const getTrainLiveStatus = async (params) => {
    return getRequest(liveTrainStatusUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};


const getTrainSchedule = async (params) => {
    return getRequest(trainScheduleUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};

const getPNRStatus = async (params) => {
    return getRequest(pnrStatusUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};

const checkSeatAvailability = async (params) => {
    return getRequest(seatAvailabilityUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};

const getTrainClasses = async (params) => {
    return getRequest(trainClassesUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};

const getTrainFare = async (params) => {
    return getRequest(trainFareUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};

const getTrainsByStation = async (params) => {
    return getRequest(trainByStationUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};

const getLiveStation = async (params) => {
    return getRequest(liveStationUrl, params, rapidapiHeaders)
    .then((response) => {
        return response.data;
    });
};
  