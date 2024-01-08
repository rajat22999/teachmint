import { useNavigate } from "react-router-dom";
import CountryDropdown from "./CountryDropdown";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container container">
      <div
        onClick={() => {
          navigate(`/`);
        }}
        className="logo-block"
      >
        <img src="/logo.svg" width={192} height={36} />
      </div>
      <div className="logIn-block">
        <CountryDropdown />
        <button>LogIn</button>
      </div>
    </div>
  );
};

export default Header;
