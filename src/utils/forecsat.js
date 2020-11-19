const request = require("request");

const forecast = (Latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=cc39eeff26f78cf3fc6512c9d511a54a&query=${longitude},${Latitude}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service ", undefined);
    } else if (response.body.error) {
      callback("unable to find location ", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}.It is currently ${response.body.current.temperature} degree out There is a ${response.body.current.feelslike} % chance of rain`
      );
    }
  });
};

module.exports = forecast;
