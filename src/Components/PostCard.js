import { useRef, useState } from "react";
import PopUp from "./PopUp";
import { useOutsideClick } from "../general";

const PostCard = ({ data, onPopUpClick = () => {} }) => {
  const [isPopUp, setPopUp] = useState(false);
  const popUpRef = useRef(null);
  useOutsideClick(popUpRef, () => {
    setPopUp(false);
    document.body.classList.remove("popup-open");
  });
  return (
    <>
      <div
        ref={popUpRef}
        className="post-card"
        onClick={() => {
          setPopUp(true);
          document.body.classList.add("popup-open");
        }}
      >
        <img src="/banners/banner.jpg" width="100%" height="140px" />
        <div className="content">
          <h3>{data?.title}</h3>
          <p>{data?.body}</p>
        </div>
      </div>
      {isPopUp && <PopUp userData={data} />}
    </>
  );
};
export default PostCard;
