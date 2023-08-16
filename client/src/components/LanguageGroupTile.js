import React from "react"
import { Link } from "react-router-dom"

const LanguageGroupsTile = (props) => {
  const { topic, location, englishLevel, minMembers, maxMembers, id } = props.languageGroup
  return (
    <div className="languageGroupTile">
        <p>Topic: {topic}</p>
        <p>Location: {location}</p>
        <p>Level: {englishLevel}</p>
        <p>Group Size: {minMembers} - {maxMembers} people</p>
        <Link to={`/language-groups/${id}`}>See More Details</Link>
    </div>
  )
}

export default LanguageGroupsTile