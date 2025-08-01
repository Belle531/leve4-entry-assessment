import React, { useState } from "react";
import "./AboutMe.css";

const hobbies = [
  "Reading sci-fi novels",
  "Hiking",
  "Playing chess",
  "Coding small projects",
];

const languages = [
  "JavaScript",
  "Python",
  "C++",
  "TypeScript",
  "Ruby",
];

export default function AboutMe() {
  const [showFunFact, setShowFunFact] = useState(false);
  const [favoriteLang, setFavoriteLang] = useState(languages[0]);

  return (
    <div className="aboutme-container">
      {/* Basic Info */}
      <div className="text-center">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocJza_8qk52UuMSbY8ZUTnFRjMFcLarvhpi4dkhKRocBgV7M5F4=s288-c-no"
          alt="Profile"
          className="profile-pic"
        />
        <h2 className="mb-1">Cassandra Moore</h2>
        <p className="text-secondary mb-0">
          Hi! I’m Cassandra Moore, an enthusiastic learner passionate about technology and creative problem-solving. I love exploring new tools and sharing knowledge with others.
        </p>
      </div>
      {/* Learning Style */}
      <section className="aboutme-section">
        <h4> My Learning Style</h4>
        <p>
          My favorite way to learn is hands-on and visual—building mini-projects, watching live coding demos, and collaborating in pair programming sessions. I also enjoy supplementing with YouTube tutorials for tricky topics.
        </p>
      </section>
      {/* Previous Cohort Reflection */}
      <section className="aboutme-section">
        <h4>What I Loved From My Previous Level</h4>
        <ul>
          <li>Supportive community and group study sessions</li>
          <li>Lots of project-based assignments</li>
          <li>Clear explanations from instructors</li>
        </ul>
      </section>
      {/* Self-Assessment Section */}
      <section className="aboutme-section">
        <h4> Where I’m At</h4>
        <p>
          <strong>Confident with:</strong> useState, .map(), array methods, basic loops, fetch API.
          <br />
          <strong>Want to strengthen:</strong> React context, advanced hooks, CSS modules.
          <br />
          <strong>Curious to explore next:</strong> Building full-stack apps with APIs and authentication.
        </p>
      </section>
      {/* Hobbies */}
      <section className="aboutme-section">
        <h4> My Hobbies & Interests</h4>
        <ul>
          {hobbies.map((hobby, idx) => (
            <li key={idx}>{hobby}</li>
          ))}
        </ul>
      </section>
      {/* Fun Fact Toggle */}
      <section className="aboutme-section">
        <button
          className="fun-fact-btn"
          onClick={() => setShowFunFact((show) => !show)}
        >
          {showFunFact ? "Hide" : "Show"} Fun Fact
        </button>
        {showFunFact && (
          <div className="alert-info" tabIndex={0} aria-live="polite">
            I once built a robot that could solve a Rubik’s cube!
          </div>
        )}
      </section>
      {/* Bonus: Favorite Programming Language */}
      <section className="aboutme-section">
        <h4> Favorite Programming Language</h4>
        <label htmlFor="favLang" className="form-label">
          Pick your favorite:
        </label>
        <select
          id="favLang"
          className="fav-lang-select"
          value={favoriteLang}
          onChange={(e) => setFavoriteLang(e.target.value)}
        >
          {languages.map((lang, idx) => (
            <option key={idx} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <div className="mt-2">
          <strong>Your pick:</strong> {favoriteLang}
        </div>
      </section>
    </div>
  );
}