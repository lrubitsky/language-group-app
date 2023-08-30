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
  } = props.user;

  return (
    <div className="user-info grid-container">
      <h2>
        {firstName} {lastName}
      </h2>
      <img src={imageUrl} />

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
          </ul>
        </div>

        <div className="cell medium-6">
          <ul>
            <ul>{username}</ul>
            <ul>{ageRange}</ul>
            <ul>{englishLevel}</ul>
            <ul>{location}</ul>
            <ul>{nativeLanguage}</ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfileTile;
