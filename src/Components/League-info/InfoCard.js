import React from "react";
import maleTeam from "../../Images/Photo/male.png";
import femaleTeam from "../../Images/Photo/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./infoCard.css";
import {
  faCalendarCheck,
  faFlag,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const InfoCard = ({ leagueDetails }) => {
  const {
    intFormedYear,
    strCountry,
    strGender,
    strLeague,
    strSport,
    strDescriptionEN,
    strDescriptionFR,
    strTwitter,
    strYoutube,
    strFacebook,
  } = leagueDetails;

  const fbUrl = strFacebook ? strFacebook : "www.facebook.com";
  const youTubeUrl = strYoutube ? strYoutube : "www.youtube.com/";
  const twitterUrl = strTwitter ? strTwitter : "www.twitter.com";

  return (
    <div>
      <div className="card m-auto bg-primary text-white ">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{strLeague}</h5>
              <p className="card-text">
                <FontAwesomeIcon icon={faCalendarCheck} /> Founded :{" "}
                {intFormedYear}
              </p>
              <p className="card-text">
                <FontAwesomeIcon icon={faFlag} /> Country : {strCountry}
              </p>
              <p className="card-text">
                <FontAwesomeIcon icon={faFutbol} /> Sports type : {strSport}
              </p>
              <p className="card-text">
                <FontAwesomeIcon icon={faMars} /> Gender : {strGender}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            {/*this code shows preloaded image of male ,then shows female pic based on condition. Alternative code is written below. 
             <img
              src={strGender === "Female" ? femaleTeam : maleTeam}
              alt="..."
              className="w-100 p-2"
            /> */}

            {(strGender === "Male" && (
              <img src={maleTeam} alt="" className="w-100 p-2" />
            )) ||
              (strGender === "Female" && (
                <img src={femaleTeam} alt="" className="w-100 p-2" />
              ))}
          </div>
        </div>
      </div>
      <div className="bg-light p-4">
        <p>{strDescriptionFR}</p>
        <p className="mt-2"> {strDescriptionEN}</p>
      </div>

      <div className="social-container container text-center">
        <h3>Social Follow</h3>

        <a
          href={`https://${youTubeUrl}`}
          className="youtube social"
          target="_blank"
          rel="noreferrer nofollow noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href={`https://${fbUrl}`}
          className="facebook social"
          target="_blank"
          rel="noreferrer nofollow noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href={`https://${twitterUrl}`}
          className="twitter social"
          target="_blank"
          rel="noreferrer nofollow noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default InfoCard;
