const { fetchMyIP , fetchCoordsByIP , printPassTimes, fetchISSFlyOverTimes , nextISSTimesForMyLocation } = require('./iss_promised');


fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  }).catch((error) => {
    console.log("It didn't work: ", error.message);
  });