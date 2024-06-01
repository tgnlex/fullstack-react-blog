import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
function Reactions() {
  return (
    <div id="reaction-buttons">
      <button id="like react-btn">
        Like <AiTwotoneLike /> <span style={{ marginLeft: 5 }}>2</span>
      </button>
      <button id="unlike react-btn">
        Dislike <AiTwotoneDislike />
        <span style={{marginLeft: 5}}>1</span>
      </button>
    </div>
  )
}

export {Reactions}