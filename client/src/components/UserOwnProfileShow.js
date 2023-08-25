import React, { useState, useEffect } from "react";
import UserProfileForm from "./UserProfileForm";
import UserProfileTile from "./UserProfileTile";

const UserOwnProfileShow = (props) => {
  const [profile, setProfile] = useState({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    nativeLanguage: "",
    englishLevel: "",
    ageRange: "",
    location: "",
    introduction: "",
    id: "",
  });

  const getFullNameAndEmail = async () => {
    try {
      const response = await fetch(`/api/v1/user-sessions/current`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setProfile(responseBody);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };
  useEffect(() => {
    getFullNameAndEmail();
  }, []);

  return (
    <div className="background">
      <h1>Your Profile</h1>
      <UserProfileTile user={props.user} profile={profile} />
      <h2>Not Shown Publicly</h2>
      <div className="info-block">
        <p>
          Full Name: {profile.firstName} {profile.lastName}
        </p>
        <p>Email: {profile.email} </p>
      </div>
      <UserProfileForm user={props.user} profile={profile} />
    </div>
  );
};

export default UserOwnProfileShow;
