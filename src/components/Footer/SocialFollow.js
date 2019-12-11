import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGratipay
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3>See source code at<a href="https://github.com/rajat2502/Ravenous" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a></h3>
      <br></br>
      <h2>Made with <FontAwesomeIcon icon={faGratipay} size="x"/> love by these talented <a className ="link" href="https://github.com/NJACKWinterOfCode/Ravenous/graphs/contributors">individuals</a></h2>
    </div>
  );
}
