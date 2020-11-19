const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2ttYWlud2FsIiwiYSI6ImNraGJtd3NuMTAybW8ydG1ocWRrcnpnZ3EifQ.OBiIAthOooYI26atHaVRlw`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to Geocode service!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location, Try another Search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
