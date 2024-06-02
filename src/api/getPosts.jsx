
const fetchAllPosts = (setLoading, setPosts) => {
  fetch("https://localhost:4000/api/posts")
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setPosts(data.posts);
    })
    .catch((err) => console.error(err));
}

export {fetchAllPosts};