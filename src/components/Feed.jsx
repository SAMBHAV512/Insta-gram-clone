import { useState } from "react";
import "./Feed.css";
import me from "./Images/picofme.png";
import Imagesitem from "./Imagesitem";

const Feed = () => {
  return (
    <>
      <div className="home">
        <input type="search" id="search" placeholder="Sambhav Tiwari" />
        <div className="content-cont">
          <div className="feed-info">
            <img src={me} id="me-2" />
          </div>
          <div className="para">
            <h1>Sambhav Developer</h1>
            <p>
              Developer design <button className="msgbtn">Message</button>
            </p>
            <p>
              Hi there web-developer and Web-designer and passionate about work
              and habit to learn
            </p>
            <a href="#" id="myid">
              www.sambhav.com
            </a>
          </div>
          <div className="stories">
            <h5>Story</h5>
          </div>
        </div>

        <div className="btn-1">
          <button>Publication</button>
          <button>Instagram</button>
          <button>Enregistrements</button>
          <button>Indentifie(E)</button>
        </div>
        <div className="images">
          <Imagesitem></Imagesitem>
        </div>
      </div>
      )
    </>
  );
};
export default Feed;
