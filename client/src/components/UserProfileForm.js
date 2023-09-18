import React, { useState } from "react";
import Popup from "./PopUp";
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

      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          console.log("Validation Errors:", body);
          const newErrors = translateServerErrors(body.errors);

          console.log("new errors", newErrors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status}(${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const body = await response.json();
        props.setProfile(body);
        console.log("The patch was successful", body);
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleChange = (event) => {
    const targetInput = event.currentTarget;
    const name = targetInput.name;
    let value = targetInput.value;

    if (targetInput.type === "checkbox") {
      value = targetInput.checked;
    } else {
      value = targetInput.value;
    }

    setProfileUpdate({
      ...profileUpdate,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile();
  };

  const englishLevels = ["low", "intermediate", "high"];
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
      <label htmlFor="firstName">
        First Name
        <input
          id="firstName"
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder={JSON.stringify(props.profile.firstName)}
          value={profileUpdate.firstName}
        />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input
          id="lastName"
          type="text"
          name="lastName"
          onChange={handleChange}
          placeholder={JSON.stringify(props.profile.lastName)}
          value={profileUpdate.lastName}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          placeholder={JSON.stringify(props.profile.email)}
          value={profileUpdate.email}
        />
      </label>
      <label htmlFor="nativeLanguage">
        Native Language
        <input
          id="nativeLanguage"
          type="text"
          name="nativeLanguage"
          onChange={handleChange}
          placeholder={JSON.stringify(props.profile.nativeLanguage)}
          value={profileUpdate.nativeLanguage}
        />
      </label>
      <label htmlFor="englishLevel">
        English Level
        <select
          id="englishLevel"
          name="englishLevel"
          onChange={handleChange}
          value={profileUpdate.englishLevel}
        >
          <option value="">Select Level</option>
          {levelOptions}
        </select>
      </label>
      <label htmlFor="location">
        Location
        <input
          id="location"
          type="text"
          name="location"
          onChange={handleChange}
          placeholder={JSON.stringify(props.profile.location)}
          value={profileUpdate.location}
        />
      </label>
      <label htmlFor="ageRange">
        Age
        <input
          id="ageRange"
          type="text"
          name="ageRange"
          onChange={handleChange}
          placeholder={JSON.stringify(props.profile.ageRange)}
          value={profileUpdate.ageRange}
        />
      </label>
      <label htmlFor="introduction">
        Introduction
        <textarea
          id="introduction"
          name="introduction"
          onChange={handleChange}
          placeholder={JSON.stringify(props.profile.introduction)}
          value={profileUpdate.introduction}
          className="profile-textarea"
        />
      </label>
      <div className="topic-checkboxes">
        Interests
        <div className="container">
          <div className="grid-container">
            <div className="grid-x grid-margin-x topic-grid">
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="travel">
                  <input
                    id="travel"
                    type="checkbox"
                    name="travel"
                    onChange={handleChange}
                    value={profileUpdate.travel}
                    checked={props.profile.travel === true ? true : false}
                  />
                  travel
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="music">
                  <input
                    id="music"
                    type="checkbox"
                    name="music"
                    onChange={handleChange}
                    value={profileUpdate.music}
                    checked={props.profile.music === true ? true : false}
                  />
                  music
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="careers">
                  <input
                    id="careers"
                    type="checkbox"
                    name="careers"
                    onChange={handleChange}
                    value={profileUpdate.careers}
                    checked={props.profile.careers === true ? true : false}
                  />
                  careers
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="sports">
                  <input
                    id="sports"
                    type="checkbox"
                    name="sports"
                    onChange={handleChange}
                    value={profileUpdate.sports}
                    checked={props.profile.sports === true ? true : false}
                  />
                  sports
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="relationships">
                  <input
                    id="relationships"
                    type="checkbox"
                    name="relationships"
                    onChange={handleChange}
                    value={profileUpdate.relationships}
                    checked={props.profile.relationships === true ? true : false}
                  />
                  relationships
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="community">
                  <input
                    id="community"
                    type="checkbox"
                    name="community"
                    onChange={handleChange}
                    value={profileUpdate.community}
                    checked={props.profile.community === true ? true : false}
                  />
                  community
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="technology">
                  <input
                    id="technology"
                    type="checkbox"
                    name="technology"
                    onChange={handleChange}
                    value={profileUpdate.technology}
                    checked={props.profile.technology === true ? true : false}
                  />
                  technology
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="fashion">
                  <input
                    id="fashion"
                    type="checkbox"
                    name="fashion"
                    onChange={handleChange}
                    value={profileUpdate.fashion}
                    checked={props.profile.fashion === true ? true : false}
                  />
                  fashion
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="politics">
                  <input
                    id="politics"
                    type="checkbox"
                    name="politics"
                    onChange={handleChange}
                    value={profileUpdate.politics}
                    checked={props.profile.politics === true ? true : false}
                  />
                  politics
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="pets">
                  <input
                    id="pets"
                    type="checkbox"
                    name="pets"
                    onChange={handleChange}
                    value={profileUpdate.pets}
                    checked={props.profile.pets === true ? true : false}
                  />
                  pets
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="food">
                  <input
                    id="food"
                    type="checkbox"
                    name="food"
                    onChange={handleChange}
                    value={profileUpdate.food}
                    checked={props.profile.food === true ? true : false}
                  />
                  food
                </label>
              </div>
              <div className="cell small-12 medium-6 large-4">
                <label htmlFor="movies">
                  <input
                    id="movies"
                    type="checkbox"
                    name="movies"
                    onChange={handleChange}
                    value={profileUpdate.movies}
                    checked={props.profile.movies === true ? true : false}
                  />
                  movies
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="button primary">
        Save Profile
      </button>
    </form>
  );
};
export default UserProfileForm;
