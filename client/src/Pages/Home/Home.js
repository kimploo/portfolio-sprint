import React from "react";
import "./Home.css";

export function Home() {
  return (
    <div id="home-main-div">
      <div id="home-words-div">
        <div id="home-title">
          <h1>Hong Shik Branden Kim</h1>
          <h1>Front End Enginner</h1>
          <h1>Provides Best User Experience</h1>
          <h1>For You.</h1>
        </div>
        <div id="home-description">
          <div>
            I have been working in Codestates to promote my students to get
          </div>
          <div>best performance to become junior web dev.</div>
          <div>
            Our Tailor-made bootcamp contents' quality itself, is our UX
          </div>
        </div>
      </div>
      <div id="home-photo-wrapper">
        <div id="home-photo"></div>
      </div>
    </div>
  );
}
