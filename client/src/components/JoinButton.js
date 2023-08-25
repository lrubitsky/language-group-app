import React, { useState } from "react";

const JoinButton = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (props.userIsInGroup) {
      props.leaveGroup();
    } else {
      props.joinGroup();
    }
  };

  return (
    <div>
      <input
        type="button"
        value={props.userIsInGroup ? "Leave Group" : "Join Group"}
        onClick={handleClick}
        className="join-button"
      />
    </div>
  );
};

export default JoinButton;
