import React from "react";
import "./App.scss";
  
import Header from "./components/header/Header"
import Posts from "./components/Posts/Posts";
  
const App = () => {
  return (
    <div>
      <Header />
      <Posts />
    </div>
  );
};
  
export default App;