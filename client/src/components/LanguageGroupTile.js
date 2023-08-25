import React from "react";
import { Link } from "react-router-dom";

const LanguageGroupsTile = (props) => {
  const { title, location, id, creator, participants } = props.languageGroup;

  return (
    <div className="info-block">
      <h3>{title}</h3>
      <ul>{location}</ul>
      <Link to={`/language-groups/${id}`} className="info-button">
        See More Details
      </Link>
    </div>
  );
};

export default LanguageGroupsTile;
