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
  function onClickShows(item) {
    const [shows, setShows] = useState("");
    var genre = podcastDB[item];
    setShows(genre.show);
    setShows(genre.rating);
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
              padding: "1rem 1rem",
              border: "0.5px solid black",
              margin: "1rem",
              borderRadius: "4rem",
              cursor: "pointer"
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
