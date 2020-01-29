console.log("Hello World");

const say = require ('say');

const axios = require('axios');
const apiURL = "api.openweathermap.org/data/2.5/weather?q=";
const city ='phuket';
const appID ="7430b7e61b2cbe834292e06e2cf07aa2"
const url = `http://${apiURL}${city}&appid=${appID}`;

console.log(url);
axios.get(url);

//promise

  sayWeather();

  async function sayWeather(){
      const response = await axios.get(url);
      console.log(response.data);
      say.speak(`Right now the weather in ${city} is currently ${response.data.weather[0].description}`)
      console.log("Finished");

  }



  //old function

// Make a request for a user with a given ID
// axios.get(url)
// .then(function (response) {
//   console.log(response.data);
//   say.speak(`Right now the weather in ${city} is currently ${response.data.weather[0].description}`)
//   console.log("Finished");
// })
// .catch(function (error) {
//   console.log(error);
// });

//end