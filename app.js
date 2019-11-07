const http = new easyHTTP;

// GET Posts
const posts = http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
  console.log(posts);
});

