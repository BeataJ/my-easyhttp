const http = new easyHTTP;

// GET Posts
const posts = http.get('https://jsonplaceholder.typicode.com/posts', (posts) => {
  console.log(posts);
});

