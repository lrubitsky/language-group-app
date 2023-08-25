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
    email,
    imageUrl,
  } = props.user;
  console.log("Hash");

  return (
    <div className="info-block grid-container">
      <h2>
        {firstName} {lastName}
      </h2>
      <img src={imageUrl} />

      <p>{introduction}</p>
      <div className="grid-x grid-margin-x">
        <div className="cell medium-6">
          <ul>
            <strong>Username</strong>
          </ul>
          <ul>
            <strong>Native Language</strong>
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
        </div>

        <div className="cell medium-6">
          <ul>{username}</ul>
          <ul>{location}</ul>
          <ul>{ageRange}</ul>
          <ul>{nativeLanguage}</ul>
          <ul>{englishLevel}</ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfileTile;
