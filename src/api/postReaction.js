const postReaction = (slug, type) => {
  fetch("https://localhost:4000/blog/reaction", {
    method: "POST", 
    body: JSON.stringify({slug, type, u_id: localStorage.getItem("u_id") }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json(res))
    .then((data) => alert(data.message))
    .catch((err) => console.error(err));
};

export {postReaction};