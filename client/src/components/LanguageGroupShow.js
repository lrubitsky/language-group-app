import React, { useState, useEffect } from "react";
import JsApiLoaderGoogleMap from "./maps/JsApiLoaderGoogleMap";
import { Link } from "react-router-dom";

const LanguageGroupShow = (props) => {
  // debugger
  const participant = props.user;

  console.log("Props: ", props);
  console.log("Participant: ", participant);

  const [languageGroupRecord, setLanguageGroupRecord] = useState({
    topic: "",
    location: "",
    englishLevel: "",
    minMembers: 0,
    maxMembers: 0,
    placeCategory: "",
    creator: {},
    id: "",
    creatorId: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [address, setAddress] = useState(null);

  const [joined, setJoined] = useState(false);

  const languageGroupId = props.computedMatch.params.id;

  const getLanguageGroup = async () => {
    try {
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

  const joinGroup = async () => {
    try {
      const response = await fetch(`/api/v1/participations`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(languageGroupRecord.id),
      });
      const body = await response.json();
      console.log("You have joined the language group!", body);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
    setJoined(true);
  };

  const handleJoinButton = (event) => {
    event.preventDefault();
    joinGroup();
  };

  return (
    <div className="background">
      {/* <h2>Language Group Information</h2> */}
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
        <input type="button" value="Join this group" onClick={handleJoinButton} />
        {joined && <p>You have joined!</p>}
      </div>
      {/* Put name of current user here after joined */}
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
