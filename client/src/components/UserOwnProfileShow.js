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

  const getCurrentUserDetails = async () => {
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
    getCurrentUserDetails();
  }, []);

  return (
    <div className="background">
      <h1>Your Profile</h1>
      <UserProfileTile user={props.user} profile={profile} />
      <br />
      <h3 className="centered">
        <u>Not Shown Publicly</u>
      </h3>
      <div className="info-block">
        <p>
          <strong>Full Name: </strong> {profile.firstName} {profile.lastName}
        </p>
        <p>
          <strong>Email: </strong>
          {profile.email}{" "}
        </p>
      </div>
      <UserProfileForm user={props.user} profile={profile} setProfile={setProfile} />
    </div>
  );
};

export default UserOwnProfileShow;
