const railwayapiUrl = "https://api.railwayapi.site/api/v1";

const railwayapiHeaders = {

};

const searchTrainEndpoint = "/trains";
const trainDetailsEndpoint = "/trains"; // /trains/{trainNumbers}
const trainScheduleEndpoint = "schedules"; //schedules/{trainNumber}?fullSchedule=true
const searchStationEndpoint = "/stations";
const stationDetailsEndpoint = "stations"; // stations/{stationCodes}
const trainsBetweenStationsEndpoint = "/trainsBtwStations"; //trainsBtwStations?fromStation=NZM&toStation=GWL&allTrains=true


const searchStationRailwayApi = async (params) => {
    console.log("Inside search Station Method")
    return getRequest(`${railwayapiUrl}${searchStationEndpoint}`, params, railwayapiHeaders)
    .then((response) => {
        console.log("Inside Search Station: ", response.data);
        return response.data;
    });
};
