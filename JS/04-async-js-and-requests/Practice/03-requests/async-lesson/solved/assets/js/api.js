// A class for interacting with our https://dummyapi.io/ data
class API {
  constructor() {
    this._url = 'https://dummyapi.io/data/v1/post?limit=5'; // post endpoint limit 5
    this._app_id = '6147f7ef54f6a659ea3fb59c'; // had to signup for an app id key
    this._options = {
      headers: { 'app-id': this._app_id }, // we have to add the cred to the headers of the req
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
    try {
      const response = await fetch(this.url, this.options);
      const postData = await response.json();
      console.log('Retrieved Posts from API!');
      console.log(postData);
      this._posts = postData.data;
      return;
    } catch (err) {
      console.log(err);
    }
  }
  getPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.posts ? resolve(this.posts) : reject(new Error(`Couldn't retrieve post data!`));
      }, 1000);
    });
  }
  addPost(post) {
    return new Promise((resolve, reject) => {
      if (post) {
        this._posts.push(post);
        console.log('Post was created!');
        setTimeout(() => {
          resolve(post);
        }, 500);
      } else {
        reject(new Error(`Error: Couldn't post a note!`));
      }
    });
  }

  deletePost() {
    return new Promise((resolve, reject) => {
      const deletedPost = this._posts.pop();
      console.log('Last Post was deleted!');
      setTimeout(() => {
        deletedPost ? resolve(deletedPost) : reject(new Error(`Error: Couldn't delete a note!`));
      }, 500);
    });
  }
}
