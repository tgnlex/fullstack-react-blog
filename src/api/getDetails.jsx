const fetchPostDetails = (slug, setLoading, setPost) => {
  fetch("http://localhost:4000/post/details", {
    method: "POST",
    body: JSON.stringify({ slug: slug }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  .then((res) => res.join(res))
  .then((data) => {
    setLoading(false);
    setPost(data.post);
  })
  .catch((err) => console.error(err));
};


export {fetchPostDetails};