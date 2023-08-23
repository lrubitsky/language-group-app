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

  const currentUserId = props.user.id;

  // const getOwnProfile = async () => {
  //   try {
  //     const response = await fetch(`/api/v1/users/${currentUserId}`);
  //     if (!response.ok) {
  //       const errorMessage = `${response.status} (${response.statusText})`;
  //       const error = new Error(errorMessage);
  //       throw error;
  //     }
  //     const responseBody = await response.json();
  //     console.log("RESPONSE BODY ", responseBody);
  //     setProfile(responseBody.profile);
  //   } catch (err) {
  //     console.error(`Error in Fetch: ${err.message}`);
  //   }
  // };
  // useEffect(() => {
  //   getOwnProfile();
  // }, []);

  return (
    <div className="background">
      <h1>Your Profile</h1>
      <UserProfileTile user={props.user} profile={profile} />
      <hr />
      <UserProfileForm user={props.user} profile={profile} />
    </div>
  );
};

export default UserOwnProfileShow;
