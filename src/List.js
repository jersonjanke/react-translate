import React from "react";

const records = [
  {
    recordName: "React Rave",
    artistName: "The developers",
    description: "A rocking good rave bopping to the tune of javascript",
  },
  {
    recordName: "Build app",
    artistName: "The components",
    description: "Sounds of the future",
  },
];

const List = () => {
  return (
    <ul>
      {records.map(({ recordName, artistName, description }) => (
        <li key={recordName}>
          <h3>{recordName}</h3>
          <span>{artistName}</span>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
