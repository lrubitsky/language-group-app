import React, { useState, useEffect } from "react";
import JsApiLoaderGoogleMap from "./maps/JsApiLoaderGoogleMap";
import { Link } from "react-router-dom";

const LanguageGroupShow = (props) => {
  const [languageGroupRecord, setLanguageGroupRecord] = useState({
    topic: "",
    location: "",
    englishLevel: "",
    minMembers: 0,
    maxMembers: 0,
    placeCategory: "",
    creator: {},
    creatorId: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [address, setAddress] = useState(null);

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
      setAddress(responseBody.languageGroup.location);
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
      <div className="info-block">
        <p>
          Group started by:
          <Link to={`/users/${languageGroupRecord.creatorId}`}>
            {` ${languageGroupRecord.creator.firstName} ${languageGroupRecord.creator.lastName}.`}
          </Link>
        </p>
        <p>Topic: {languageGroupRecord.topic}</p>
        <p>Location: {languageGroupRecord.location}</p>
        <p>Level: {languageGroupRecord.englishLevel}</p>
        <p>
          Group Size: {languageGroupRecord.minMembers} - {languageGroupRecord.maxMembers} people
        </p>
        <p>
          {languageGroupRecord.creator.firstName} wants to meet at a{" "}
          <strong>{getPlaceCategory()}</strong>.
        </p>
      </div>
      <JsApiLoaderGoogleMap
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        address={address}
        setAddress={setAddress}
      />
    </div>
  );
};
export default LanguageGroupShow;
