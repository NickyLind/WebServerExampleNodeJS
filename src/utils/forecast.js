const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=32169b2fd90037874dc5d0a0e97de9ad&query=${lat},${long}&units=f`

  request( { url, json: true}, (error, { body }) => {
    if(error) {
      callback(`An error has occured: ${error.code}`)
    } else if (body.success === false) {
      callback(`There was an error \n code: ${body.error.info}`)
    } else {
      const data = body.current
      callback(undefined, {
        data: `The weather is ${data.weather_descriptions[0].toLowerCase()}. It is currently ${data.temperature}. It feels like ${data.feelslike}`
      });
    };
  });
};

module.exports = forecast;