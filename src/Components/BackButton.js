import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="back-container"
      onClick={() => {
        navigate(-1);
      }}
    >
      <img
        style={{ cursor: "pointer" }}
        src="/back.png"
        width={20}
        height={20}
      />
      <p>Back</p>
    </div>
  );
};

export default BackButton;
