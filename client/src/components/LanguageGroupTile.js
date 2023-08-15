import React from "react"
import { Link } from "react-router-dom"

const LanguageGroupsTile = (props) => {
  const { topic, location, englishLevel, minMembers, maxMembers } = props.languageGroup
  return (
    <div className="languageGroupTile">
        <p>Topic: {topic}</p>
        <p>Location: {location}</p>
        <p>Level: {englishLevel}</p>
        <p>Group size: {minMembers} - {maxMembers} people</p>
    </div>
  )
}

export default LanguageGroupsTile