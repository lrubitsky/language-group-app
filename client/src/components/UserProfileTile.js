import React from "react";
import md5 from "blueimp-md5";
import Gravatar from "react-gravatar";

const UserProfileTile = (props) => {
  const {
    username,
    firstName,
    lastName,
    nativeLanguage,
    englishLevel,
    ageRange,
    location,
    introduction,
    imageUrl,
    travel,
    music,
    careers,
    sports,
    relationships,
    community,
    technology,
    fashion,
    politics,
    pets,
    food,
    movies,
  } = props.user;
  console.log("Profile in UserProfileTile:", props.profile);

  const getTopicsOfInterest = (props) => {
    const interests = [
      { name: "travel", value: travel },
      { name: "music", value: music },
      { name: "careers", value: careers },
      { name: "sports", value: sports },
      { name: "relationships", value: relationships },
      { name: "community", value: community },
      { name: "technology", value: technology },
      { name: "fashion", value: fashion },
      { name: "politics", value: politics },
      { name: "pets", value: pets },
      { name: "food", value: food },
      { name: "movies", value: movies },
    ];

    const selectedInterests = interests
      .filter((interest) => interest.value === true)
      .map((interest) => interest.name);
    return selectedInterests;
  };

  return (
    <div className="user-info grid-container">
      <h2>
        {firstName} {lastName}
      </h2>
      <img src={imageUrl} alt={`${firstName}'s profile`} />

      <p className="introduction">{introduction}</p>
      <div className="grid-x grid-margin-x">
        <div className="cell medium-6">
          <ul className="no-wrap-list">
            <ul>
              <strong>Username</strong>
            </ul>
            <ul>
              <strong>Age</strong>
            </ul>
            <ul>
              <strong>Level of English</strong>
            </ul>
            <ul>
              <strong>Location</strong>
            </ul>
            <ul>
              <strong>Native Language</strong>
            </ul>
            <ul>
              <strong>Interests</strong>
            </ul>
          </ul>
        </div>

        <div className="cell medium-6">
          <ul>
            <ul>{username}</ul>
            <ul>{ageRange}</ul>
            <ul>{englishLevel}</ul>
            <ul>{location}</ul>
            <ul>{nativeLanguage}</ul>
            <ul>{getTopicsOfInterest().join(", ")}</ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfileTile;
