import React, { useState } from "react";

import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors";

const UserProfileForm = (props) => {
  const [profileUpdate, setProfileUpdate] = useState({});

  const [errors, setErrors] = useState([]);

  const currentUserId = props.user.id;

  const updateProfile = async () => {
    try {
      const response = await fetch(`/api/v1/users/${currentUserId}`, {
        method: "PATCH",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(profileUpdate),
      });
      console.log("RESPONSE BODY, ", response.body);

      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          console.log("Validation Errors:", body);
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status}(${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const body = await response.json();
        console.log("The patch was successful", body);
        window.location.reload();
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleChange = (event) => {
    const targetInput = event.currentTarget;
    const name = targetInput.name;
    const value = targetInput.value;

    setProfileUpdate((prevProfileUpdate) => ({
      ...prevProfileUpdate,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile();
    window.location.reload(true);
    window.scrollTo(0, 0);
  };

  const englishLevels = ["", "low", "intermediate", "high"];
  const levelOptions = englishLevels.map((level) => {
    return (
      <option key={level} value={level}>
        {level}
      </option>
    );
  });

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Update Your Profile</h2>
      <ErrorList errors={errors} />
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-6">
            <label htmlFor="firstName">
              First Name
              <input
                id="firstName"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={profileUpdate.firstName}
              />
            </label>
          </div>
          <div className="cell medium-6">
            <label htmlFor="nativeLanguage">
              Native Language
              <input
                id="nativeLanguage"
                type="text"
                name="nativeLanguage"
                onChange={handleChange}
                value={profileUpdate.nativeLanguage}
              />
            </label>
          </div>
          <div className="cell medium-6">
            <label htmlFor="lastName">
              Last Name
              <input
                id="lastName"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={profileUpdate.lastName}
              />
            </label>
          </div>
          <div className="cell medium-6">
            <label htmlFor="englishLevel">
              English Level
              <select
                id="englishLevel"
                name="englishLevel"
                onChange={handleChange}
                value={profileUpdate.englishLevel}
              >
                {levelOptions}
              </select>
            </label>
          </div>
          <div className="cell medium-6">
            <label htmlFor="email">
              Email
              <input
                id="email"
                type="text"
                name="email"
                onChange={handleChange}
                value={profileUpdate.email}
              />
            </label>
          </div>
          <div className="cell medium-6">
            <label htmlFor="location">
              Location
              <input
                id="location"
                type="text"
                name="location"
                onChange={handleChange}
                value={profileUpdate.location}
              />
            </label>
          </div>
          <div className="cell medium-6">
            <label htmlFor="ageRange">
              Age
              <input
                id="ageRange"
                type="text"
                name="ageRange"
                onChange={handleChange}
                value={profileUpdate.ageRange}
              />
            </label>
          </div>
          <div className="cell medium-6">
            <label htmlFor="introduction">
              Introduction
              <textarea
                id="introduction"
                name="introduction"
                onChange={handleChange}
                value={profileUpdate.introduction}
                className="profile-textarea"
              />
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="button primary">
        Save Profile
      </button>
    </form>
  );
  // fill out a form
  // native language - api for drop down list, which will include text input
  // english level - drop-down
  // ageRange - drop-down
  // location - api for drop down list, which will include text input
  // introduction - text area
  // *(Future) topics of interest: 12 boolean value, from a separate table
  // Submit, clear, and edit functionalities
};
export default UserProfileForm;
