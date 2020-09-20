import React from 'react';
import './styles/App.scss';

import Intro from './Components/intro/Intro';
import Experience from './Components/experience/Experience';
import About from './Components/about/About';
import Social from './Components/social/social'

function App() {
  return (
    <main>
    <Intro/>
    <About />
    <Experience/>
    <Social />
    </main>
  );
}

export default App;
