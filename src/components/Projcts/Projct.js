import React from 'react';
import './Projct.css';

export const Projct = ({ githubLinkWeather, githubLinkChat}) => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id='proj'>
      <div className="project">
        <h1>My Projects</h1>
        <p>Dive into my project section to know my expertise</p>
        <div className="button-container">
          <h1>Weather App</h1>
          <button className="github-button" onClick={() => handleButtonClick(githubLinkWeather)}>
            View on GitHub
          </button>
        </div>
        <div className="button-container">
        <h1>Chat App</h1>
          <button className="github-button" onClick={() => handleButtonClick(githubLinkChat)}>
            View on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};
