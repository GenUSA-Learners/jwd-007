const callApi = () => {
  // Insert the API url to get a list of your repositories
  const requestUrl = 'https://api.github.com/users/ocskier/repos';

  const options = {
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    }
  }

  // Fill in the rest of the function body by using fetch() and calling the requestUrl and using .then to return the response object and console log the data.

  // Remember to use the previous example and the link in the README file to help you structure your request!!

  fetch(requestUrl, )
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });
};

callApi();