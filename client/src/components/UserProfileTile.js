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

  const getTopicsOfInterest = (props) => {
    const allTopics = [
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
    ];
    const interests = [];
    for (let i = 0; i < allTopics.length; i++) {
      if (allTopics[i] === true) {
        switch (i) {
          case 0:
            interests.push("travel");
            break;
          case 1:
            interests.push("music");
            break;
          case 2:
            interests.push("travel");
            break;
          case 3:
            interests.push("careers");
            break;
          case 4:
            interests.push("sports");
            break;
          case 5:
            interests.push("relationships");
            break;
          case 6:
            interests.push("community");
            break;
          case 7:
            interests.push("technology");
            break;
          case 8:
            interests.push("fashion");
            break;
          case 9:
            interests.push("politics");
            break;
          case 10:
            interests.push("pets");
            break;
          case 11:
            interests.push("food");
            break;
          case 12:
            interests.push("movies");
            break;
        }
      }
    }
    return interests;
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
