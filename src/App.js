import React from 'react';
import { Navbar } from './components/NavBar/navbar';
import { Intro } from './components/Intro/intro';
import { Skill } from './components/Skills/skill';
import { Works } from './components/Works/works';
import { Contact } from './components/Contact/contact';
import { Footer } from './components/Footer/footer';
import { Projct } from './components/Projcts/Projct';

function App() {
  const projectLinks = {
    weatherApp: "https://github.com/tejeswar2/wapp",
    ChatApp: "https://github.com/tejeswar2/chatApp",
  };

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Projct githubLinkWeather={projectLinks.weatherApp} githubLinkChat={projectLinks.ChatApp} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
