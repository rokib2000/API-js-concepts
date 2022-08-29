function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    console.log(post);
    postDiv.innerHTML = `
      <h4>User- ${post.userId}</h4>
      <h5>Post tittle -  ${post.title}</h5>
      <p>Post Dis - ${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  }
}

loadPosts();
