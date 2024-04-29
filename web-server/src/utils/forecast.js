const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=364fcfa188bc1b4337a5eb72ac985fcc`;
  
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, " Todays weather discription is " +
                   body.weather[0].description +
                  " ...Minimum temperature is " +
                 body.main.temp_min +
                  " Fahrenheit " +
                 " ...Maximum temperature is " +
                  body.main.temp_max +
                 " Fahrenheit." )
        }
    })
}

module.exports = forecast