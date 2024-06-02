import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { postReaction } from "../../api/postReaction";
const handleReaction = (slug, type) => {
  postReaction(slug, type);   
}
function Reactions(slug) {
  return (
    <div id="reaction-buttons">
      <button 
        id="like react-btn"
        onClick={() => handleReaction(slug, "like")}
      >
        Like <AiTwotoneLike /> <span style={{ marginLeft: 5 }}>2</span>
      </button>
      <button 
        id="unlike react-btn"
        onClick={() => handleReaction(slug, "dislike")}
      >
        Dislike <AiTwotoneDislike />
        <span style={{marginLeft: 5}}>1</span>
      </button>
    </div>
  )
}

export {Reactions}