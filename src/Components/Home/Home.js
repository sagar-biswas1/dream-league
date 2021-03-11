import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import LeagueCard from "../League-info/LeagueCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [allLeagues, SetAllLeagues] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
      .then((res) => res.json())
      .then((data) => SetAllLeagues(data.leagues.slice(150, 232)));
  }, []);

  return (
    <div>
      <Banner>
        <p
          className="fw-bold fs-4"
          style={{
            color: "white",
            padding: "10px",
            borderRadius: "10%",
            backgroundColor: "rgb(0 0 0 / 40%)",
          }}
        >
          <FontAwesomeIcon icon={faTrophy} style={{ color: "goldenrod" }} />{" "}
          Dream League
        </p>
      </Banner>

      <div className="container mt-3 row row-cols-1 row-cols-md-3 g-4 m-auto">
        {allLeagues.length === 0 ? (
          <div
            className="spinner-grow text-white m-auto "
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className=" p-5">Loading...</span>
          </div>
        ) : (
          allLeagues.map((league) => (
            <LeagueCard league={league} key={league.idLeague} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
