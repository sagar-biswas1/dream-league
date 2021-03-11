import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import InfoCard from "./InfoCard";

const LeagueDetails = () => {
  const [leagueDetails, setLeagueDetails] = useState({});

  const { leagueID } = useParams();

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueDetails(data.leagues[0]));
  }, [leagueID]);

  const logo = leagueDetails?.strLogo
    ? leagueDetails.strLogo
    : leagueDetails.strBadge;

  return (
    <div>
      <Banner banner={leagueDetails.strBanner}>
        <img src={logo} alt="" className="w-100 m-auto" />
      </Banner>
      <div className="container mt-4">
        <InfoCard leagueDetails={leagueDetails} />
      </div>
    </div>
  );
};

export default LeagueDetails;
