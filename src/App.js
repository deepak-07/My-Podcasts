import React, { useState } from "react";
import "./styles.css";

var podcastDB = {
  technical: [
    {
      show: "teaWithTanay",
      rating: "5/5"
    },
    {
      show: "developerDuvidha",
      rating: "4/5"
    }
  ],
  entreprenaur: [
    {
      show: "varunMayya",
      rating: "4/5"
    }
  ],
  selfLearning: [
    {
      show: "beerbiceps",
      rating: "5/5"
    }
  ]
};

var podcastShelf = Object.keys(podcastDB);

export default function App() {
  const [genre, setGenre] = useState("technical");

  function onClickShows(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>My Podcast</h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      <h4> See my recommendation</h4>

      {podcastShelf.map(function (genre, item) {
        return (
          <span
            onClick={() => onClickShows(genre)}
            style={{
              display: "inline",
              padding: "1rem 1rem",
              border: "0.5px solid black",

              borderRadius: "4rem",
              cursor: "pointer"
            }}
            key={item}
          >
            {genre}
          </span>
        );
      })}

      <div>
        <ul style={{ listStyle: "none" }}>
          {podcastDB[genre].map(function (shows) {
            return (
              <span
                style={{
                  display: "block",
                  padding: "2rem 1rem",
                  margin: ""
                }}
              >
                <li>Shows :{shows.show}</li>
                <li>Ratings :{shows.rating}</li>
              </span>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
