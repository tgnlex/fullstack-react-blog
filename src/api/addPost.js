import {navigate} from '';
const addPost = ({u_id, title, content, date}) => {
  fetch("http://localhost:4000/post/add", {
    method: "POST", 
    body: JSON.stringify({u_id, title, content, date}),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  .then((res) => res.json(res))
  .then((data) => {
    alert(data.message);
    navigate("/");
  })
  .catch((err) => {
    console.error(err);
    alert("Encountered an error...")
  })
}

export {addPost};