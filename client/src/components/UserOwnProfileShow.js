import React from "react";
import UserProfileForm from "./UserProfileForm";
import UserProfileTile from "./UserProfileTile";

const UserOwnProfileShow = (props) => {
  return (
    <div className="background">
      <h1>Your Profile</h1>
      <UserProfileTile />
      <hr />
      <UserProfileForm />
    </div>
  );
};

export default UserOwnProfileShow;
