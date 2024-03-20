import me from "./Images/me-1.jpeg";
import me1 from "./Images/me-2.jpeg";
import me2 from "./Images/me-3.jpeg";
import me3 from "./Images/me-4.jpeg";
import me4 from "./Images/me-5.jpeg";
import "./Story.css";
const Story = () => {
  return (
    <>
      <div className="story-container">
        <div className="story">
          <img src={me} className="story-img" alt="" />
          <img src={me1} className="story-img" alt="" />
          <img src={me2} className="story-img" alt="" />
          <img src={me3} className="story-img" alt="" />
          <img src={me4} className="story-img" alt="" />
          <img src={me} className="story-img" alt="" />
          <img src={me1} className="story-img" alt="" />
          <img src={me2} className="story-img" alt="" />
          <img src={me3} className="story-img" alt="" />
          <img src={me4} className="story-img" alt="" />
        </div>
        <br />
        <hr />
        <div className="post-container">
          <div className="posts">
            <div className="post-nav">
              <h1>Instagram</h1>
              <button id="save-btn">Saved this post</button>
            </div>
            <img src={me3} id="post-1" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Story;
