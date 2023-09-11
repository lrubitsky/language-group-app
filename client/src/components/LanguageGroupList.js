import React, { useState, useEffect } from "react";
import LanguageGroupsTile from "./LanguageGroupTile";
import LanguageGroupForm from "./LanguageGroupForm";
import Popup from "./PopUp";

const LanguageGroupList = (props) => {
  const [languageGroupList, setLanguageGroupList] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  const getLanguageGroups = async () => {
    try {
      const response = await fetch("/api/v1/language-groups");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();

      setLanguageGroupList(responseBody.languageGroups);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getLanguageGroups();
  }, []);

  const languageGroupTiles = languageGroupList
    .slice()
    .reverse()
    .map((languageGroup) => {
      return <LanguageGroupsTile key={languageGroup.id} languageGroup={languageGroup} />;
    });
  return (
    <div className="background">
      <h1>This is the open group list</h1>
      {props.user ? (
        <div className="centered">
          <div className="box">
            <div className="centered">
              <button className="plus-button" onClick={() => setButtonPopup(true)}></button>
            </div>
            Create Group
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <LanguageGroupForm
              languageGroupList={languageGroupList}
              setLanguageGroupList={setLanguageGroupList}
              user={props.user}
            />
          </Popup>
        </div>
      ) : (
        <p>Sign-up/sign-in to join and create language groups</p>
      )}
      {languageGroupTiles}
    </div>
  );
};

export default LanguageGroupList;
