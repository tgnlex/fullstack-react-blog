const handleLike = (posts, u_id, i) => {
  const validateLike = posts[i].likes.filter(
    (likes) => likes.u_id === u_id
  );
  if (validateLike.length === 0) {
    posts[i].likes.push({ u_id });
    return ({message: "Like Post: Success"});
  }
};

const handleDislike = (posts, u_id, i) => {
  const validateDislike = posts[i].dislikes.filter(
    (dislikes) => dislikes.u_id === u_id 
  );
  if (validateDislike.length === 0) {
    posts[i].dislikes.push({ u_id });
    return ({message: "Dislike Post: Success"})
  }
};


export {handleLike, handleDislike};