const request  = require("request");

request

const geocodee = (address, callback) => {
    const url = 'https://geocode.maps.co/search?q=' + encodeURIComponent(address) + '&api_key=661e7061b85b8672218473yde04788e&limit=1';  

    request({ url, json: true }, (error,{body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
                location: body[0].display_name
            });
        } 
    });
};

module.exports = geocodee