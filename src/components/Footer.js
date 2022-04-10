import * as React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "#4592c4",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          marginTop: "5px",
          width: "20%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="https://www.linkedin.com/in/ameer-alaswad-27219a207/">
          <img
            style={{ height: "40px" }}
            src="./icons/linkedIn.png"
            alt="linkedIn"
          />
        </a>{" "}
        <a href="https://github.com/Ameer-Alaswad/">
          <img
            style={{ height: "40px" }}
            src="./icons/github.png"
            alt="linkedIn"
          />
        </a>{" "}
        <a href="https://ameer-alaswad.netlify.app/">
          <img
            style={{ height: "40px" }}
            src="./icons/portfolio.png"
            alt="linkedIn"
          />
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
