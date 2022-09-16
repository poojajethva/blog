import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Post from "./components/Post";

function App() {

  return (
    <div className="app-wrap">
      <Router>
        <Routes>
          <Route path="/post/:postid" element={<Post />} />
          <Route path="/" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
