import React, { useState } from "react";
import "./styles.css";
import bg from "/podcast.jpg";
var podcastDB = {
  technical: [
    {
      show: "Developer Duvidha",
      rating: "4.5/5",
      link:
        "https://open.spotify.com/show/5PabW1rGCv7tKelY8JOCm3?si=iOWhRWcJQCGnRBqVPwr5ZQ"
    },
    {
      show: "teawithtanay",
      rating: "5/5",
      link:
        "https://open.spotify.com/show/3dDVSp6sK7EGfw09jkvIl8?si=GEUy4kcOQ-yOtfbbUwQWEw"
    },
    {
      show: "JavaScript Jabber",
      rating: "3.5/5",
      link:
        "https://open.spotify.com/show/6xpiit8aJmwDHk1rKdxmri?si=6-F4J-bfSl6Oep7x-0q9iw"
    }
  ],
  entreprenaur: [
    {
      show: "Cero",
      rating: "4/5",
      link:
        "https://open.spotify.com/show/0oXQacWACc5lVBWWJYQO8Z?si=Dce0ltGkQ5WiUhTvAgmxvA"
    },
    {
      show: "The Tim Ferris Show",
      rating: "5/5",
      link:
        "https://open.spotify.com/show/5qSUyCrk9KR69lEiXbjwXM?si=GedijWUsQRiWD2WFdckMQw"
    }
  ],
  inspirational: [
    {
      show: "The Ranveer Show",
      rating: "5/5",
      link:
        "https://open.spotify.com/show/6ZcvVBPQ2ToLXEWVbaw59P?si=1_AjcOsIRIehjxogLU6-0w"
    },
    {
      show: "Wings Of Fire",
      rating: "4/5",
      link:
        "https://open.spotify.com/episode/1TFoKpylr4viF6RlShjOSz?si=3ChALz4DT4qDhKPaT0npNg"
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
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover ",
        minHeight: "600px"
      }}
    >
      <h1 style={{ padding: "1rem", color: "rgba(49, 46, 129)" }}>
        My Podcast
      </h1>

      <h4> See my recommendation</h4>

      {podcastShelf.map(function (genre, item) {
        return (
          <span
            onClick={() => onClickShows(genre)}
            style={{
              display: "inline-block",
              padding: "1rem 1rem",
              border: "2px solid rgba(49, 46, 129)",
              borderRadius: "4rem",
              fontSize: "large",
              fontWeight: "bold",
              color: "rgba(37, 99, 235)",
              margin: "2px 2px",
              cursor: "pointer"
            }}
            key={item}
          >
            {genre}
          </span>
        );
      })}
      <hr style={{ color: "rgba(49, 46, 129)" }} />
      <div>
        <ul style={{ listStyle: "none" }}>
          {podcastDB[genre].map(function (shows) {
            return (
              <span
                style={{
                  display: "block",
                  boxSizing: "border-box",
                  padding: "1rem 1rem",
                  textAlign: "left",
                  borderRadius: "1rem",
                  fontSize: "large",
                  fontWeight: "bold",
                  color: "rgba(37, 99, 235)"
                }}
              >
                <li>Show :{shows.show}</li>
                <li>Ratings :{shows.rating}</li>
                <li>
                  <a
                    href={shows.link}
                    style={{
                      textDecoration: "none",
                      color: "rgba(49, 46, 129)"
                    }}
                  >
                    Play
                  </a>
                </li>
              </span>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
