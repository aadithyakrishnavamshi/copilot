import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './InterviewerCopilot.css';

const NewPage = () => {
  const { state } = useLocation();
  const { jobTitle, jobPurpose, duties, experience, skills = [], difficulty } = state || {};
  const [expandedSections, setExpandedSections] = useState([]);
  const [sectionDifficulty, setSectionDifficulty] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((s) => s !== section)
        : [...prevSections, section]
    );
  };

  const handleDifficultyChange = (section, level) => {
    setSectionDifficulty((prev) => ({
      ...prev,
      [section]: level,
    }));
  };

  return (
    <div className="container">
      <h1 className="header">Interviewer’s Copilot</h1>

      {skills.map((skill, index) => (
        <div key={index}>
          <div className="section" onClick={() => toggleSection(skill)}>
            <div className="sectionHeader">{`Section ${skill}`}</div>
            <div className="dropdownIcon">
              {expandedSections.includes(skill) ? '▼' : '►'}
            </div>
          </div>

          {expandedSections.includes(skill) && (
            <div className="questionsContainer">
              <ul className="questionsList">
                <li>Describe your experience with {skill}.</li>
                <li>How would you implement {skill} in a project?</li>
                <li>What challenges have you faced with {skill}?</li>
              </ul>

              <div className="difficultyContainer">
                <button
                  className={`difficultyButton ${sectionDifficulty[skill] === "e" ? "active" : ""}`}
                  onClick={() => handleDifficultyChange(skill, "e")}
                >
                  E
                </button>
                <button
                  className={`difficultyButton ${sectionDifficulty[skill] === "m" ? "active" : ""}`}
                  onClick={() => handleDifficultyChange(skill, "m")}
                >
                  M
                </button>
                <button
                  className={`difficultyButton ${sectionDifficulty[skill] === "h" ? "active" : ""}`}
                  onClick={() => handleDifficultyChange(skill, "h")}
                >
                  H
                </button>
                <button className="regenButton">Regenerate</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NewPage;
