import React, { useState, useEffect } from "react";
import JsApiLoaderGoogleMap from "./maps/JsApiLoaderGoogleMap";
import { Link } from "react-router-dom";
import JoinButton from "./JoinButton";
import ParticipationShow from "./ParticipantsShow";

const LanguageGroupShow = (props) => {
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
  const [participants, setParticipants] = useState([]);

  const languageGroupId = props.computedMatch.params.id;
  const currentUserId = props.user.id;

  // iterate over participants to see if the currentUser is in the list of particpants
  let userIsInGroup = !!participants.find((participant) => {
    return currentUserId === participant.id;
  });

  // gets the language group, and the creator, AND the participants of the group
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
      setParticipants(responseBody.languageGroup.participants);
      setSearchQuery(responseBody.languageGroup.placeCategory);
      setAddress(responseBody.languageGroup.location);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getLanguageGroup();
  }, []);

  const joinGroup = async () => {
    try {
      const response = await fetch(`/api/v1/participations`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          languageGroupId: languageGroupRecord.id,
          participantId: currentUserId,
        }),
      });
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const body = await response.json();
      setParticipants([...participants, props.user]);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  const leaveGroup = async () => {
    try {
      const response = await fetch(`/api/v1/participations?languageGroupId=${languageGroupId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const newParticipantsAfterLeaving = participants.filter(
        (participant) => participant.id !== currentUserId
      );
      setParticipants(newParticipantsAfterLeaving);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  return (
    <div className="background">
      <h2>Language Group Information</h2>
      <div className="group-info container">
        <h2>{languageGroupRecord.title}</h2>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell small-12">
              <ul>
                <li>
                  <strong>Topic:</strong> {languageGroupRecord.topic}
                </li>
                <li>
                  <strong>Location:</strong> {languageGroupRecord.location}
                </li>
                <li>
                  <strong>Size:</strong> {languageGroupRecord.minMembers} -{" "}
                  {languageGroupRecord.maxMembers} people
                </li>
                <li>
                  <strong>English level:</strong> {languageGroupRecord.englishLevel}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="info-block">
        <h2>Participants: </h2>
        <ParticipationShow participants={participants} languageGroupRecord={languageGroupRecord} />
      </div>
      <div className="centered">
        <JoinButton joinGroup={joinGroup} leaveGroup={leaveGroup} userIsInGroup={userIsInGroup} />
      </div>
      <p className="centered">
        {languageGroupRecord.creator.firstName}&nbsp;
        {languageGroupRecord.placeCategory !== "unsure" ? (
          <span>
            wants to meet at a <strong>{languageGroupRecord.placeCategory}</strong>.
          </span>
        ) : (
          "is unsure of which type of place to meet."
        )}
      </p>
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
