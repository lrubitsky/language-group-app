import React from "react";

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
  } = props.user;
  return (
    <div className="info-block">
      <p>
        Name: {firstName} {lastName}
      </p>
      <p>username: {username}</p>
      <p>native language: {nativeLanguage}</p>
      <p>age: {ageRange}</p>
      <p>level: {englishLevel}</p>
      <p>location: {location}</p>
      <p>introduction: {introduction}</p>
    </div>
  );
};

export default UserProfileTile;
