import React from "react";
import { Link } from "react-router-dom";

const LanguageGroupsTile = (props) => {
  const { topic, location, englishLevel, minMembers, maxMembers, id, creator } =
    props.languageGroup;
  console.log(creator);
  console.log("TOPIC IS ", topic);

  return (
    <div className="languageGroupTile">
      <h3>
        {creator.firstName} want to talk about <strong>{topic}</strong>!
      </h3>
      <ul>
        Where? <strong>{location}</strong>
      </ul>
      <ul>
        For {minMembers} - {maxMembers} people | English level: {englishLevel}
      </ul>
      <Link to={`/language-groups/${id}`}>See More Details</Link>
    </div>
  );
};

export default LanguageGroupsTile;
