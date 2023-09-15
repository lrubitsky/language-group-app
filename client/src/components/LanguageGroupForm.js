import React, { useState } from "react";
import ErrorList from "./layout/ErrorList";

import translateServerErrors from "../services/translateServerErrors";

const LanguageGroupForm = (props) => {
  const [groupRecord, setGroupRecord] = useState({
    title: "",
    topic: "",
    location: "",
    englishLevel: "",
    minMembers: "",
    maxMembers: "",
    placeCategory: "",
    creatorId: props.user.id,
  });

  console.log("Current user, ", props.user);

  const [errors, setErrors] = useState([]);
  const addNewGroup = async () => {
    try {
      const response = await fetch("/api/v1/language-groups", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(groupRecord),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          console.log(newErrors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const body = await response.json();
        console.log("Post was successful!", body);
        props.setLanguageGroupList(props.languageGroupList.concat(body.languageGroup));
        console.log("list", props.languageGroupList);
      }
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewGroup();
  };

  const handleChange = (event) => {
    const targetInput = event.currentTarget;
    let value;

    setGroupRecord({
      ...groupRecord,
      [event.currentTarget.name]: targetInput.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="group-form">
      <h3>Create a New Language Group</h3>
      <ErrorList errors={errors} />
      <label htmlFor="title">
        Title
        <input
          id="title"
          type="text"
          name="title"
          onChange={handleChange}
          value={groupRecord.title}
        />
      </label>
      <label htmlFor="topic">
        Other Topic
        <input
          id="topic"
          type="text"
          name="topic"
          onChange={handleChange}
          value={groupRecord.topic}
        />
      </label>
      <label htmlFor="location">
        Location
        <input
          id="location"
          type="text"
          name="location"
          onChange={handleChange}
          value={groupRecord.location}
        />
      </label>
      <label htmlFor="englishLevel">
        English Level
        <input
          id="englishLevel"
          type="text"
          name="englishLevel"
          onChange={handleChange}
          value={groupRecord.englishLevel}
        />
      </label>
      <label htmlFor="minMembers">
        Minimum Members
        <input
          id="minMembers"
          type="text"
          name="minMembers"
          onChange={handleChange}
          value={groupRecord.minMembers}
        />
      </label>
      <label htmlFor="maxMembers">
        Maximum Members
        <input
          id="maxMembers"
          type="text"
          name="maxMembers"
          onChange={handleChange}
          value={groupRecord.maxMembers}
        />
      </label>
      <label htmlFor="placeCategory">
        Place Category
        <input
          id="placeCategory"
          type="text"
          name="placeCategory"
          onChange={handleChange}
          value={groupRecord.placeCategory}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LanguageGroupForm;
