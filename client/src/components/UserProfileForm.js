import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors";

const UserProfileForm = (props) => {
  const [profileRecord, setProfileRecord] = useState({
    nativeLanguage: "",
    englishLevel: "",
    ageRange: "",
    location: "",
    introduction: "",
  });
  const [errors, setErrors] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const addProfile = async () => {
    try {
      const response = await fetch("api/v1/users", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(profileRecord),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status}(response.statusText)`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const body = await response.json();
        console.log("The post was successful", body);
        setShouldRedirect(true);
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleChange = (event) => {
    const targetInput = event.currentTarget;

    setProfileRecord({
      ...profileRecord,
      [event.currentTarget.name]: targetInput.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProfile();
  };

  if (shouldRedirect) {
    return <Redirect push to="/language-groups" />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Your Profile</h2>
      <ErrorList errors={errors} />
      <label htmlFor="nativeLanguage">
        Native Language
        <input
          id="nativeLanguage"
          type="text"
          name="nativeLanguage"
          onChange={handleChange}
          value={profileRecord.nativeLanguage}
        />
      </label>
      <label htmlFor="nativeLanguage">
        English Level
        <input
          id="englishLevel"
          type="text"
          name="englishLevel"
          onChange={handleChange}
          value={profileRecord.englishLevel}
        />
      </label>
      <label htmlFor="ageRange">
        Age
        <input
          id="ageRange"
          type="text"
          name="ageRange"
          onChange={handleChange}
          value={profileRecord.ageRange}
        />
      </label>
      <label htmlFor="location">
        Location
        <input
          id="location"
          type="text"
          name="location"
          onChange={handleChange}
          value={profileRecord.location}
        />
      </label>
      <label htmlFor="introduction">
        introduction
        <input
          id="introduction"
          type="text"
          name="introduction"
          onChange={handleChange}
          value={profileRecord.introduction}
        />
      </label>
      <input type="submit" value="Set Profile" />
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
