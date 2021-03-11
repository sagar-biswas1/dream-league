import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark p-3 text-white mt-5 text-center">
        <div className="container-fluid">
          <FontAwesomeIcon icon={faTrophy} />
          All rights reserved @ dream-league.com
        </div>
      </footer>
    </>
  );
};

export default Footer;
