import React, { useState, useEffect } from "react";
import JsApiLoaderGoogleMap from "./maps/JsApiLoaderGoogleMap";

const LanguageGroupShow = (props) => {
  const [languageGroupRecord, setLanguageGroupRecord] = useState({
    topic: "",
    location: "",
    englishLevel: "",
    minMembers: 0,
    maxMembers: 0,
    placeCategory: "",
  });

  const [searchQuery, setSearchQuery] = useState("");

  const getLanguageGroup = async () => {
    try {
      const languageGroupId = props.match.params.id;
      const response = await fetch(`/api/v1/language-groups/${languageGroupId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setLanguageGroupRecord(responseBody.languageGroup);
      setSearchQuery(responseBody.languageGroup.placeCategory);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getLanguageGroup();
  }, []);

  const getPlaceCategory = () => {
    return languageGroupRecord.placeCategory !== null
      ? languageGroupRecord.placeCategory
      : "Open to anything";
  };
  return (
    <div className="background">
      <div>
        <p>Topic: {languageGroupRecord.topic}</p>
        <p>Location: {languageGroupRecord.location}</p>
        <p>Level: {languageGroupRecord.englishLevel}</p>
        <p>
          Group Size: {languageGroupRecord.minMembers} - {languageGroupRecord.maxMembers} people
        </p>
        <p>Place Category: {getPlaceCategory()}</p>
      </div>
      <JsApiLoaderGoogleMap searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};
export default LanguageGroupShow;
