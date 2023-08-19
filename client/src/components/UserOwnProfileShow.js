import React from "react";
import UserProfileForm from "./UserProfileForm";
import UserProfileTile from "./UserProfileTile";

const UserOwnProfileShow = (props) => {
  return (
    <>
      <h1>Your Profile</h1>
      <UserProfileTile />
      <hr />
      <UserProfileForm />
    </>
  );
};

export default UserOwnProfileShow;
