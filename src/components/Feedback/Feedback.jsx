import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [likes, setLikes] = useState(0);

  const countLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="feedback-container">
      <div className="likes-count">{likes}</div>
      <Button name="Like" type="button" onClick={countLikes} />
    </div>
  );
}
export default Feedback;
