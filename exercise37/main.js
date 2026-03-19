const addPostBtn = document.querySelector(".addPostBtn");
const postDesc = document.querySelector(".postDesc");
const postImage = document.querySelector(".postImage");
const postTitle = document.querySelector(".postTitle");
const postsEl = document.querySelector(".posts");
let posts = [];

// functions
const addPost = (e) => {
  e.preventDefault();
  const id = Date.now();
  const title = postTitle.value.trim();
  const image = postImage.value.trim();
  const description = postDesc.value.trim();
  const post = {
    id,
    title,
    image,
    description,
  };
  // push to posts array
  posts.push(post);
  // pass display function
  displayPost(posts);
  // save to local storage
  saveToLocalStorage(posts);
};

const displayPost = (posts) => {
  postsEl.innerHTML = "";
  posts?.map((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
       
            <h3 class="displayTitle">${post.title}</h3>
            <div class="postImage">
              <img
                class="displayImage"
                src=${post.image}
                alt=""
              />
            </div>
            <h3 class="displayDescription">${post.description}</h3>
            <div class="btns">
              <button class="editBtn">Edit</button>
              <button class="removeBtn">Remove</button>
            </div>
  

    `;

    postsEl.appendChild(postEl);
    const editBtn = postEl.querySelector(".editBtn");
    const removeBtn = postEl.querySelector(".removeBtn");

    const title = postEl.querySelector(".displayTitle");
    const image = postEl.querySelector(".displayImage");
    const description = postEl.querySelector(".displayDescription");

    editBtn.addEventListener("click", () => {
      editHandler(post, title, image, description);
    });
    removeBtn.addEventListener("click", () => {
      deleteHandler(post, postEl);
    });
  });
};

// edit function

const editHandler = (pst, title, image, description) => {
  // load from local storage
  const storedPosts = loadFromLocalStorage();
  const foundPost = storedPosts.find((post) => post.id === pst.id);

  const editedPostTitle = prompt("Enter the title ", foundPost.title);
  const editedPostImage = prompt("Enter the image url ", foundPost.image);
  const editedPostDesc = prompt(
    "Enter the description post!",
    foundPost.description,
  );

  //  update stored data
  foundPost.title = editedPostTitle;
  foundPost.image = editedPostImage;
  foundPost.description = editedPostDesc;

  // save updated data
  saveToLocalStorage(storedPosts);

  // save dom data
  title.textContent = editedPostTitle;
  image.src = editedPostImage;
  description.textContent = editedPostDesc;

  // save array
  posts = storedPosts;
};

// delete function

const deleteHandler = (pst, postEl) => {
  // load local storage
  const storedPosts = loadFromLocalStorage();
  const restPosts = storedPosts.filter((post) => post.id !== pst.id);
  console.log(restPosts);
  // save to local storage
  saveToLocalStorage(restPosts);

  // save to dom

  postEl.remove();
};

// save to localStorage
const saveToLocalStorage = (posts) => {
  return localStorage.setItem("posts", JSON.stringify(posts));
};

// load from localStorage
const loadFromLocalStorage = () => {
  const posts = localStorage.getItem("posts");
  return JSON.parse(posts);
};

// events
addPostBtn.addEventListener("click", addPost);
window.addEventListener("DOMContentLoaded", () => {
  const getPosts = loadFromLocalStorage();
  // pass to display function
  displayPost(getPosts);

  // pass posts array
  if (getPosts) {
    posts = getPosts;
  }
});
