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
  const [genre, setGenre] = useState();

  function onClickShows(item) {
    setGenre(item);
    // setGenre(genre.rating);
  }

  return (
    <div className="App">
      <h1>My Podcast</h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      <h4> See my recommendation</h4>

      {podcastShelf.map(function (item) {
        return (
          <span
            onClick={() => onClickShows(item)}
            style={{
              display: "block",
              padding: "1rem 1rem",
              border: "0.5px solid black",
              margin: "1rem",
              borderRadius: "4rem",
              cursor: "pointer"
            }}
            key={item}
          >
            {item}
            <div>
              {podcastDB[item].map(function (shows) {
                return (
                  <span>
                    {shows.show}
                    {shows.rating}
                  </span>
                );
              })}
            </div>
          </span>
        );
      })}
    </div>
  );
}
