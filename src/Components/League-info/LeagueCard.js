import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LeagueCard = ({ league }) => {
  const [badge, setBadge] = useState("");

  const { strLeague, strSport, idLeague } = league;

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    )
      .then((res) => res.json())
      .then((data) => {
        let badge = data.leagues[0].strBadge;
        badge ? setBadge(badge) : setBadge("");
      });
  }, [idLeague]);

  return (
    <div className="col">
      <div className="card h-100" style={{ backgroundColor: "#eff7ff" }}>
        {badge.length === 0 ? (
          <div
            className="spinner-border text-primary m-auto"
            role="status"
          ></div>
        ) : (
          <img src={badge} className="card-img-top w-50 m-auto" alt="..." />
        )}

        <div className="card-body text-center">
          <h5 className="card-title">{strLeague}</h5>
          <p className="card-text">Sports-type : {strSport}</p>
          <Link to={`/league/${idLeague}`}>
            <button className="btn btn-info w-50 m-3 ">
              Explore <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
