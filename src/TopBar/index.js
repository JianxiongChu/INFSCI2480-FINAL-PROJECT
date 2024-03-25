import logo from "../assets/logo.png";
import userIcon from "../assets/user-icon.png";
import "./style.css";

const TopBar = () => {
  return (
    <header>
      <div>
        <img src={logo} className="logo" alt="logo" />
        <h1>InkedIn</h1>
      </div>
      <nav>
        <div className="nav-item">Home</div>
        <div className="nav-item">About us</div>
        <div className="user-badge">
          <img src={userIcon} className="user-icon" alt="user icon" />
          User Name
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
