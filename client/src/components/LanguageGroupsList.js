import React, { useState, useEffect } from "react";
import LanguageGroupsTile from "./LanguageGroupTile";

const LanguageGroupsList = (props) => {
  const [languageGroupList, setLanguageGroupList] = useState([]);

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

  const languageGroupTiles = languageGroupList.map((languageGroup) => {
    console.log("FROM THE LIST PAGE, id IS ", languageGroup.id);
    return <LanguageGroupsTile key={languageGroup.id} languageGroup={languageGroup} />;
  });

  return (
    <div className="background">
      <h1>This is the open group list</h1>
      {languageGroupTiles}
    </div>
  );
};

export default LanguageGroupsList;
