import React from "react";
import "./banner.css";
const Banner = ({ banner, children }) => {
  const bannerUrl = banner
    ? banner
    : "https://st2.depositphotos.com/3725083/5374/i/450/depositphotos_53743487-stock-photo-football-stadium.jpg";

  return (
    <div className="banner-div">
      <div
        className="text-white  banner"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      ></div>
      <div className="text-center children">{children}</div>
    </div>
  );
};

export default Banner;
