const http = new easyHTTP;

// // GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(posts);
//   }
  
// });

// GET Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', (err, post) => {
  if(err) {
    console.log(err)
  } else {
    console.log(post);
  }
  
});

