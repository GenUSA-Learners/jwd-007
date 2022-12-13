// A class for interacting with our https://dummyapi.io/ data
class API {
  constructor() {
    this._url = 'https://dummyapi.io/data/v1/post?limit=5'; // post endpoint limit 5
    this._app_id = '6147f7ef54f6a659ea3fb59c'; // had to signup for an app id key
    this._options = {
      headers: { 'app-id': this._app_id }, //// We have to add the credentials to the headers of the request
    };
    this._posts = []; // db store property for our posts
  }
  // getters for our properties
  get url() {
    return this._url;
  }
  get options() {
    return this._options;
  }
  get posts() {
    return this._posts;
  }

  // a method for prepopulating a snapshot of posts
  // using fetch to return some post test data
  // https://www.sitepoint.com/introduction-to-the-fetch-api/
  // https://developers.google.com/web/updates/2015/03/introduction-to-fetch

  async getInitialPosts() {
    // code goes here for fetching the initial posts with the url, and options arguments
    // then handle the returned Promise with .then(response=>response.json()) followed by
    // chaining .then(jsonRes=>{ // put more in here }) and .catch(err=>{})
  }

  getPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.posts) {
          resolve(this.posts);
        } else {
          reject(new Error(`Couldn't retrieve post data!`));
        }
      }, 1000);
    });
  }

  addPost(post) {
    return new Promise((resolve, reject) => {
      if (post) {
        // code goes here to add the new post onto the array of _posts

        console.log('Post was created!');
        setTimeout(() => {
          resolve(post);
        }, 500);
      } else {
        reject(new Error(`Something went wrong!`));
      }
    });
  }

  deletePost() {
    return new Promise((resolve, reject) => {
      //This is removing the last post from the post array
      const deletedPost = this._posts.pop();
      console.log('Last Post was deleted!');
      setTimeout(() => {
        // if there is a post to delete from
        // handle the successful Promise with the deletedPost value
        // else reject with a new Error("custom message")
        // constructor value
        if (deletedPost) {
          // code goes here
        } else {
          // code goes here
        }
      }, 500);
    });
  }
}
