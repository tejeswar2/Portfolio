import React from 'react';
import './works.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faDatabase as faDatabaseSolid} from '@fortawesome/free-solid-svg-icons'; 


export const Works = () => {
  return (
    <section id='works'>
      <div className="skills_head">
        <h2>My <span>Skills</span></h2> <br/>
        <p>Below are my technical skills in which I am proficient</p>
      </div>

      <div className="skills_main">
        <div className="skill_bar">
          <div className="info">
            <p>HTML</p>
            <FontAwesomeIcon icon={faHtml5} style={{ color: '#E34F26' }} />
          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>CSS</p>
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#1572B6' }} />
          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>JavaScript</p>
            <FontAwesomeIcon icon={faJs} style={{ color: '#F7DF1E' }} />
          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>ReactJS</p>
            <FontAwesomeIcon icon={faReact} style={{ color: '#61DAFB' }} />
          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>NodeJS</p>
            <FontAwesomeIcon icon={faNodeJs} style={{ color: '#68A063' }} />
          </div>
        </div>


        <div className="skill_bar">
          <div className="info">
            <p>ExpressJS</p>
            <FontAwesomeIcon icon={faNodeJs} style={{ color: '#68A063' }} />

          </div>
        </div>

        <div className="skill_bar">
          <div className="info">
            <p>MySQL</p>
            <FontAwesomeIcon icon={faDatabaseSolid} style={{ color: '#4DB33D' }} />
          </div>
        </div>


        <div className="skill_bar">
          <div className="info">
            <p>MongoDB</p>
            <FontAwesomeIcon icon={faDatabaseSolid} style={{ color: '#4DB33D' }} />
          </div>
        </div>
      </div>
    </section>
  );
}