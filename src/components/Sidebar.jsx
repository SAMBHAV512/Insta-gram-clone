import "./Sidebar.css";
import me from "./Images/picofme.png";
const Sidebar = ({ selectedTab, setselectedTab }) => {
  return (
    <>
      <div className="sidebar">
        <span>
          <h1>Instagram</h1>
        </span>
        <img src={me} id="me" />
        <h3>Sambhav512</h3>
        <p id="info">Web-designer, web-developer</p>
        <div className="count">
          <div className="followinfo">
            <h3>62</h3>
            <p>Post</p>
          </div>
          <div className="followinfo">
            <h3>213</h3>
            <p>Followers</p>
          </div>
          <div className="followinfo">
            <h3>283</h3>
            <p>following</p>
          </div>
        </div>
        <div className="buttons">
          <button
            className={` btn ${selectedTab === "Feed" && "active"}`}
            id="feed"
            onClick={() => {
              setselectedTab("Feed");
            }}
          >
            Feed
          </button>
          <button
            className={`btn ${selectedTab === "Story" && "active"}`}
            id="story"
            onClick={() => {
              setselectedTab("Story");
            }}
          >
            Story
          </button>
          <button
            className={`btn ${selectedTab === "Settings" && "active"}`}
            onClick={() => {
              setselectedTab("Settings");
            }}
          >
            Settings
          </button>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
