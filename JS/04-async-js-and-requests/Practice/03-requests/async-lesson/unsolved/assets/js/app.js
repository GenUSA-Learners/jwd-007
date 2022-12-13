const api = new API();

// This is a utility function to print individual posts to the console
const printPostRow = (post) => {
  console.log(`Left By: ${post.owner.firstName} ${post.owner.lastName}`);
  console.log(`Message: ${post.text}`);
};

const start = async () => {
  await api.getInitialPosts();

  // api.getPosts() inside the callback of the successful aforementioned
  // call then if successful log '-----------------', loop thru the resolved
  // posts results and run printPostRow(post) for each one
  // log another '-----------------' after the loop and catch any errors
};

const addANewPost = () => {
  const firstInput = prompt('What is your first name?');
  const lastInput = prompt('What is your last name?');
  const postInput = prompt('What would you like to post?');
  if (firstInput && lastInput && postInput) {
    // code goes below for calling the .addPost() method on our api
    // instance passing in the following data as an argument:
    /*  
      {
        owner: {
          firstName: firstInput,
          lastName: lastInput,
        },
        text: postInput,
      }
    */
    // log the newPost, then call
    // api.getPosts() inside the callback of the successful aforementioned
    // call then if successful log '-----------------', loop thru the resolved
    // posts results and run printPostRow(post) for each one
    // log another '-----------------' after the loop and catch any errors
  }
};

const deleteAPost = () => {
  // code goes below to call the api delettePost method then call
  // api.getPosts() inside the callback of the successful aforementioned
  // call then if successful log '-----------------', loop thru the resolved
  // posts results and run printPostRow(post) for each one
  // log another '-----------------' after the loop and catch any errors
};

// NO NEED TO CHANGE ANYTHING BELOW BUT NO HARM IN GOOGLING SOME OF IT
// Don't worry about the statements below, we will go more into how these work on Monday
// These trigger the functions when the button is clicked in the HTML
document.querySelector('span:nth-child(1)').addEventListener('click', addANewPost);
document.querySelector('span:nth-child(2)').addEventListener('click', deleteAPost);

// starting our app
start();
