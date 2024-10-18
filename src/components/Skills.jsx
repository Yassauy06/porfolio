import React, { useState } from 'react';


function Skils() {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [skillRange, setSkillRange] = useState(0);

  const addSkill = () => {
    if (skillName && skillRange > 0) {
      setSkills([...skills, { name: skillName, range: skillRange }]);
      setSkillName('');
      setSkillRange(0);
    }
  };
 
  
    return (
      <div className="skills-container">
        <h1 className='title-page'>Skills</h1>
        <div className="skill-input">
          <input
            type="text"
            placeholder="Enter skill name"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter skill range"
            value={skillRange}
            onChange={(e) => setSkillRange(e.target.value)}
            min="0"
            max="100"
          />
          <button onClick={addSkill}>Add Skill</button>
        </div>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <span className='skill-name'>{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: skill.range + '%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  


export default Skils;