import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Story from "./components/Story";
import Feed from "./components/Feed";
import Select from "./components/Select";
import Settings from "./components/Settings";

function App() {
  const [selectedTab, setselectedTab] = useState("Feed");
  return (
    <>
      <Header></Header>
      <Sidebar
        selectedTab={selectedTab}
        setselectedTab={setselectedTab}
      ></Sidebar>
      <div className="main">
        {/* {selectedTab === "Feed" ? <Feed></Feed> : <Story></Story>} */}
        <Select selectedTeb={selectedTab}></Select>
      </div>
    </>
  );
}

export default App;
