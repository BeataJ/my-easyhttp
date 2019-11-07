const http = new easyHTTP();

// // GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(posts);
//   }

// });

// GET Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/2', (err, post) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(post);
//   }

// });

// Create data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};

// Create Post request
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
  if(err) {
    console.log(err)
  } else {
    console.log(response);
  }

});
