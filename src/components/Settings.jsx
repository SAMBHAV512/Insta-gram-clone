import { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [isActive, setActive] = useState(false);

  const handleclick = (event) => {
    setActive((current = !current));
  };
  return (
    <>
      <div className="container">
        <input type="search" placeholder="Select settings" id="search"></input>
        <div className="main-input">
          <p>Dark Mode</p>

          <div className="btn">
            <button
              className={isActive ? "sidebar" : "dark"}
              onClick={handleclick}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
