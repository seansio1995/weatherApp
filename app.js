const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
var fahrenheitToCelsius = require('fahrenheit-to-celsius');

var prettyJSONStringify = require('pretty-json-stringify');

const argv = yargs
  .options({
    addr: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


geocode.geocodeAddress(argv.address,(err,results)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(results.address);
      weather.getWeather(results.latitude, results.longitude, (err, weatherResults) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`It's currently ${fahrenheitToCelsius(weatherResults.temperature)}. It feels like ${fahrenheitToCelsius(weatherResults.apparentTemperature)}.`);
      }
    });
    }
});
