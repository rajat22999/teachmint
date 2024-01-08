import PostCard from "./PostCard";

const PopUp = ({ userData }) => {
  return (
    <div className="popup-container">
      <PostCard data={userData} />
    </div>
  );
};
export default PopUp;
