// const callApi = () => {
//   // The url to hit the API with the correct endpoints
//   const requestUrl = 'https://api.thecatapi.com/v1/images/search';

//   // fetch request gets a list of all the repos for the node.js organization
//   fetch(requestUrl)
//     // .then that accepts the response object from fetch() and returns a JSON object
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };

// callApi();


//


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'hxz7Q1QSA9mshuJSi7yRUIzHCWZRp1MXf5OjsnFDEivrcsprCt',
      'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
    },
  };

  fetch(
    'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT',
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
