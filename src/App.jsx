import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [skills, setSkills] = useState(localStorage.getItem("skills") || "");
  const [jobTitle, setJobTitle] = useState(localStorage.getItem("jobTitle") || "Intern");
  const [jobPurpose, setJobPurpose] = useState(localStorage.getItem("jobPurpose") || "Work together with the research scientists or other team members.");
  const [duties, setDuties] = useState(localStorage.getItem("duties") || "");
  const [experience, setExperience] = useState(localStorage.getItem("experience") || "");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("skills", skills);
    localStorage.setItem("jobTitle", jobTitle);
    localStorage.setItem("jobPurpose", jobPurpose);
    localStorage.setItem("duties", duties);
    localStorage.setItem("experience", experience);
  }, [skills, jobTitle, jobPurpose, duties, experience]);

  const handleDifficultyClick = (level) => {
    setDifficulty(level);
  };

  const handleNextClick = () => {
    const skillsArray = skills.split(",").map(skill => skill.trim());
    navigate("/new-page", { state: { jobTitle, jobPurpose, duties, experience, skills: skillsArray, difficulty } });
  };

  return (
    <div className="container">
      <h1 className="header">Enter Job Description</h1>
      <div className="content">
        <div className="row">
          <div className="label">Job Title</div>
          <textarea className="textarea" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </div>

        <div className="row">
          <div className="label">Job Purpose</div>
          <textarea className="textarea" value={jobPurpose} onChange={(e) => setJobPurpose(e.target.value)} />
        </div>

        <div className="row">
          <div className="label">Duties and Responsibilities</div>
          <textarea className="textarea" value={duties} onChange={(e) => setDuties(e.target.value)} />
        </div>

        <div className="row">
          <div className="label">Experience</div>
          <textarea className="textarea" value={experience} onChange={(e) => setExperience(e.target.value)} />
        </div>

        <div className="row">
          <div className="label">Skills</div>
          <textarea
            className="textarea"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter skills separated by commas (e.g., Python, API, React)"
          />
        </div>

        <div className="row">
          <div className="label">Difficulty</div>
          <div className="buttons">
            <button
              className={difficulty === "easy" ? "button-active" : "button"}
              onClick={() => handleDifficultyClick("easy")}
            >
              EASY
            </button>
            <button
              className={difficulty === "medium" ? "button-active" : "button"}
              onClick={() => handleDifficultyClick("medium")}
            >
              MEDIUM
            </button>
            <button
              className={difficulty === "hard" ? "button-active" : "button"}
              onClick={() => handleDifficultyClick("hard")}
            >
              HARD
            </button>
          </div>
        </div>

        <div className="row">
          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
