import React from "react";
import LeetCode from "../../assests/leetcode.svg";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/Sauvic016"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/sauvicpaulchy/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://leetcode.com/Sauvic_PC/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={LeetCode}
          alt="abc"
          style={{ height: "24px", width: "24px" }}
        />
      </a>
    </div>
  );
};

export default Social;
