import * as React from "react";
const containerOfLinksContainer = {
  height: "50px",
  backgroundColor: "#4592c4",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
};
const linksContainer = {
  marginTop: "5px",
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const linksImageStyle = { height: "40px" };
const Footer = () => {
  return (
    <div style={containerOfLinksContainer}>
      <div style={linksContainer}>
        <a href="https://www.linkedin.com/in/ameer-alaswad-27219a207/">
          <img
            style={linksImageStyle}
            src="./icons/linkedIn.png"
            alt="linkedIn"
          />
        </a>{" "}
        <a href="https://github.com/Ameer-Alaswad/">
          <img
            style={linksImageStyle}
            src="./icons/github.png"
            alt="linkedIn"
          />
        </a>{" "}
        <a href="https://ameer-alaswad.netlify.app/">
          <img
            style={linksImageStyle}
            src="./icons/portfolio.png"
            alt="linkedIn"
            s
          />
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
