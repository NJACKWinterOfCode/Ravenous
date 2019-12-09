import React from "react";
import SocialFollow from "./SocialFollow";
import "./style.css";

function Footer() {
  return (
    <div className="App">
       <h2>Made with love by these talented <a href="https://github.com/NJACKWinterOfCode/Ravenous/graphs/contributors">individuals</a></h2>
      <br></br>
      <SocialFollow />
    </div>
  );
}

export default Footer