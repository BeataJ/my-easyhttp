const http = new easyHTTP;

// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
  if(err) {
    console.log(err)
  } else {
    console.log(posts);
  }
  
});

