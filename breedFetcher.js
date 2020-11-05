const request = require('request');
const catURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + process.argv.slice(2);



request(catURL, (error, response, body) => {

  if (!error) {

    const page = data[0];
    const data = JSON.parse(body);

      
    if (page !== undefined) {
      if (!error) {
        if (response.statusCode === 200) {
          const description = data[0].description;
          console.log(description);
        } else {
          console.log(`Error: ${response.statusCode}`);
        }
      }
    } else {
      console.log('Breed not found! :(');
    }

  } else {
    console.log(error);
  }
  
});