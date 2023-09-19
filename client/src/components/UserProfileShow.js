import React, { useState, useEffect } from "react";
import UserProfileTile from "./UserProfileTile";

const UserProfileShow = (props) => {
  const [profile, setProfile] = useState({
    username: "",
    firstName: "",
    lastName: "",
    nativeLanguage: "",
    englishLevel: "",
    ageRange: "",
    location: "",
    introduction: "",
    travel: "",
    music: "",
    careers: "",
    sports: "",
    relationships: "",
    community: "",
    technology: "",
    fashion: "",
    politics: "",
    pets: "",
    food: "",
    movies: "",
    id: "",
  });

  const userId = props.match.params.id;

  const getProfile = async () => {
    try {
      const response = await fetch(`/api/v1/users/${userId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setProfile(responseBody.profile);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h1>About This User:</h1>
      <UserProfileTile user={profile} />
    </div>
  );
};

export default UserProfileShow;
