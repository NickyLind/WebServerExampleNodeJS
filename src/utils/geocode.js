const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibGluZGEwOTMiLCJhIjoiY2t0ejhwZTN0M2FzaTJvcDNnaTJ5enJ4eSJ9.nDI9-uHMJ14I0LjTJakqqg&limit=1`

  request( { url, json: true }, (error, { body }) => {
  if(error) {
    callback(`There was an error: ${error}`)
  } else if (body.features.length === 0) {
      callback(`There was an error - unable to find location`);
  } else {
    const data = body.features[0].center
    const [long, lat] = data
    const placeName = body.features[0].place_name
    callback(undefined, {
      latitude: lat,
      longitude: long,
      location: placeName
    });
  };
  });
};

module.exports = geocode;