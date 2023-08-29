import React from "react";
import { Link } from "react-router-dom";

const ParticipationShow = (props) => {
  return (
    <div>
      {props.participants.length > 0 ? (
        props.participants.map((participant, index) => (
          <div key={index} style={{ display: "inline-block" }}>
            <p>
              {participant.imageUrl ? (
                <img
                  src={participant.imageUrl}
                  alt={`${participant.firstName} ${participant.lastName}`}
                />
              ) : (
                <span>No image available</span>
              )}
            </p>
            <span>
              <Link to={`/users/${participant.id}`}>
                {participant.firstName} {participant.lastName}
              </Link>
            </span>
            <p>
              {props.languageGroupRecord.creator.id === participant.id ? (
                <i>(Organizer)</i>
              ) : (
                <br />
              )}
            </p>
          </div>
        ))
      ) : (
        <span>No participants yet.</span>
      )}
    </div>
  );
};

export default ParticipationShow;
