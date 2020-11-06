const request = require('request');



// request(catURL, (error, response, body) => {

//   if (!error) {

//     const data = JSON.parse(body);
//     const page = data[0];


//     if (page !== undefined) {
//       if (!error) {
//         if (response.statusCode === 200) {
//           const description = data[0].description;
//           console.log(description);
//         } else {
//           console.log(`Error: ${response.statusCode}`);
//         }
//       }
//     } else {
//       console.log('Breed not found! :(');
//     }

//   } else {
//     console.log(error);
//   }

// });

const fetchBreedDescription = (breedName, callback) => {
  const catURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(catURL, (error, response, body) => {

    if (error) {
      callback(error, null);
    }


    const data = JSON.parse(body);
    const page = data[0];


    if (page) {
      callback(null, data[0].description);
    } else {
      callback(error, null);
    }

  });

};

module.exports = { fetchBreedDescription };